import { useEffect, useState } from 'react';

import { brands, types } from '../../../../../Data/Constants';

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

const EditModal = ({item, openEditModal, setOpenEditModal, filterPosts, setFilterPosts}) => {
    const [title, setTitle] = useState(item?.title);
    const [description, setDescription] = useState(item?.description);
    const [type, setType] = useState(item?.type);
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

    useEffect(() => {
        setTitle(item.title);
        setDescription(item.description)
        setType(item.type)
        setBrand(item.brand)
        setCondition(item.condition)
        setPrice(item.price)
    }, [item]);

    const getOptions = (options, key) => {
        return options.map((name) => {
            return <MenuItem key={key+"-"+name} value={name}>{name}</MenuItem>;
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

    return (
        <Modal open={openEditModal}>
            <Row className="edit-modal">
                <Col xs={7} className="modal-background center">
                    <DeleteModal deletePost={deletePost} item={item} openDeleteModal={openDeleteModal} setOpenDeleteModal={setOpenDeleteModal} setOpenEditModal={setOpenEditModal} />
                    <Row className="edit-input">
                        <Col xs={6} sm={9} className="left">
                            <h2>Edit</h2>
                        </Col>
                        <Col xs={6} sm={3}>
                            <Button variant="danger" onClick={(e) => {e.preventDefault();setOpenDeleteModal(true);}}>Delete</Button>
                        </Col>
                    </Row>
                    <Row className="edit-input">
                        <TextField fullWidth size="small" value={title} label="Title" className="input-width" onChange={(event) => setTitle(event.target.value)} />
                    </Row>
                    <Row className="edit-input">
                        <TextField fullWidth size="small" value={price} label="Price" className="input-width" onChange={(event) => setPrice(event.target.value)} />
                    </Row>
                    <Row className="edit-input">
                        <FormControl fullWidth>
                            <InputLabel size="small" id="brand-edit-label">Brand</InputLabel>
                            <Select
                                labelId="brand-edit-label"
                                id="brand-edit-select"
                                size="small"
                                value={brand}
                                label="Brand"
                                onChange={(event) => setBrand(event.target.value)}>
                                {getOptions(brands, "brand")}
                            </Select>
                        </FormControl>
                    </Row>
                    <Row className="edit-input">
                        <FormControl fullWidth>
                            <InputLabel size="small" id="business-edit-label">Business</InputLabel>
                            <Select
                                labelId="business-edit-label"
                                id="business-edit-select"
                                size="small"
                                value={type}
                                label="Business"
                                onChange={(event) => setType(event.target.value)}>
                                {getOptions(types, "type")}
                            </Select>
                        </FormControl>
                    </Row>
                    <Row className="edit-input">
                        <FormControl fullWidth>
                            <InputLabel size="small" id="condition-edit-label">Condition</InputLabel>
                            <Select
                                labelId="condition-edit-label"
                                id="condition-edit-select"
                                size="small"
                                value={condition}
                                label="Condition"
                                onChange={(event) => setCondition(event.target.value)}>
                                {getOptions([1,2,3,4,5,6,7,8,9,10], "condition")}
                            </Select>
                        </FormControl>
                    </Row>
                    <Row className="edit-input">
                        <TextareaAutosize fullwidth="true" minRows={3} value={description} placeholder="Description" label="description" onChange={(event) => setDescription(event.target.value)} />
                    </Row>
                    {/* {addPicture}
                    {pictures} */}
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