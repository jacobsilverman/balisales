import { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

import { brands, types } from '../../Data/Constants';

import { addDoc, collection } from 'firebase/firestore';
import { auth, db } from '../../firebase-config';

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
            author: {name: auth.currentUser.displayName, id: auth.currentUser.uid }
        });
        window.location.pathname = "/";
    }

    const getOptions = (options) => {
        return options.map((name, key) => {
            return <option key={key} value={name}>{name}</option>;
        });
    };

    return (
        <Container>
            <Row>
                <Col>
                    <h3>Create Post</h3>
                </Col>
            </Row>
            <Row>
                <Col>
                    <label>Title: </label>
                    <input onChange={(event) => setTitle(event.target.value)} />
                </Col>
                <Col>
                    <label>Price: </label>
                    <input onChange={(event) => setPrice(event.target.value)} />
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={4}>
                    <label>Brand:</label>
                </Col>
                <Col xs={12} md={8}>
                    <select value={brand} onChange={(event) => setBrand(event.target.value)}>
                        <option value="default">default</option>
                        {getOptions(brands, brand)}
                    </select>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={4}>
                    <label>Condition:</label>
                </Col>
                <Col xs={12} md={8}>
                    <select value={condition} onChange={(event) => setCondition(event.target.value)}>
                        <option value="default">default</option>
                        {getOptions([1,2,3,4,5,6,7,8,9,10], condition)}
                    </select>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={4}>
                    <label>Type:</label>
                </Col>
                <Col xs={12} md={8}>
                    <select value={type} onChange={(event) => setType(event.target.value)}>
                        <option value="default">default</option>
                        {getOptions(types, type)}
                    </select>
                </Col>
            </Row>
            <Row>
                <Col>
                    <label>Description: </label>
                    <input onChange={(event) => setDescription(event.target.value)} />
                </Col>
            </Row>
        
            <Row>
                <Col>
                    <Button onClick={createPost}>Submit</Button>
                </Col>
            </Row>
        </Container>
        );
}

export default CreatePost;