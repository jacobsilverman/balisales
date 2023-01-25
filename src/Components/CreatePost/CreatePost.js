import { useState } from 'react';
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
    
    const resetPostCreation = () => {
        setTitle("");
        setDescription("");
        setType("");
        setBrand("");
        setCondition("");
        setPrice("");
        setBlade("");
        setNumberOfUploads( 0);
        setFiles([]);
        setShowFiles([]);
        setDisableSubmit(false);
    }

    // Handle file upload event and update state
    function handleChange(event, index) {
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
                    <label className='profile-label' htmlFor={"inputPicture-"+i} onClick={i !==0 && (() => removePicture(i))}>
                        <span>{files[numberOfUploads-i]?.name || "Upload Image"}</span>
                        {(i===0) && <input id={"inputPicture-"+i} className="profile-input" type="file" onChange={e => handleChange(e, i)} accept="/image/*" />}
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
                        <InputLabel id="brand-label">Brand</InputLabel>
                        <Select
                            labelId="brand-label"
                            id="brand-select"
                            label="Brand"
                            onChange={(event) => setBrand(event.target.value)}>
                            <MenuItem value="default">default</MenuItem>
                            {getOptions(brands, brand)}
                        </Select>
                    </FormControl>
                </Col>
      
                <Col xs={12} md={6} className="create-input">
                    <FormControl fullWidth>
                        <InputLabel id="sale-type-label">Sale Type</InputLabel>
                        <Select
                            labelId="sale-type-label"
                            id="sale-type-select"
                            label="Sale Type"
                            onChange={(event) => setType(event.target.value)}>
                            <MenuItem value="default">default</MenuItem>
                            {getOptions(types, type)}
                        </Select>
                    </FormControl>
                </Col>
                <Col xs={12} md={6} className="create-input">
                    <FormControl fullWidth>
                        <InputLabel id="condition-label">Condition</InputLabel>
                        <Select
                            labelId="condition-label"
                            id="condition-select"
                            label="Condition"
                            onChange={(event) => setCondition(event.target.value)}>
                            <MenuItem value="default">default</MenuItem>
                            {getOptions([1,2,3,4,5,6,7,8,9,10], condition)}
                        </Select>
                    </FormControl>
                </Col>

                <Col xs={12} md={6} className="create-input">
                    <FormControl fullWidth>
                        <InputLabel id="blade-label">Blade</InputLabel>
                        <Select
                            labelId="blade-label"
                            id="blade-select"
                            label="Blade"
                            onChange={(event) => setBlade(event.target.value)}>
                            <MenuItem value="default">default</MenuItem>
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