import { Button } from "@mui/material";
import { useState } from "react";

import { Modal } from "react-bootstrap";

import ReactCrop from "react-image-crop";
import 'react-image-crop/dist/ReactCrop.css';

export const CropModal = ({imageLoaded, setImageLoaded, imageToCrop, showCropModal, setShowCropModal, setFiles, setValidation, setDisplay}) => {
    const [crop, setCrop] = useState();
    const [image, setImage] = useState(null);
    const [output, setOutput] = useState(null);
    const [blob, setBlob] = useState(null);
    const imageUrl = (imageToCrop) ? URL.createObjectURL(imageToCrop) : null;
    
    const onImageLoad = (e) => {
        setImage(e.currentTarget);
        if (imageToCrop && !imageLoaded) {
            let { width, height } = e.currentTarget;
            let widthDiff =  width - 250;
            let heightDiff =  height - 300;
            let x = 0;
            let y = 0;

            if (heightDiff < widthDiff){
                const centered = (width - height*.83)/2;
                width = height*.83;
                height = height;
                x = centered;
            } else if (heightDiff > widthDiff) {
                const centered = (height - (width + (width*.17)))/2
                width = width;
                height = width + (width*.17);
                y = centered;
            }

            setCrop({
                unit: "px",
                width: width,
                height: height,
                x: x,
                y: y
            });
            setImageLoaded(true)
        }
    }

    const cropImageNow = () => {
        const canvas = document.createElement('canvas');
        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;
        canvas.width = crop.width;
        canvas.height = crop.height;
        const ctx = canvas.getContext('2d');
 
        const pixelRatio = window.devicePixelRatio;
        canvas.width = crop.width * pixelRatio;
        canvas.height = crop.height * pixelRatio;
        ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
        ctx.imageSmoothingQuality = 'high';
 
        ctx.drawImage(
            image,
            crop.x * scaleX,
            crop.y * scaleY,
            crop.width * scaleX,
            crop.height * scaleY,
            0,
            0,
            crop.width,
            crop.height,
        );
 
        // Converting to base64
        const base64Image = canvas.toDataURL('image/jpeg');
        setOutput(base64Image);
        canvas.toBlob(function(blob){
            setBlob(blob);
        });
    };

    const reset = () => {
        setShowCropModal(false);
        setCrop();
        setImage();
        setOutput();
        if (setDisplay) {
            setDisplay({display:"block"});
        }
    }

    return ( 
        <Modal show={showCropModal} onBackdropClick={() => reset()}>
            <div style={{display:"flex",justifyContent:"flex-end", padding:"5px"}}>
                <Button onClick={reset} color="error">close</Button>
            </div>
            <div className="center">
                Resizing image to fit the 250px 300px dimensions
            </div>
            {imageToCrop && <ReactCrop crop={crop} onChange={c => setCrop(c)}>
                <img src={imageUrl} onLoad={onImageLoad} />
            </ReactCrop>}
            <Button variant="outlined" onClick={() => cropImageNow()}>Preview</Button>
            {output && <>
                <div className="center">
                    {/* <div>Here is a preview of how your image will display</div> */}
                    <img src={output} style={{height:"300px",width: "250px"}} />
                </div>
                <Button 
                    variant="contained"
                    color="success"
                    onClick={() => {
                        reset();
                        setFiles(cur => {
                            return [...cur, blob]
                        });
                        setValidation(cur => {return {...cur, picture: true}});
                }}>Submit</Button>
            </>}
        </Modal>
    );
}

export default CropModal;