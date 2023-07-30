import { Button, Modal } from '@mui/material';
import { useEffect, useState } from 'react';

import { getProfilePicture, getUserInfo } from '../../../../../Data/Services/userInfo.js';
import defaultProfile from '../../../../../Data/Images/default-profile.jpg';

import './SelectModal.scss';

import { Col, Row } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';

import { Link } from 'react-router-dom';

const SelectModal = ({t, item, handlePrevPost, handleNextPost,openSelectModal, setOpenSelectModal}) => {
    const [profilePic, setProfilePic] = useState();
    const [displayImage, setDisplayImage] = useState(0);
    const [userInfo, setUserInfo] = useState({});
    
    const [touchStart, setTouchStart] = useState(null)
    const [touchEnd, setTouchEnd] = useState(null)

    // the required distance between touchStart and touchEnd to be detected as a swipe
    const minSwipeDistance = 30 
    const createdDate = new Date(item?.timeStamp).toLocaleDateString();
    const displayPost = {...item};

    useEffect(() => {
        if (!displayPost?.author?.id){
            return
        }
        getProfilePicture(displayPost?.author?.id).then((result) => {
            setProfilePic(result);
        }).catch(() => {
            setProfilePic(defaultProfile);
        });

        getUserInfo(displayPost?.author?.id).then((result) => {
            setUserInfo(result);
        }).catch((err) => {
            console.log(err);
        })
    }, [displayPost?.author?.id]);

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
            <Col xs={12} style={{position:"relative",backgroundImage: `url(${image})`}} className={pictureCls} key={"post-"+image}>
                {displayPost?.numberOfImages > 1 && <Col xs={1} className="traverse-container" style={{position:"absolute",top: "120px", left: "10px"}}>
                    <Button id="traverse-prev-button" onClick={handlePreviousImage}>{"<"}</Button>
                </Col>}
                {displayPost?.numberOfImages > 1 && <Col xs={1} className="traverse-container" style={{position:"absolute",top: "120px", right: "10px"}}>
                    <Button id="traverse-next-button" onClick={handleNextImage}>{">"}</Button>
                </Col>}
            </Col>
        );
    })

    const postBottomPictures = (
        <Row className='all-pictures'>
            {displayPost?.urls?.map((image, index) => {
                return (
                    <Col key={image} className='individual-picture' style={{backgroundImage: `url(${image})`, backgroundSize:'100% 100%', maxWidth: "37.5px", height: "50px", opacity: (displayImage !== index) ? '.5': '1'}} onClick={() => handleAssignImage(index)} />
                );
            })}
        </Row>
    )

    const iteratePosts = (e, direction) => {
        e.stopPropagation();
        setDisplayImage(0);
        (direction==="next") ? handleNextPost() : handlePrevPost();
    }

    const onTouchStart = (e) => {
        setTouchEnd(null) // otherwise the swipe is fired even with usual touch events
        setTouchStart(e.targetTouches[0].clientX)
        setVanish("")
    }

    const onTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX)
        const distance = touchStart - e.targetTouches[0].clientX
        const isLeftSwipe = distance > minSwipeDistance
        const isRightSwipe = distance < -minSwipeDistance
        if (isLeftSwipe) {
            setVanish("vanish-left")
        }
        if (isRightSwipe){
            setVanish("vanish-right")
        }
    }

    const onTouchEnd = (e) => {
        if (!touchStart || !touchEnd) return
        const distance = touchStart - touchEnd
        const isLeftSwipe = distance > minSwipeDistance
        const isRightSwipe = distance < -minSwipeDistance
        setTimeout(() => {
            if (isLeftSwipe) {
                iteratePosts(e, "next")
            }
            if (isRightSwipe){
                iteratePosts(e, "prev")
            }
            setVanish("")
        }, 300)
        
    }

    const [vanish, setVanish] = useState();

    const buySellTradeClass = "desciption-title horizontal-center";
    const colorPriceClass = "price-title horizontal-center "+((displayPost?.type === "Buying") ? "bg" : (displayPost?.type === "Selling") ? "br" : "");
    const colorNextPrevClass = "carousel-post "+((displayPost?.type === "Buying") ? "buy" : (displayPost?.type === "Selling") ? "sell" : "trade");

    const displaySelectedPost = (
        <Modal  open={openSelectModal} className="select-modal"  onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd} onClick={() => setOpenSelectModal(cur => {return {...cur, show: false}})}>
            <Row>
                <span onClick={(e) => {iteratePosts(e, "prev")}} className={colorNextPrevClass+" prev"}>
                    {"<"}
                </span>
                <span onClick={(e) => {iteratePosts(e, "next")}}  className={colorNextPrevClass+" next"}>
                    {">"}
                </span>
                <Col className={"modal-background "+vanish} xs={12} onClick={(e) => e.stopPropagation()}>
                    <Row className='center'>
                        <Col>
                            <h1 id="select-modal-title">{displayPost?.title}</h1>
                            <Button id="select-modal-exit-button" color="error" onClick={() => setOpenSelectModal(cur => {return {...cur, show:false}})}>
                                X
                            </Button>
                        </Col>
                    </Row>
                   
                    <Row className="center-start">
                        <Col xs={12} sm={5} className="selected-post-image-container">
                            <Row className="content-container">
                                {displayPost?.urls && postPictures}
                            </Row>
                            {displayPost?.numberOfImages > 1 && postBottomPictures}
                        </Col>
                        <Col xs={12} sm={7} >
                            <Row className="horizontal-center">
                                <Col xs={12} className="info-container">
                                    <Row>
                                        <Col xs={6}  className="vertical-center brand-title">
                                            <h3>{displayPost?.brand}</h3>
                                        </Col>
                                        <Col xs={6}>
                                            <Row className="multi-content selling-price-wrapper">
                                                <Col xs={12} className={colorPriceClass}>
                                                    ${displayPost?.price}
                                                </Col>
                                                <Col xs={12}  className={buySellTradeClass}>
                                                    <b>{t(displayPost?.type)}</b>
                                                </Col>
                                            </Row>
                                        </Col>
                                        {/* <Col xs={6} className="condition-text">
                                            {t("Condition")}: {displayPost?.condition}
                                        </Col> */}
                                    </Row>
                                    <Row className="description-wrapper">
                                        <Col xs={12}>
                                            {displayPost?.description}
                                        </Col>
                                    </Row>
                                    <hr />
                                    <Row>
                                        <Col>
                                            <Row className="profile-link">
                                                <Col xs={3} sm={3} className='flex-end'>
                                                    <Link className="link" to={{pathname: '/profile', search: "id=" + displayPost?.author?.id}}>
                                                        <div className="account-profile" style={{backgroundImage: `url(${profilePic})`}} />
                                                    </Link>
                                                </Col>
                                                <Col xs={9} sm={9} className="vertical-center flex-start">
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
                                    </Row>
                                </Col>
                            </Row>

                            <Row className="contact">
                                <Col className="outer-container" xs={12}>
                                    <Row className="center social-media-container">
                                        {userInfo?.instagram && <Col xs={2}  className="item">
                                            <SocialIcon target="blank" url={"https://www.instagram.com/"+userInfo?.instagram} />
                                        </Col>}
                                        {userInfo?.youtube && <Col xs={2} className="item">
                                            <SocialIcon target="blank" url={"https://www.youtube.com/channel/"+userInfo?.youtube} />
                                        </Col>}
                                        {userInfo?.twitter && <Col xs={2} className="item">
                                            <SocialIcon target="blank" url={"https://www.twitter.com/"+userInfo?.twitter} />
                                        </Col>}
                                        {userInfo?.phoneNumber && <Col xs={2} className="item">
                                            <SocialIcon target="blank" url={"tel:"+userInfo?.phoneNumber} network="telegram" />
                                        </Col>}
                                        {userInfo?.discord && <Col xs={2} className="item">
                                            <SocialIcon target="blank" url={"https://www.discord.com/users/"+userInfo?.discord} />
                                        </Col>}
                                        {userInfo?.facebook && <Col xs={2} className="item">
                                            <SocialIcon target="blank" url={"https://www.facebook.com/"+userInfo?.facebook} />
                                        </Col>}
                                    </Row>
                                </Col>
                            </Row>
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