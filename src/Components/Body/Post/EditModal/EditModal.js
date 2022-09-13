import { useState } from 'react';

import { brands, types } from '../../../../Data/Constants';

import { Modal } from '@mui/material';
import { Button, Col, Row } from 'react-bootstrap';

import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../../../firebase-config';

import { ref, getStorage, uploadBytesResumable } from "firebase/storage";

const EditModal = ({item, openEditModal, setOpenEditModal}) => {
    const [title, setTitle] = useState(item.title);
    const [description, setDescription] = useState(item.description);
    const [type, setType] = useState(item.type);
    const [brand, setBrand] = useState(item.brand);
    const [condition, setCondition] = useState(item.condition);
    const [price, setPrice] = useState(item.price);

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
            author: {name: item.author.name, id: item.author.id }
        }).then(() => {
            console.log("pictureRef: ", pictureRef);
            const pictureRef = ref(getStorage(), 'files/' + item.id);
            uploadBytesResumable(pictureRef, file);
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
                    <Row className="edit-input">
                        <Col xs={12} className="modal-title">
                            <h2>Edit Post</h2>
                        </Col>
                    </Row>
                    <Row className="edit-input">
                        <Col xs={4} md={5} className="right">
                            <label>Title:</label>
                            
                        </Col>
                        <Col xs={8} md={7} className="left">
                            <input value={title} className="input-width" onChange={(event) => setTitle(event.target.value)} />
                        </Col>
                    </Row>
                    <Row className="edit-input">
                        <Col xs={4} md={5} className="right">
                            <label>Price:</label>
                        </Col>
                        <Col xs={8} md={7} className="left">
                            <input value={price} className="input-width" onChange={(event) => setPrice(event.target.value)} />
                        </Col>
                    </Row>
                    <Row className="edit-input">
                        <Col xs={4} md={5} className="right">
                            <label>Brand:</label>
                        </Col>
                        <Col xs={8} md={7} className="left">
                            <select className="input-width" value={brand} onChange={(event) => setBrand(event.target.value)}>
                                <option value="default">select</option>
                                {getOptions(brands, brand)}
                            </select>
                        </Col>
                    </Row>
                    <Row className="edit-input">
                        <Col xs={4} md={5} className="right">
                            <label>Business:</label>
                        </Col>
                        <Col xs={8} md={7} className="left">
                            <select className="input-width" value={type} onChange={(event) => setType(event.target.value)}>
                                <option value="default">select</option>
                                {getOptions(types, type)}
                            </select>
                        </Col>
                    </Row>
                    <Row className="edit-input">
                        <Col xs={4} md={5} className="right">
                            <label>Condition:</label>
                        </Col>
                        <Col xs={8} md={7} className="left">
                            <select className="input-width" value={condition} onChange={(event) => setCondition(event.target.value)}>
                                <option value="default">select</option>
                                {getOptions([1,2,3,4,5,6,7,8,9,10], condition)}
                            </select>
                        </Col>
                    </Row>
                    <Row className="edit-input">
                        <Col xs={4} md={5} className="right">
                            <label>Description:</label>
                        </Col>
                        <Col xs={8} md={7} className="left">
                            <textarea rows={3} value={description} className="input-width" onChange={(event) => setDescription(event.target.value)} />
                        </Col>
                    </Row>
                    <Row className="edit-input">
                        <Col className="center">
                            <input type="file" onChange={handleChange} accept="/image/*" />
                        </Col>
                    </Row>
                    <Row className="edit-input">
                        <Col xs={6}>
                            <Button onClick={() => setOpenEditModal(false)}>cancel</Button>
                        </Col>
                        <Col xs={6}>
                            <Button onClick={() => {editPost();setOpenEditModal(false)}}>submit</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Modal>
    );
};

export default EditModal;