import { Button, Modal } from '@mui/material';
import { useEffect, useState } from 'react';

import { getProfilePicture } from '../../../../../Data/Services/userInfo.js';
import defaultProfile from '../../../../../Data/Images/default-profile.jpg';

import './SelectModal.scss';

import { Col, Row } from 'react-bootstrap';

import { Link } from 'react-router-dom';

const SelectModal = ({t, item, openSelectModal, setOpenSelectModal}) => {
    const [profilePic, setProfilePic] = useState();
    const [displayImage, setDisplayImage] = useState(0);
    
    const createdDate = new Date(item?.timeStamp).toLocaleDateString();
    const displayPost = {...item};

    useEffect(() => {
        if (!displayPost?.author?.id) {
            return
        }
        getProfilePicture(displayPost?.author?.id).then((result) => {
            setProfilePic(result);
        }).catch(() => {
            setProfilePic(defaultProfile);
        });
    }, [displayPost]);

    const handlePreviousImage = () => {
        setDisplayImage(cur => (cur-1) < 0 ? displayPost?.numberOfImages-1 : (cur-1))
    }

    const handleNextImage = () => {
        setDisplayImage(cur => (cur+1)%displayPost?.numberOfImages)
    }

    const handleAssignImage = (index) => {
        setDisplayImage(index)
    }

    const postPictures = displayPost?.urls?.map((image, index) => {
        const pictureCls = `${index===displayImage ? 'show' : 'hidden'} select-image-container align-items-end`;

        return (
            <Col xs={11} sm={11} md={7} style={{backgroundImage: `url(${image})`}} className={pictureCls} key={"post-"+image} />
        );
    })

    const postBottomPictures = (
        <Row className='all-pictures'>
            {displayPost?.urls?.map((image, index) => {
                return (
                    <Col key={image} className='individual-picture' style={{backgroundImage: `url(${image})`, backgroundSize:'100% 100%', maxWidth: "37.5px", height: "50px", opacity: (displayImage === index) ? '.5': '1'}} onClick={() => handleAssignImage(index)} />
                );
            })}
        </Row>
    )

    const buySellTradeClass = "desciption-title horizontal-center";
    const colorPriceClass = "price-title horizontal-center "+((displayPost?.type === "Buying") ? "bg" : (displayPost?.type === "Selling") ? "br" : "");

    
    const displaySelectedPost = (
        <Modal open={openSelectModal} className="select-modal">
            <Row>
                <Col className="modal-background" xs={12}>
                    <Row className="full-center">
                        <Col xs={12} className="selected-post-image-container">
                            <Button id="select-modal-exit-button" color="error" onClick={() => setOpenSelectModal({show:false})}>
                                X
                            </Button>  

                            <Row className="content-container">
                                {displayPost?.numberOfImages > 1 && <Col xs={1} className="traverse-container">
                                    <Button id="traverse-prev-button" onClick={handlePreviousImage}>{"<"}</Button>
                                </Col>}
                                {displayPost?.urls && postPictures}
                                {displayPost?.numberOfImages > 1 && <Col xs={1} className="traverse-container">
                                    <Button id="traverse-next-button" onClick={handleNextImage}>{">"}</Button>
                                </Col>}
                            </Row>
                            
                            {displayPost?.numberOfImages > 1 && postBottomPictures}
                        </Col>
                        
                            {/* {displayPost?.numberOfImages > 1 &&
                            <Row>
                                <Col xs={6} className="previous-image">
                                    <Button variant="contained" onClick={handlePreviousImage}>{t("Previous")}</Button>
                                </Col>
                                <Col xs={6} className="next-image">
                                    <Button variant="contained" onClick={handleNextImage}>{t("Next")}</Button>
                                </Col>
                            </Row>} */}
                        <Col xs={12} >
                            <Row className="horizontal-center">
                                <Col xs={12} className="info-container">
                                    <Row>
                                        <Col xs={12}  className="brand-title">
                                            <h3>{displayPost?.brand}</h3>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={12} className="display-title">
                                            <h1>{displayPost?.title}</h1>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={12} className="condition-text">
                                            {t("Condition")}: {displayPost?.condition}
                                        </Col>
                                    </Row>
                                    <Row className="description-wrapper">
                                        <Col xs={12}>
                                            {displayPost?.description}
                                        </Col>
                                    </Row>
                                    <hr />
                                    <Row>
                                        <Col xs={7}>
                                            <Row>
                                                <Col xs={12} lg={4}>
                                                    <Link className="link" to={{pathname: '/profile', search: "id=" + displayPost?.author?.id}}>
                                                        <div className="account-profile" style={{backgroundImage: `url(${profilePic})`}} />
                                                    </Link>
                                                </Col>
                                                <Col xs={12} lg={8}>
                                                    <Link to={{pathname: '/profile', search: "id=" + displayPost?.author?.id}}>
                                                        <div className="display-name">
                                                            {displayPost?.author?.name}
                                                        </div>
                                                        <div className="date-created">
                                                            <b>{t("Date Created")}</b>: {createdDate}
                                                        </div>
                                                    </Link>
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col xs={5}>
                                            <Row className="multi-content selling-price-wrapper">
                                                <Col xs={12} className={colorPriceClass}>
                                                    ${displayPost?.price}
                                                </Col>
                                                <Col xs={12}  className={buySellTradeClass}>
                                                    <b>{t(displayPost?.type)}</b>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            {/* <Row>
                                <Col>
                                    <Button>Contact</Button>
                                </Col>
                            </Row> */}
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Modal>
    );


    return (!createdDate || !displayPost || !profilePic || !item )
    ? (null)
    : displaySelectedPost;
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // return (
    //     <Modal open={openSelectModal} id="select-modal">
    //         <Row className="modal-dialog delete-modal">
    //             <Col xs={5} sm={5} md={2} className="modal-content modal-background center">
    //                 <Row className="modal-header">
    //                     <Col className="modal-title">{t("Do you want to delete this post?")}</Col>
    //                 </Row>
    //                 <Row>
    //                     <Col xs={6}>
    //                         <Button onClick={() => setOpenSelectModal({show:true,item:item})}>{t("No")}</Button>
    //                     </Col>
    //                     <Col xs={6}>
    //                         <Button onClick={() => {setOpenSelectModal({show:false,item:item})}}>{t("Yes")}</Button>
    //                     </Col>
    //                 </Row>
    //             </Col>
    //         </Row>
    //     </Modal>
    // )

}

export default SelectModal;