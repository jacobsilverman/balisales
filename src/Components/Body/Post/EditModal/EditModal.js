import { useState } from 'react';

import { brands, types } from '../../../../Data/Constants';

import DeleteModal from '../DeleteModal/DeleteModal';

import { Modal, TextareaAutosize } from '@mui/material';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import { Button, Col, Row } from 'react-bootstrap';

import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../../../firebase-config';

import { FaImage } from "react-icons/fa";

import { ref, getStorage, uploadBytesResumable } from "firebase/storage";

const EditModal = ({item, openEditModal, setOpenEditModal, deletePost}) => {
    const [title, setTitle] = useState(item.title);
    const [description, setDescription] = useState(item.description);
    const [type, setType] = useState(item.type);
    const [brand, setBrand] = useState(item.brand);
    const [condition, setCondition] = useState(item.condition);
    const [price, setPrice] = useState(item.price);
    const [openDeleteModal, setOpenDeleteModal] = useState(false);

    // State to store uploaded file
    const [file, setFile] = useState("");
    
    // Handle file upload event and update state
    function handleChange(event) {
        setFile(event.target.files[0]);
    }

    const getOptions = (options) => {
        return options.map((name, key) => {
            return <option key={key} value={name}>{name}</option>;
        });
    };

    const editPost = async () => {
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

    return (
        <Modal open={openEditModal}>
                                        
            <Row className="edit-modal">
                <Col xs={7} className="modal-background center">
                    <DeleteModal deletePost={deletePost} item={item} openDeleteModal={openDeleteModal} setOpenDeleteModal={setOpenDeleteModal} />
                    <Row className="edit-input">
                        <Col xs={6} sm={9} className="left">
                            <h2>Edit</h2>
                        </Col>
                        <Col xs={6} sm={3}>

                            <Button variant="danger" onClick={(e) => {e.preventDefault();setOpenDeleteModal(true);}}>Delete</Button>
                        </Col>
                    </Row>
                    <Row className="edit-input">
                        <TextField fullWidth value={title} label="Title" className="input-width" color="" onChange={(event) => setTitle(event.target.value)} />
                    </Row>
                    <Row className="edit-input">
                        <TextField fullWidth value={price} label="Price" className="input-width" color="" onChange={(event) => setPrice(event.target.value)} />
                    </Row>
                    <Row className="edit-input">
                        <FormControl fullWidth>
                            <InputLabel id="brand-label">Brand</InputLabel>
                            <Select
                                labelId="brand-label"
                                id="brand-select"
                                value={brand}
                                label="Brand"
                                onChange={(event) => setBrand(event.target.value)}>
                                <MenuItem value="default">default</MenuItem>
                                {getOptions(brands, brand)}
                            </Select>
                        </FormControl>
                    </Row>
                    <Row className="edit-input">
                        <FormControl fullWidth>
                            <InputLabel id="business-label">Business</InputLabel>
                            <Select
                                labelId="business-label"
                                id="business-select"
                                value={type}
                                label="Type"
                                onChange={(event) => setType(event.target.value)}>
                                <MenuItem value="default">select</MenuItem>
                                {getOptions(types, type)}
                            </Select>
                        </FormControl>
                    </Row>
                    <Row className="edit-input">
                        <FormControl fullWidth>
                            <InputLabel id="condition-label">Condition</InputLabel>
                            <Select
                                labelId="condition-label"
                                id="condition-select"
                                value={condition}
                                label="Condition"
                                onChange={(event) => setCondition(event.target.value)}>
                                <MenuItem value="default">default</MenuItem>
                                {getOptions([1,2,3,4,5,6,7,8,9,10], condition)}
                            </Select>
                        </FormControl>
                    </Row>
                    <Row className="edit-input">
                        <TextareaAutosize fullwidth="true" minRows={3} value={description} placeholder="Description" label="description" onChange={(event) => setDescription(event.target.value)} />
                    </Row>
                    <Row className="edit-input">    
                        {/* <Col className="center">
                            <input type="file" onChange={handleChange} accept="/image/*" />
                        </Col> */}
                        <Col xs={12} className="setting-item">
                            <label className='profile-label' htmlFor="inputTag">
                                <span style={{color:"black"}}>Add Picture</span>
                                <input id="inputTag" className='profile-input' type="file" onChange={handleChange} accept="/image/*" />
                                <br />
                                {<FaImage size={40}  />}
                            </label>
                        </Col>
                    </Row>
                    <Row className="edit-input">
                        <Col xs={6}>
                            <Button onClick={() => setOpenEditModal(false)}>Cancel</Button>
                        </Col>
                        <Col xs={6}>
                            <Button onClick={() => {editPost();setOpenEditModal(false)}}>Submit</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Modal>
    );
};

export default EditModal;