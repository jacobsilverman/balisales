import { useMemo, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

import { brands, blades, types } from '../../Data/Constants';

import { addUserPost } from '../../Data/Services/userInfo';

import { addDoc, collection } from 'firebase/firestore';
import { auth, db } from '../../firebase-config';

import { storage } from "../../firebase-config.js";
import { ref, uploadBytesResumable } from "firebase/storage";

import { FaImage } from "react-icons/fa";

import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import TextareaAutosize from '@mui/material/TextareaAutosize';

import './CreatePost.scss';

function CreatePost() {
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
    const [showFiles, setShowFiles] = useState([]);

    // progress
    const [percent, setPercent] = useState(0);

    const [numberOfUploads, setNumberOfUploads] = useState(0);
    const [validation, setValidation] = useState({
        title: false,
        price: false,
        brand: false,
        sale: false,
        condition: false,
        blade: false
    });

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
        setNumberOfUploads(0);
        setFiles([]);
        setShowFiles([]);
        setDisableSubmit(false);
    }

    // Handle file upload event and update state
    function handlePictureChange(event, index) {
        if (event.target.files && event.target.files[0] && index === 0) {
            setShowFiles([URL.createObjectURL(event.target.files[0]), ...showFiles]);
            setFiles(cur => [...cur, event.target.files[0]]);
            setNumberOfUploads(numberOfUploads => numberOfUploads+1);
        }
    }

    function removePicture(index) {
        if (index !== 0) {
            setShowFiles(showFiles => showFiles.splice(index, 1));
            setFiles(files => files.splice(index, 1));
            setNumberOfUploads(numberOfUploads => numberOfUploads-1);
        }
    }

    function pictureInputs() {
        let allInputs = [];

        for (let i = 0; i <= numberOfUploads; i++) {
            allInputs.push(
                <Col xs="12" sm={(numberOfUploads > 0) ? 6 : 12} className="setting-item center" key={i+"+"+numberOfUploads}>
                    <label className='profile-label' htmlFor={"inputPicture-"+i} onClick={(i !==0)  ? () => removePicture(i) : null}>
                        <span>{files[numberOfUploads-i]?.name || "Upload Image"}</span>
                        {(i===0) && <input id={"inputPicture-"+i} className="profile-input" type="file" onChange={e => handlePictureChange(e, i)} accept="/image/*" />}
                        <br />
                        {(i===0) ? <FaImage size={70} className="" /> : <img src={showFiles[numberOfUploads-i]} className="upload-image" alt="preview image" />}
                    </label>
                </Col>
            );
        }

        return allInputs;
    }

    const createPost = async () => {
        if (!isValidated) {
            setDisableSubmit(true);
            return
        }

        if (!files[0]) {
            alert("Please upload an image first!");
            return
        }
        
        const postsCollectionRef = collection(db, "posts");
        await addDoc(postsCollectionRef, {
            title,
            type,
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
                const storageRef = ref(storage, `/PostImages/${result.id}/image-${index}`);
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

    const getOptions = (options) => {
        return options.map((name, key) => {
            return <MenuItem key={key} value={name}>{name}</MenuItem>;
        });
    };

    const handleTitleChange = (event) => {
        let newValue = event.target.value;
        if (newValue.match(/[%<>\\$'"]/)) {
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

    return (
        <Container className="create-container">
            <Row>
                <Col xs={12} md={6} className="create-input">
                    <TextField fullWidth label="title" color="" error={validation.title === false && disableSubmit} type="search" value={title} onChange={handleTitleChange} />
                </Col>
                <Col xs={12} md={6} className="create-input">
                    <TextField fullWidth label="price" color="" error={validation.price === false && disableSubmit} type="number" value={price} onChange={handlePriceChange}/>
                </Col>
                <Col xs={12} md={6} className="create-input">
                    <FormControl fullWidth error={validation.brand === false && disableSubmit}>
                        <InputLabel id="brand-label">Brand</InputLabel>
                        <Select
                            labelId="brand-label"
                            id="brand-select"
                            label="Brand"
                            onChange={handleBrandChange}>
                            {getOptions(brands, brand)}
                        </Select>
                    </FormControl>
                </Col>
                <Col xs={12} md={6} className="create-input">
                    <FormControl fullWidth error={validation.sale === false && disableSubmit}>
                        <InputLabel id="sale-type-label">Sale Type</InputLabel>
                        <Select
                            labelId="sale-type-label"
                            id="sale-type-select"
                            label="Sale Type"
                            onChange={handleSaleChange}>
                            {getOptions(types, type)}
                        </Select>
                    </FormControl>
                </Col>
                <Col xs={12} md={6} className="create-input">
                    <FormControl fullWidth error={validation.condition === false && disableSubmit}>
                        <InputLabel id="condition-label">Condition</InputLabel>
                        <Select
                            labelId="condition-label"
                            id="condition-select"
                            label="Condition"
                            onChange={handleConditionChange}>
                            {getOptions([1,2,3,4,5,6,7,8,9,10], condition)}
                        </Select>
                    </FormControl>
                </Col>
                <Col xs={12} md={6} className="create-input">
                    <FormControl fullWidth error={validation.blade === false && disableSubmit}>
                        <InputLabel id="blade-label">Blade</InputLabel>
                        <Select
                            labelId="blade-label"
                            id="blade-select"
                            label="Blade"
                            onChange={handleBladeChange}>
                            {getOptions(blades, blade)}
                        </Select>
                    </FormControl>
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <TextareaAutosize style={{width: "100%"}} minRows={5} value={description} placeholder="Description" label="description" onChange={(event) => setDescription(event.target.value)} />
                </Col>
            </Row>
            <Row>
                {pictureInputs()}
            </Row>
            <Row>
                <Col xs={12} className="center">
                    <Button disabled={disableSubmit} className="submit-button" onClick={createPost}>Submit</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default CreatePost;