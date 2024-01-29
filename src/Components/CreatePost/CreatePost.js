import { useMemo, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

import { brands, blades, environment, types } from '../../Data/Constants';

import { addUserPost } from '../../Data/Services/userInfo';
import { AddImages } from '../Common/AddImages/AddImages';

import { addDoc, collection } from 'firebase/firestore';

import { auth, db, storage } from "../../firebase-config.js";
import { ref, uploadBytesResumable } from "firebase/storage";

import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import TextareaAutosize from '@mui/material/TextareaAutosize';

import './CreatePost.scss';
import { useTranslation } from 'react-i18next';

function CreatePost() {
    const isAuth = useState(localStorage.getItem("isAuth"));

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [type, setType] = useState("");
    const [brand, setBrand] = useState("");
    const [condition, setCondition] = useState("");
    const [price, setPrice] = useState("");
    const [blade, setBlade] = useState("");

    const [disableSubmit, setDisableSubmit] = useState(false);

    // State to store uploaded file
    const [files, setFiles] = useState([]);
    // const [showFiles, setShowFiles] = useState([]);

    // progress
    const [percent, setPercent] = useState(0);

    // const [numberOfUploads, setNumberOfUploads] = useState(0);
    const [validation, setValidation] = useState({
        title: false,
        price: false,
        brand: false,
        sale: false,
        condition: false,
        blade: false,
        picture: false
    });

    const { t } = useTranslation();

    let isValidated = useMemo(() => {
        const valid = !Object.values(validation).some((item) => item === false);

        if (valid === true) {
            setDisableSubmit(false);
        }

        return valid;
    }, [validation]);
    
    const resetPostCreation = () => {
        setTitle("");
        setDescription("");
        setType("");
        setBrand("");
        setCondition("");
        setPrice("");
        setBlade("");
        // setNumberOfUploads(0);
        // setShowFiles([]);
        setFiles([]);
        setDisableSubmit(false);
    }

    // Handle file upload event and update state
    // function handlePictureChange(event) {
    //     if (event.target.files && event.target.files[0]) {
    //         setShowFiles(cur => [...cur, URL.createObjectURL(event.target.files[0])]);
    //         setFiles(cur => [...cur, event.target.files[0]]);
    //         setNumberOfUploads(numberOfUploads => numberOfUploads+1);
    //         setValidation(cur => {return {...cur, picture: true}});
    //     }
    // }

    // function removePicture(index) {

    //     let newShowFiles = [];
    //     let newFileNames = [];
    //     for (let i=0; i<showFiles.length;i++) {
    //         if (index!==i){
    //             newShowFiles.push(showFiles[i]);
    //             newFileNames.push(files[i]);
    //         }
    //     }
    //     setShowFiles(newShowFiles);
    //     setFiles(newFileNames);
    //     setNumberOfUploads(numOfUploads => numOfUploads-1);
    //     if (numberOfUploads-1 === 0){
    //         setValidation(cur => {return {...cur, picture: false}});
    //     }
    // }

    // function pictureInputs() {
    //     let allInputs = [];

    //     for (let i = 0; i < files.length; i++) {
    //         allInputs.push(
    //             <Col xs="12" className="setting-item center" key={files[i]?.name}>
    //                 <label className='profile-label' htmlFor={"inputPicture-"+files[i]?.name} onClick={() => removePicture(i)}>
    //                     <span>{files[i]?.name}</span>
    //                     <br />
    //                     <img id={"inputPicture-"+files[i]?.name} src={showFiles[i]} className="upload-image" alt="preview image" />
    //                 </label>
    //             </Col>
    //         );
    //     }

    //     return allInputs;
    // }

    const createPost = async () => {
        setDisableSubmit(true);

        if (!isValidated) {
            return
        }

        if (!files[0]) {
            alert("Please upload an image first!");
            return
        }

        const postsCollectionRef = collection(db, process.env.REACT_APP_ENVIRONMENT+"-posts");
        await addDoc(postsCollectionRef, {
            status: "Available",
            title,
            type,
            blade,
            brand, 
            condition,
            price,
            description,
            numberOfImages: files.length,
            timeStamp: Date.now(),
            author: {name: auth?.currentUser?.displayName || 'anonymous', id: auth?.currentUser?.uid || 'none' }
        }).then((result) => {
            const promises = [];
            
            files.map((file, index) => {
                const storageRef = ref(storage, `/${environment()}-postImages/${result.id}/image-${index}`);
                const uploadTask = uploadBytesResumable(storageRef, file);
                promises.push(uploadTask);

                uploadTask.on(
                    "state_changed",
                    (snapshot) => {
                        const percent = Math.round(
                            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                        );
                        setPercent(percent);
                    },
                    (err) => console.log(err),
                    () => {
                        console.log(storageRef);
                    }
                );
                return null;
            });

            Promise.all(promises).then(() => {
                console.log("all uploaded");
                resetPostCreation();
            }).catch((err) => {
                console.error(err)
            })
            return result;
        
        }).then((result) => {
            addUserPost(result.id);
        }).catch(() =>{
            console.log("error with creating post");
        });
    }

    const getOptions = (options, key) => {
        return options.map((name) => {
            return <MenuItem key={key+"-"+name} value={name}>{t(name)}</MenuItem>;
        });
    };

    const handleTitleChange = (event) => {
        let newValue = event.target.value;
        if (newValue.length > 25 || newValue.match(/['\-"><;:\\+{}!@#$%=^*_|[\]]/)) {
            return
        }

        setValidation(cur => {return {...cur, title: newValue !== ""}});
        setTitle(newValue);
    }

    const handlePriceChange = (event) => {
        let newValue = event.target.value;
        if (newValue.match(/[-]/)) {
            return
        }

        setValidation(cur => {return {...cur, price: newValue !== ""}});
        setPrice(newValue);
    }

    const handleBrandChange = (event) => {
        let newValue = event.target.value;
        if (newValue !== "") {
            setValidation(cur => {return {...cur, brand: true}});
        }
        
        setBrand(newValue);
    }

    const handleSaleChange = (event) => {
        let newValue = event.target.value;
        if (newValue !== "") {
            setValidation(cur => {return {...cur, sale: true}});
        }

        setType(newValue);
    }

    const handleConditionChange = (event) => {
        let newValue = event.target.value;
        if (newValue !== "") {
            setValidation(cur => {return {...cur, condition: true}});
        }
        
        setCondition(newValue);
    }

    const handleBladeChange = (event) => {
        let newValue = event.target.value;
        if (newValue !== "") {
            setValidation(cur => {return {...cur, blade: true}});
        }
        
        setBlade(newValue);
    }

    const handleDescriptionChange = (event) => {
        let newValue = event.target.value;
        if (newValue.length > 425 || newValue.match(/[\-><;:\\+{}@%=^*_|[\]]/)) {
            return;
        }
        setDescription(newValue);
    }
    

    const mainPage = (
        <>
            <Container className="create-header-container">
                <Row>
                    <Col className="create-header">
                        <h2>{t("Create Post")}</h2>
                    </Col>
                </Row>
            </Container>
            <Container className="create-container">
                <Row>
                    <Col xs={12} md={6} className="create-input">
                        <TextField fullWidth label={t("Title")} color="" error={validation.title === false && disableSubmit} type="search" value={title} onChange={handleTitleChange} />
                    </Col>
                    <Col xs={12} md={6} className="create-input">
                        <TextField fullWidth label={t("Price")} color="" error={validation.price === false && disableSubmit} type="number" value={price} onChange={handlePriceChange} />
                    </Col>
                    <Col xs={12} md={6} className="create-input">
                        <FormControl fullWidth error={validation.brand === false && disableSubmit}>
                            <InputLabel id="brand-label">{t("Brand")}</InputLabel>
                            <Select
                                labelId="brand-label"
                                id="brand-select"
                                label="Brand"
                                defaultValue=""
                                value={brand}
                                onChange={handleBrandChange}>
                                {getOptions(brands, "brand")}
                            </Select>
                        </FormControl>
                    </Col>
                    <Col xs={12} md={6} className="create-input">
                        <FormControl fullWidth error={validation.sale === false && disableSubmit}>
                            <InputLabel id="sale-type-label">{t("Sale Type")}</InputLabel>
                            <Select
                                labelId="sale-type-label"
                                id="sale-type-select"
                                label={t("Sale Type")}
                                defaultValue=""
                                value={type}
                                onChange={handleSaleChange}>
                                {getOptions(types, "type")}
                            </Select>
                        </FormControl>
                    </Col>
                    <Col xs={12} md={6} className="create-input">
                        <FormControl fullWidth error={validation.condition === false && disableSubmit}>
                            <InputLabel id="condition-label">{t("Condition")}</InputLabel>
                            <Select
                                labelId="condition-label"
                                id="condition-select"
                                label={t("Condition")}
                                defaultValue=""
                                value={condition}
                                onChange={handleConditionChange}>
                                {getOptions([1,2,3,4,5,6,7,8,9,10], "condition")}
                            </Select>
                        </FormControl>
                    </Col>
                    <Col xs={12} md={6} className="create-input">
                        <FormControl fullWidth error={validation.blade === false && disableSubmit}>
                            <InputLabel id="blade-label">{t("Blade")}</InputLabel>
                            <Select
                                labelId="blade-label"
                                id="blade-select"
                                label={t("Blade")}
                                defaultValue=""
                                value={blade}
                                onChange={handleBladeChange}>
                                {getOptions(blades, "blade")}
                            </Select>
                        </FormControl>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <TextareaAutosize style={{width: "100%"}} minRows={5} value={description} placeholder={t("Description")} label={t("Description")} onChange={handleDescriptionChange} />
                    </Col>
                </Row>
                <Row>
                    {/* <Col xs="12" className="setting-item center">
                        <label className='profile-label' htmlFor={"inputPicture-default"}>
                            <b>{t("Upload Image")}</b>
                            <input id={"inputPicture-default"} className="profile-input" type="file" onChange={e => handlePictureChange(e)} accept="/image/*" />
                            <br />
                            <FaImage size={70} className="" />
                        </label>
                    </Col>
                    {pictureInputs()} */}
                    <AddImages files={files} setFiles={setFiles} validation={validation} setValidation={setValidation} disableSubmit={disableSubmit} />
                </Row>
                <Row>
                    <Col xs={12} className="center">
                        <Button disabled={disableSubmit} className="create-submit-button" onClick={createPost}>{t("Submit")}</Button>
                    </Col>
                </Row>
            </Container>
        </>
    );
    
    const disabledPage = (
        <>
            <Container className="create-header-container">
                <Row>
                    <Col className="create-header">
                        <h2>{t("Information Missing")}</h2>
                    </Col>
                </Row>
            </Container>
            <Container className="create-container">
                <Row>
                    <Col xs={12}>
                        <h3>
                            Please login before trying to create a post.
                        </h3>
                    </Col>
                </Row>
            </Container>
        </>
    );

    

    return  isAuth[0]==='true' ? mainPage : disabledPage;
}

export default CreatePost;