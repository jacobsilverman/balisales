import { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

import { brands, types } from '../../Data/Constants';

import { addDoc, collection } from 'firebase/firestore';
import { auth, db } from '../../firebase-config';

import Upload from '../Upload';

import './CreatePost.scss';

function CreatePost() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [type, setType] = useState("");
    const [brand, setBrand] = useState("");
    const [condition, setCondition] = useState("");
    const [price, setPrice] = useState("");


    const postsCollectionRef = collection(db, "posts");
    const createPost = async () => {
        await addDoc(postsCollectionRef, {
            title,
            type,
            brand,
            condition,
            price,
            description,
            timeStamp: Date.now(),
            author: {name: auth?.currentUser?.displayName || 'anonymous', id: auth?.currentUser?.uid || 'none' }
        });
        window.location.pathname = "/";
    }

    const getOptions = (options) => {
        return options.map((name, key) => {
            return <option key={key} value={name}>{name}</option>;
        });
    };

    return (
        <Container className="create-container">
            <Row>
                <Col xs={12} className="center">
                    <h2>Create Post</h2>
                </Col>
            </Row>
            <Row>
                <Col xs={4} md={5} className="right">
                    <label>Title:</label>
                    
                </Col>
                <Col xs={8} md={7} className="left">
                    <input className="input-width" onChange={(event) => setTitle(event.target.value)} />
                </Col>
            </Row>
            <Row>
                <Col xs={4} md={5} className="right">
                    <label>Price:</label>
                </Col>
                <Col xs={8} md={7} className="left">
                    <input className="input-width" onChange={(event) => setPrice(event.target.value)} />
                </Col>
            </Row>
            <Row>
                <Col xs={4} md={5} className="right">
                    <label>Brand:</label>
                </Col>
                <Col xs={8} md={7} className="left">
                    <select className="input-width" value={brand} onChange={(event) => setBrand(event.target.value)}>
                        <option value="default">default</option>
                        {getOptions(brands, brand)}
                    </select>
                </Col>
            </Row>
            <Row>
                <Col xs={4} md={5} className="right">
                    <label>Condition:</label>
                </Col>
                <Col xs={8} md={7} className="left">
                    <select className="input-width" value={condition} onChange={(event) => setCondition(event.target.value)}>
                        <option value="default">default</option>
                        {getOptions([1,2,3,4,5,6,7,8,9,10], condition)}
                    </select>
                </Col>
            </Row>
            <Row>
                <Col xs={4} md={5} className="right">
                    <label>Type:</label>
                </Col>
                <Col xs={8} md={7} className="left">
                    <select className="input-width" value={type} onChange={(event) => setType(event.target.value)}>
                        <option value="default">default</option>
                        {getOptions(types, type)}
                    </select>
                </Col>
            </Row>
            <Row>
                <Col xs={4} md={5} className="right">
                    <label>Description:</label>
                </Col>
                <Col xs={8} md={7} className="left">
                    <input className="input-width" onChange={(event) => setDescription(event.target.value)} />
                </Col>
            </Row>
            <Row>
                <Upload />
            </Row>
            <Row>
                <Col xs={12} className="center">
                    <Button className="submit-button" onClick={createPost}>Submit</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default CreatePost;