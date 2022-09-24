import { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

import { brands, types } from '../../Data/Constants';

import { addDoc, collection } from 'firebase/firestore';
import { auth, db } from '../../firebase-config';

import { storage } from "../../firebase-config.js";
import { ref, uploadBytesResumable } from "firebase/storage";

import './CreatePost.scss';

function CreatePost() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [type, setType] = useState("");
    const [brand, setBrand] = useState("");
    const [condition, setCondition] = useState("");
    const [price, setPrice] = useState("");

    const [disableSubmit, setDisableSubmit] = useState(false);

    // State to store uploaded file
    const [files, setFiles] = useState("");

    // progress
    const [percent, setPercent] = useState(0);

    const [numberOfUploads, setNumberOfUploads] = useState(0);
    
    // Handle file upload event and update state
    function handleChange(event) {
        console.log(event.target.files[0]);
        
        setFiles([...files, event.target.files[0]]);
        setNumberOfUploads(numberOfUploads+1);
    }

    function pictureInputs() {
        let allInputs = [];
        for (let i = 0; i <= numberOfUploads; i++) {
            allInputs.push(
                <div>
                    <input type="file" onChange={handleChange} accept="/image/*" />
                    <span>{percent}% done</span>
                </div>
            );
        }

        return allInputs;
    }


    const createPost = async () => {
        setDisableSubmit(true);
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
            if (!files[0]) {
                alert("Please upload an image first!");
            }

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
            }).catch((err) => {
                console.error(err)
            })
        
        });
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
                    <input placeholder="title" className="input-width" onChange={(event) => setTitle(event.target.value)} />
                </Col>
            </Row>
            <Row>
                <Col xs={4} md={5} className="right">
                    <label>Price:</label>
                </Col>
                <Col xs={8} md={7} className="left">
                    <input placeholder="price" className="input-width" onChange={(event) => setPrice(event.target.value)} />
                </Col>
            </Row>
            <Row>
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
            <Row>
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
            <Row>
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
            <Row>
                <Col xs={4} md={5} className="right">
                    <label>Description:</label>
                </Col>
                <Col xs={8} md={7} className="left">
                    <textarea rows={3} placeholder="description" className="input-width" onChange={(event) => setDescription(event.target.value)} />
                </Col>
            </Row>
            <Row>
                <Col className="center">
                    {pictureInputs()}
                </Col>
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