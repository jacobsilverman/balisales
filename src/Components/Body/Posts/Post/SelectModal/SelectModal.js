import { Button, Modal } from '@mui/material';
import { useEffect, useState } from 'react';

import { getProfilePicture } from '../../../../../Data/Services/userInfo.js';
import { getPost } from '../../../../../Data/Services/PostInfo.js';
import defaultProfile from '../../../../../Data/Images/default-profile.jpg';

import './SelectModal.scss';

import { Col, Row } from 'react-bootstrap';

import { Link } from 'react-router-dom';

const SelectModal = ({t, item, openSelectModal, setOpenSelectModal}) => {
    
    const [createdDate, setCreatedData] = useState(new Date(item?.timeStamp).toLocaleDateString());

    const [displayImage, setDisplayImage] = useState(0);
    const [displayPost, setDisplayPost] = useState({...item});

    const [profilePic, setProfilePic] = useState();

    // useEffect(() => {
    //     if (!item?.id) {
    //         return;
    //     }
    //     console.log(item);
    //     getPost(item?.id).then((data) => {
    //         var dateCreated = new Date(data?.timeStamp).toLocaleDateString();

    //         setDisplayPost(data);
    //         setCreatedData(dateCreated);
    //     });
    // }, [item]);

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

    const displaySelectedPost = (
        <Modal open={openSelectModal} className="select-modal">
            <Row>
                <Col className="modal-background">

                    <Button id="select-modal-exit-button" color="error" onClick={() => setOpenSelectModal({show:false})}>
                        X
                    </Button>  
                    <Link className="link-wrapper" to={{pathname: '/profile', search: "id=" + displayPost?.author?.id}}>
                        <div className="display-name">{displayPost?.author?.name}</div>
                        <div className="account-profile center" style={{backgroundImage: `url(${profilePic})`}} />
                    </Link>
                    <Row>
                        <Col xs={12} className="display-title center">
                            <h1>{displayPost?.title}</h1>
                        </Col>
                    </Row>
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
                    {/* {displayPost?.numberOfImages > 1 &&
                    <Row>
                        <Col xs={6} className="previous-image">
                            <Button variant="contained" onClick={handlePreviousImage}>{t("Previous")}</Button>
                        </Col>
                        <Col xs={6} className="next-image">
                            <Button variant="contained" onClick={handleNextImage}>{t("Next")}</Button>
                        </Col>
                    </Row>} */}
                    <Row style={{justifyContent:"center"}}>
                        <Col xs={12} className="info-container">
                            <div style={{display: "flex", justifyContent: "space-evenly"}}>
                                <div className="created">
                                    {/* <div className="desciption-title">
                                        {t("Created")}
                                    </div> */}
                                    {createdDate}
                                </div>
                                <div className="content-wrapper">
                                    <div className={"desciption-title "+((displayPost?.type === "Buying") ? "bg" : (displayPost?.type === "Selling") ? "br" : null)}>
                                        {t(displayPost?.type)}
                                    </div>
                                    ${displayPost?.price}
                                </div>
                                <div className="content-wrapper">
                                    <div className="desciption-title">
                                        {t("Brand")}
                                    </div>
                                    {displayPost?.brand}
                                </div>
                                <div className="content-wrapper">
                                    <div className="desciption-title">
                                        {t("Condition")}
                                    </div>
                                    {displayPost?.condition}
                                </div>
                            </div>
                            <Row className="description-wrapper">
                                {/* <div className="desciption-title">
                                    {t("Description")}
                                </div> */}
                                <Col xs={12}>
                                    {displayPost?.description}
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    {/* <Row>
                        <Col xs={3}>
                        
                            <Link className="link-wrapper" to={{pathname: '/profile', search: "id=" + displayPost?.author?.id}}>
                                <div className="display-name">{displayPost?.author?.name}</div>
                                <div className="account-profile center" style={{backgroundImage: `url(${profilePic})`}} />
                            </Link>

                        </Col>
                        <Col xs={4}>
                            <Link className="link-wrapper" to={{pathname: '/profile', search: "id=" + displayPost?.author?.id}}>
                                <div className="display-name">{displayPost?.author?.name}</div>
                            </Link>
                        </Col>
                    </Row> */}
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