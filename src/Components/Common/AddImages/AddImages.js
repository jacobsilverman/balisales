
import { FaImage } from "react-icons/fa";
import { isMobile } from "../../../Data/Constants";
import './AddImages.scss'

import { useState } from "react";

import { Button, Col, Row } from 'react-bootstrap'

import { Card, Grid } from '@mui/material';

import { useTranslation } from "react-i18next";
import { CropModal } from "./CropModal.js";

export const AddImages = ({files, setFiles, validation, setValidation, disableSubmit, setDisplay}) => {
    const extraSize = (files?.length <= 1) ? "200px": "100px";
    const { t } = useTranslation();

    const [imageToCrop, setImageToCrop] = useState();
    const [showCropModal, setShowCropModal] = useState(false);

    
    const handleImagePrev = (index) => {
        if (index <= 0) {
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
        if (index >= files?.length-1) {
            return 
        }

        setFiles(cur => {
            let result = [...cur];
            const temp = result[index+1];

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
        if (setDisplay){
            setDisplay({display:"none"});
        }

        setImageToCrop(event.target.files[0]);
        setShowCropModal(true);
        setImageLoaded(false);
    }
    
    const addPicture = (
        <Row className="edit-input">    
            <Col xs={12} className="setting-item">
                <label className='profile-label center' style={{color: (validation.picture===false && disableSubmit) ? "red" : "black"}} htmlFor="add-post-image">
                    <input id="add-post-image" className='profile-input' type="file" onChange={handleAddingImage} accept="image/*"  />
                    <span>{t('Add Picture')}</span>
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
                            <Button variant="danger" style={{width: "100%", borderRadius: "0px"}} onClick={() => handleRemoveImage(index)}>{t('Remove')}</Button>
                            <Grid item key={url+"item"} className="center" style={{backgroundImage: `url(${url})`, backgroundSize: "100% 100%", width: extraSize, height: extraSize}}  >
                                
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

    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <>
            <CropModal imageLoaded={imageLoaded} setImageLoaded={setImageLoaded} imageToCrop={imageToCrop} showCropModal={showCropModal} setShowCropModal={setShowCropModal} setValidation={setValidation} setFiles={setFiles} setDisplay={setDisplay} />
            {addPicture}
            {pictures}
        </>
    )
}