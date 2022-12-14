import { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

import { brands, types } from '../../Data/Constants';

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
    const [files, setFiles] = useState([]);
    const [showFiles, setShowFiles] = useState([]);

    // progress
    const [percent, setPercent] = useState(0);

    const [numberOfUploads, setNumberOfUploads] = useState(0);
    
    // Handle file upload event and update state
    function handleChange(event, index) {
        console.log(event.target.files[0]);

        if (event.target.files && event.target.files[0] && index === 0) {
            setShowFiles([URL.createObjectURL(event.target.files[0]), ...showFiles]);
            setFiles(cur => [...cur, event.target.files[0]]);
            setNumberOfUploads(numberOfUploads => numberOfUploads+1);
        }
        console.log(index);

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
                <Col xs="12" sm={(numberOfUploads > 0) ? 6 : 12} className="setting-item center" key={i}>
                    <label className='profile-label' for={"inputTag-"+i} onClick={i !==0 && (() => removePicture(i))}>
                        <span>{files[numberOfUploads-i]?.name || "Upload Image"}</span>
                        {(i===0) && <input id={"inputTag-"+i} className="profile-input" type="file" onChange={e => handleChange(e, i)} accept="/image/*" />}
                        <br />
                        {(i===0) ? <FaImage size={70} className="" /> : <img src={showFiles[numberOfUploads-i]} className="upload-image" alt="preview image" />}
                    </label>
                </Col>
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
            return result;
        
        }).then((result) => {
            addUserPost(result.id);
        })
    }

    const getOptions = (options) => {
        return options.map((name, key) => {
            return <MenuItem key={key} value={name}>{name}</MenuItem>;
        });
    };

    return (
        <Container className="create-container">
            <Row>
                <Col xs={12} md={6} className="create-input">
                    <TextField fullWidth label="title" color="" onChange={(event) => setTitle(event.target.value)}/>
                </Col>

                <Col xs={12} md={6} className="create-input">
                    <TextField fullWidth label="price" color="" onChange={(event) => setPrice(event.target.value)}/>
                </Col>

                <Col xs={12} md={6} className="create-input">
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Brand</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Brand"
                            onChange={(event) => setBrand(event.target.value)}>
                            <MenuItem value="default">default</MenuItem>
                            {getOptions(brands, brand)}
                        </Select>
                    </FormControl>
                </Col>
      
                <Col xs={12} md={6} className="create-input">
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Sale Type</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Type"
                            onChange={(event) => setType(event.target.value)}>
                            <MenuItem value="default">default</MenuItem>
                            {getOptions(types, type)}
                        </Select>
                    </FormControl>
                </Col>
                <Col xs={12} md={6} className="create-input">
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Condition</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Condition"
                            onChange={(event) => setCondition(event.target.value)}>
                            <MenuItem value="default">default</MenuItem>
                            {getOptions([1,2,3,4,5,6,7,8,9,10], condition)}
                        </Select>
                    </FormControl>
                </Col>

                <Col xs={12} md={6} className="create-input">
                    <TextField rows={3} placeholder="description" fullWidth label="description" className="input-width" onChange={(event) => setDescription(event.target.value)} />
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