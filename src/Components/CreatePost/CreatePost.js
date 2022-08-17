import { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

import { brands, types } from '../../Data/Constants';

import { addDoc, collection } from 'firebase/firestore';
import { auth, db } from '../../firebase-config';

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
        <Container className="create-container">
            <Row>
                <Col>
                    <h3>Create Post</h3>
                </Col>
            </Row>
            <Row>
                <Col>
                    <input onChange={(event) => setTitle(event.target.value)} />
                    <label>:Title</label>
                </Col>
            </Row>
            <Row>
                <Col>
                    <input onChange={(event) => setPrice(event.target.value)} />
                    <label>:Price</label>
                </Col>
            </Row>
            <Row>
                <Col>
                    <select value={brand} onChange={(event) => setBrand(event.target.value)}>
                        <option value="default">default</option>
                        {getOptions(brands, brand)}
                    </select>
                    <label>:Brand</label>
                </Col>
            </Row>
            <Row>
                <Col>
                    <select value={condition} onChange={(event) => setCondition(event.target.value)}>
                        <option value="default">default</option>
                        {getOptions([1,2,3,4,5,6,7,8,9,10], condition)}
                    </select>
                    <label>:Condition</label>
                </Col>
            </Row>
            <Row>
                <Col>
                    
                    <select value={type} onChange={(event) => setType(event.target.value)}>
                        <option value="default">default</option>
                        {getOptions(types, type)}
                    </select>
                    <label>:Type</label>
                </Col>
            </Row>
            <Row>
                <Col>
                    
                    <input onChange={(event) => setDescription(event.target.value)} />
                    <label>:Description</label>
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