import { useEffect, useMemo, useState } from 'react';

import { blades, brands, environment, statuses, types } from '../../../../../Data/Constants';

import DeleteModal from '../DeleteModal';
import { AddImages } from '../../../../Common/AddImages/AddImages';

import { MenuItem, Modal, TextareaAutosize } from '@mui/material';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import { Button, Col, Row } from 'react-bootstrap';

import { doc, deleteDoc } from 'firebase/firestore';
import { db } from '../../../../../firebase-config';
import { deleteUserPost } from '../../../../../Data/Services/userInfo.js';

import { ref, deleteObject, getStorage, uploadBytesResumable } from "firebase/storage";
import { useTranslation } from 'react-i18next';

import { editPost } from '../../../../../Data/Services/PostInfo';

const EditModal = ({item, setPosts, openEditModal, setOpenEditModal, filterPosts, setFilterPosts}) => {
    const [title, setTitle] = useState(item?.title);
    const [description, setDescription] = useState(item?.description);
    const [type, setType] = useState(item?.type);
    const [blade, setBlade] = useState(item?.blade);
    const [brand, setBrand] = useState(item?.brand);
    const [condition, setCondition] = useState(item?.condition);
    const [price, setPrice] = useState(item?.price);
    const [status, setStatus] = useState(item?.status);
    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const [disableSubmit, setDisableSubmit] = useState(false);
    const [images, setImages] = useState(item?.urls);

    const [validation, setValidation] = useState({
        title: true,
        type: true,
        blade: true,
        brand: true,
        condition: true,
        price: true,
        picture: true,
        status: true
    });

    const { t } = useTranslation();

    useEffect(() => {
        let ignore = false;

        if (!ignore) {
            setTitle(item?.title);
            setDescription(item?.description)
            setType(item?.type)
            setBlade(item?.blade)
            setBrand(item?.brand)
            setCondition(item?.condition)
            setPrice(item?.price)
            setStatus(item?.status)
            setImages(item?.urls)
        }

        return () => ignore = true;
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


    const handleEditPost = () => {
        if (!isValidated) {
            return
        }

        editPost({
            title,
            type,
            blade,
            brand, 
            condition,
            price,
            description,
            status,
            timeStamp: item.timeStamp,
            editTimeStamp: Date.now(),
            numberOfImages: images.length,
            author: {
                name: item.author.name, id: item.author.id
            }
        }, item.id).then((res) => {
            setPosts(cur => [...cur.map((post) => {
                if (post.id === item.id) {
                    return {
                        ...item,
                        title,
                        type,
                        blade,
                        brand, 
                        condition,
                        price,
                        description,
                        status
                    };
                }
                return post;
            })]);
            console.log("result: ", res)
            
        }).catch((err) => {
            console.error("problem when saving the edit post: ", err)
        })
    }

    const deletePost = async (item) => {
		const storage = getStorage();
        const postDoc = doc(db, `${environment()}-posts`, item.id);
		await deleteDoc(postDoc);
		deleteUserPost(item.id);
		for (var i = 0; i < item.numberOfImages; i++) {
			const pictureRef = ref(storage, `${environment()}-postImages/${item.id}/image-${i}`);
			await deleteObject(pictureRef);
		}

		setFilterPosts(
			filterPosts?.filter((ele) => {
				return ele.id !== item.id;
			})
		)
    }

    const editPostImages = async () => {
        const storage = getStorage();
		for (var i = 0; i < filterPosts.length; i++) {
            try{
                let saveImage = images.some((ele) => ele.indexOf("-"+i) > -1)
                //removed images
                if (!saveImage){
                    const pictureReference = ref(storage, `${environment()}-postImages/${item.id}/image-${i}`);
                    
                    await deleteObject(pictureReference);
                }
            }
            catch{
                console.log("can't look through images")
            }
		}

        let promises = [];
        for (let i = 0; i < images.length; i++){
            //these are file objects
            const picRef = ref(storage, `/${environment()}-postImages/${item.id}/image-${i}`);
            if (typeof images[i]!=="string"){
                const uploadTask = uploadBytesResumable(picRef, images[i]);
                promises.push(uploadTask)
            } else {
                let xhr = new XMLHttpRequest();
                
                xhr.responseType = 'blob';
                xhr.onload = function(event) {
                    let blob = xhr.response;
                    if (blob){                        
                        const uploadTask = uploadBytesResumable(picRef, blob)
                        promises.push(uploadTask)
                    }
                };
                xhr.open('GET', images[i]);
                xhr.send();
            }
        }
        
        Promise.all(promises).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.error(err)
        }).finally(() => {
            window.location.reload()
        })
    }

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

    const handleStatusChange = (event) => {
        let newValue = event.target.value;
        if (newValue !== "") {
            setValidation(cur => {return {...cur, status: true}});
        }
        
        setStatus(newValue);
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

        handleEditPost();
        editPostImages(images);
        setOpenEditModal(false);
    }

    const handleResetPost = () => {
        setTitle(item?.title);
        setDescription(item?.description);
        setType(item?.type);
        setBlade(item?.blade);
        setBrand(item?.brand);
        setCondition(item?.condition);
        setPrice(item?.price);
        setStatus(item?.status);
        setImages(item?.urls)
    }

    const handleCancel = (event) => {
        setOpenEditModal(false);
        handleResetPost();
    }

    const handleDelete = (event) => {
        event.preventDefault();
        setOpenDeleteModal(true);
    }

    return (
        <Modal open={openEditModal} onClick={() => setOpenEditModal(false)}>
            <Row className="edit-modal">
                <Col xs={7} className="modal-background-edit center" onClick={(e) => e.stopPropagation()}>
                    <Button variant="outlined" id="select-modal-exit-button" color="error" onClick={handleCancel}>
                        X
                    </Button>
                    <DeleteModal deletePost={deletePost} item={item} openDeleteModal={openDeleteModal} setOpenDeleteModal={setOpenDeleteModal} setOpenEditModal={setOpenEditModal} />
                    <Row className="edit-input">
                        <Col xs={4} className="left">
                            <h2>{t('Edit')}</h2>
                        </Col>
                        <Col>
                            <TextField error={!validation.title} fullWidth size="small" value={title} label={t("Title")} className="input-width" onChange={handleTitleChange} />
                        </Col>
                    </Row>
                    <Row className="edit-input">
                        <Col sm={4}>
                            <FormControl fullWidth>
                                <InputLabel error={validation.status === false && disableSubmit} size="small" id="status-edit-label">{t("Status")}</InputLabel>
                                <Select
                                    labelId="status-edit-label"
                                    id="status-edit-select"
                                    size="small"
                                    defaultValue={item?.status}
                                    value={status}
                                    label={t("Status")}
                                    onChange={handleStatusChange}>
                                    {getOptions(statuses, "status")}
                                </Select>
                            </FormControl>
                        </Col>
                        <Col sm={4}>
                            <FormControl fullWidth>
                                <InputLabel error={validation.type === false && disableSubmit} size="small" id="business-edit-label">{t("Sale Type")}</InputLabel>
                                <Select
                                    labelId="business-edit-label"
                                    id="business-edit-select"
                                    size="small"
                                    defaultValue={item?.type}
                                    value={type}
                                    label={t("Sale Type")}
                                    onChange={handleTypeChange}>
                                    {getOptions(types, "type")}
                                </Select>
                            </FormControl>
                        </Col>
                        <Col sm={4}>
                            <TextField fullWidth size="small" value={price} type="number" label={t("Price")} className="input-width" onChange={handlePriceChange} />
                        </Col>
                    </Row>
                    <Row className="edit-input">
                        <Col sm={4}>
                            <FormControl fullWidth>
                                <InputLabel error={validation.brand === false && disableSubmit} size="small" id="brand-edit-label">{t("Brand")}</InputLabel>
                                <Select
                                    labelId="brand-edit-label"
                                    id="brand-edit-select"
                                    size="small"
                                    defaultValue={item?.brand}
                                    value={brand}
                                    label={t("Brand")}
                                    onChange={handleBrandChange}>
                                    {getOptions(brands, "brand")}
                                </Select>
                            </FormControl>
                        </Col>
                        <Col sm={4}>
                            <FormControl fullWidth error={validation.blade === false && disableSubmit}>
                                <InputLabel id="blade-edit-label" size="small">{t("Blade")}</InputLabel>
                                <Select
                                    labelId="blade-edit-label"
                                    id="blade-edit-select"
                                    size="small"
                                    defaultValue={item?.blade}
                                    value={blade}
                                    label={t("Blade")}
                                    onChange={handleBladeChange}>
                                    {getOptions(blades, "blade")}
                                </Select>
                            </FormControl>
                        </Col>
                        <Col sm={4}>
                            <FormControl fullWidth>
                                <InputLabel error={validation.condition === false && disableSubmit} size="small" id="condition-edit-label">{t("Condition")}</InputLabel>
                                <Select
                                    labelId="condition-edit-label"
                                    id="condition-edit-select"
                                    size="small"
                                    defaultValue={item?.condition}
                                    value={condition}
                                    label={t("Condition")}
                                    onChange={handleConditionChange}>
                                    {getOptions([1,2,3,4,5,6,7,8,9,10], "condition")}
                                </Select>
                            </FormControl>
                        </Col>
                    </Row>
                    <Row className="edit-input">
                        <Col xs={12}>
                            <TextareaAutosize style={{width: "100%"}} minRows={3} value={description} placeholder={t("Description")} label={t("Description")} onChange={handleDescriptionChange} />
                        </Col>
                    </Row>
                    <AddImages files={images} setFiles={setImages} validation={validation} setValidation={setValidation} disableSubmit={disableSubmit} />
                    <Row className="edit-input">
                        <Col xs={6}>
                            <Button variant="danger" onClick={handleDelete}>{t("Delete")}</Button>
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