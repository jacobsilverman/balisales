import { useEffect, useMemo, useState } from 'react';

import { blades, brands, types } from '../../../../../Data/Constants';

import DeleteModal from '../DeleteModal';

import { MenuItem, Modal, TextareaAutosize } from '@mui/material';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import { Button, Col, Row } from 'react-bootstrap';

import { doc, deleteDoc, setDoc } from 'firebase/firestore';
import { db } from '../../../../../firebase-config';
import { deleteUserPost } from '../../../../../Data/Services/userInfo';

import { ref, deleteObject, getStorage } from "firebase/storage";
import { useTranslation } from 'react-i18next';

const EditModal = ({item, openEditModal, setOpenEditModal, filterPosts, setFilterPosts}) => {
    const [title, setTitle] = useState(item?.title);
    const [description, setDescription] = useState(item?.description);
    const [type, setType] = useState(item?.type);
    const [blade, setBlade] = useState(item?.blade);
    const [brand, setBrand] = useState(item?.brand);
    const [condition, setCondition] = useState(item?.condition);
    const [price, setPrice] = useState(item?.price);
    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    // const [removedImages, setRemovedImages] = useState({});
    // State to store uploaded file
    // const [file, setFile] = useState("");
    
    // // Handle file upload event and update state
    // function handleChange(event) {
    //     setFile(event.target.files[0]);
    // }
    const [disableSubmit, setDisableSubmit] = useState(false);

    const [validation, setValidation] = useState({
        title: true,
        type: true,
        blade: true,
        brand: true,
        conidition: true,
        price: true
    });

    const { t } = useTranslation();

    useEffect(() => {
        setTitle(item?.title);
        setDescription(item?.description)
        setType(item?.type)
        setBlade(item?.blade)
        setBrand(item?.brand)
        setCondition(item?.condition)
        setPrice(item?.price)
    }, [item]);

    let isValidated = useMemo(() => {
        const valid = !Object.values(validation).some((item) => item === false);

        if (valid === true) {
            setDisableSubmit(false);
        }

        return valid;
    }, [validation]);

    const getOptions = (options, key) => {
        return options.map((name) => {
            return <MenuItem key={key+"-"+name} value={name}>{t(name)}</MenuItem>;
        });
    };

    const editPost = async () => {
        if (!isValidated) {
            return
        }
        const postDocRef = doc(db, "posts", item.id);
        await setDoc(postDocRef, {
            title,
            type,
            brand, 
            condition,
            price,
            description,
            timeStamp: Date.now(),
            numberOfImages: item.numberOfImages,
            author: {name: item.author.name, id: item.author.id }
        }).then(() => {
            const pictureRef = ref(getStorage(), `PostImages/${item.id}/image-0`);
            console.log("pictureRef: ", pictureRef);
            // uploadBytesResumable(pictureRef, file);
        }).catch((error) => {
            console.error("problem: ", error)
        }).finally(() => {
            window.location.reload();
        });
    }

    const deletePost = async (item) => {
		const storage = getStorage();
        const postDoc = doc(db, "posts", item.id);
		await deleteDoc(postDoc);
		deleteUserPost(item.id);
		for (var i = 0; i < item.numberOfImages; i++) {
			const pictureRef = ref(storage, `PostImages/${item.id}/image-${i}`);
			await deleteObject(pictureRef);
		}

		setFilterPosts(
			filterPosts?.filter((ele) => {
				return ele.id !== item.id;
			})
		)
    }

    // const handleImageClick = (url) => {
    //     setRemovedImages(cur => {
    //         cur[url] = !cur[url] ?? true
    //         return cur;
    //     });
    //     console.log(removedImages);
    // }

    // const pictures = (
    //     <Grid container>
    //         {item.urls.map((url) => {
    //             return (
    //                 <Grid item key={url} className="center" style={{backgroundImage: `url(${url})`, backgroundSize: "100% 100%", width: "100px", height: "100px"}} onClick={() => handleImageClick(url)} >
    //                     {removedImages[url]}
    //                 </Grid>
    //             )})}
    //     </Grid>
    // );

    // const addPicture = (
    //     <Row className="edit-input">    
    //         {/* <Col className="center">
    //             <input type="file" onChange={handleChange} accept="/image/*" />
    //         </Col> */}
    //         <Col xs={12} className="setting-item">
    //             <label className='profile-label' htmlFor="inputTag">
    //                 <span style={{color:"black"}}>Add Picture</span>
    //                 <input id="inputTag" className='profile-input' type="file" onChange={handleChange} accept="/image/*" />
    //                 <br />
    //                 {<FaImage size={40}  />}
    //             </label>
    //         </Col>
    //     </Row>
    // );


    const handleTitleChange = (event) => {
        let newValue = event.target.value;
        if (newValue.match(/['\-"><;:\\+{}!@#$%=^*_|[\]]/)) {
            return
        }

        setValidation(cur => {return {...cur, title: newValue !== ""}});
        setTitle(newValue);
    }

    const handlePriceChange = (event) => {
        let newValue = event.target.value;
        if (newValue.match(/['\-"]/)) {
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

    const handleTypeChange = (event) => {
        let newValue = event.target.value;
        if (newValue !== "") {
            setValidation(cur => {return {...cur, type: true}});
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
        if (newValue.match(/['\-"><;:\\+{}!@#$%=^*_|[\]]/)) {
            return;
        }
        setDescription(newValue);
    }

    const handleSubmit = () => {
        if (!isValidated) {
            setDisableSubmit(true);
            return
        }
        
        editPost();
        setOpenEditModal(false);
    }

    const handleCancel = (event) => {
        setOpenEditModal(false);
    }

    const handleDelete = (event) => {
        event.preventDefault();
        setOpenDeleteModal(true);
    }

    return (
        <Modal open={openEditModal}>
            <Row className="edit-modal">
                <Col xs={7} className="modal-background center">
                    <DeleteModal deletePost={deletePost} item={item} openDeleteModal={openDeleteModal} setOpenDeleteModal={setOpenDeleteModal} setOpenEditModal={setOpenEditModal} />
                    <Row className="edit-input">
                        <Col xs={6} sm={9} className="left">
                            <h2>{t('Edit')}</h2>
                        </Col>
                        <Col xs={6} sm={3}>
                            <Button variant="danger" onClick={handleDelete}>{t("Delete")}</Button>
                        </Col>
                    </Row>
                    <Row className="edit-input">
                        <TextField error={!validation.title} fullWidth size="small" value={title} label={t("Title")} className="input-width" onChange={handleTitleChange} />
                    </Row>
                    <Row className="edit-input">
                        <TextField fullWidth size="small" value={price} type="number" label={t("Price")} className="input-width" onChange={handlePriceChange} />
                    </Row>
                    <Row className="edit-input">
                        <FormControl fullWidth error={validation.blade === false && disableSubmit}>
                            <InputLabel id="blade-edit-label">{t("Blade")}</InputLabel>
                            <Select
                                labelId="blade-edit-label"
                                id="blade-edit-select"
                                label={t("Blade")}
                                defaultValue=""
                                size="small"
                                value={blade}
                                onChange={handleBladeChange}>
                                {getOptions(blades, "blade")}
                            </Select>
                        </FormControl>
                    </Row>
                    <Row className="edit-input">
                        <FormControl fullWidth>
                            <InputLabel error={validation.brand === false && disableSubmit} size="small" id="brand-edit-label">{t("Brand")}</InputLabel>
                            <Select
                                labelId="brand-edit-label"
                                id="brand-edit-select"
                                size="small"
                                value={brand}
                                label={t("Brand")}
                                onChange={handleBrandChange}>
                                {getOptions(brands, "brand")}
                            </Select>
                        </FormControl>
                    </Row>
                    <Row className="edit-input">
                        <FormControl fullWidth>
                            <InputLabel error={validation.type === false && disableSubmit} size="small" id="business-edit-label">{t("Sale Type")}</InputLabel>
                            <Select
                                labelId="business-edit-label"
                                id="business-edit-select"
                                size="small"
                                value={type}
                                label={t("Sale Type")}
                                onChange={handleTypeChange}>
                                {getOptions(types, "type")}
                            </Select>
                        </FormControl>
                    </Row>
                    <Row className="edit-input">
                        <FormControl fullWidth>
                            <InputLabel error={validation.condition === false && disableSubmit} size="small" id="condition-edit-label">{t("Condition")}</InputLabel>
                            <Select
                                labelId="condition-edit-label"
                                id="condition-edit-select"
                                size="small"
                                value={condition}
                                label={t("Condition")}
                                onChange={handleConditionChange}>
                                {getOptions([1,2,3,4,5,6,7,8,9,10], "condition")}
                            </Select>
                        </FormControl>
                    </Row>
                    <Row className="edit-input">
                        <TextareaAutosize fullwidth="true" minRows={3} value={description} placeholder={t("Description")} label={t("Description")} onChange={handleDescriptionChange} />
                    </Row>
                    {/* {addPicture}
                    {pictures} */}
                    <Row className="edit-input">
                        <Col xs={6}>
                            <Button onClick={handleCancel}>{t("Cancel")}</Button>
                        </Col>
                        <Col xs={6}>
                            <Button disabled={disableSubmit} onClick={handleSubmit}>{t("Submit")}</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Modal>
    );
};

export default EditModal;