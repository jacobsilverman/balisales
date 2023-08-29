
import { FaImage } from "react-icons/fa";
import { isMobile } from "../../../Data/Constants";
import './AddImages.scss'

import { Button, Col, Row } from 'react-bootstrap'

import { Card, Grid } from '@mui/material';

export const AddImages = ({files, setFiles, validation, setValidation, disableSubmit}) => {
    const extraSize = (files?.length <= 1) ? "200px": "100px";
        
    const handleImagePrev = (index) => {
        if (index<=0) {
            return 
        }
        setFiles(cur => {
            let result = [...cur];
        
            const temp =result[index-1];
            result[index-1] = result[index];
            result[index] = temp;
            return result;
        })
    }
    
    const handleImageNext = (index) => {
        if (index>=files?.length-1) {
            return 
        }

        setFiles(cur => {
            let result = [...cur];
            const temp =result[index+1];
            result[index+1] = result[index];
            result[index] = temp;
            return result;
        })
    }

    const handleRemoveImage = (i) => {
        let newItems = files?.filter((ele, index) => {
            return index !== i
        })

        if (newItems.length === 0) {
            setValidation(cur => {return {...cur, picture: false}});
        }
        setFiles(newItems);
    }

    const handleAddingImage = (event) => {
        setValidation(cur => {return {...cur, picture: true}});
        setFiles(cur => {
            return [...cur, event.target.files[0]]
        });
    }
    
    const addPicture = (
        <Row className="edit-input">    
            <Col xs={12} className="setting-item">
                <label className='profile-label center' htmlFor="add-post-image">
                    <input id="add-post-image" className='profile-input' type="file" onChange={handleAddingImage} accept="image/*"  />

                    <span style={{color: (validation.picture===false && disableSubmit) ? "red" : "black"}}>Add Picture</span>
                    <br />
                    {<FaImage size={40} />}
                </label>
            </Col>
        </Row>
    );

    const pictures = (
        <Grid justifyContent="center" container spacing={3}>
            {files?.map((rawUrl, index) => {
                const url = (typeof rawUrl !== "string") ? URL.createObjectURL(rawUrl) : rawUrl;
                const space = index === 0 ? "flex-end" : index !== files.length-1 ? "space-between" : "flex-start";
                return (
                    <Grid item key={url}>
                        <Card>
                            <Button variant="danger" style={{width: "100%", borderRadius: "0px"}} onClick={() => handleRemoveImage(index)}>remove</Button>
                            <Grid item key={url} className="center" style={{backgroundImage: `url(${url})`, backgroundSize: "100% 100%", width: extraSize, height: extraSize}}  >
                                
                            </Grid>
                            <div style={{display:"flex", justifyContent: space}}>
                                {index > 0 && <Button variant={"outlined"} onClick={() => handleImagePrev(index)}>{(!isMobile) ? "<" : "^"}</Button>}
                                {index < files.length-1 && <Button variant={"outlined"} onClick={() => handleImageNext(index)}>{(!isMobile) ? ">" : "v"}</Button>}
                            </div>
                        </Card>
                    </Grid>
                )})}
        </Grid>
    );

    return (
        <>
            {addPicture}
            {pictures}
        </>
    )
}