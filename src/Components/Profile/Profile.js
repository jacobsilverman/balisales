import { useEffect, useState } from 'react';

import { getUserInfo, getProfilePicture } from '../../Data/Services/userInfo.js';
import defaultProfile from '../../Data/Images/default-profile.jpg';

import { FaLocationArrow } from "react-icons/fa";

import Account from '../Account/Account';
import Map from '../Map';
// import SocialMedia from '../SocialMedia/SocialMedia.js';
import { SocialIcon } from 'react-social-icons';

import { InstagramEmbed } from 'react-social-media-embed';

import { Container, Col, Row } from 'react-bootstrap';
// import { isMobile } from '../../Data/Constants/index.js';
import { Button } from '@mui/material';
import Reviews from '../Reviews/Reviews.js';
import ReportReview from './ReportReview/ReportReview.js';
import { useTranslation } from 'react-i18next';

const Profile = () => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    const loggedInUser = localStorage.getItem("uid");
    const [showPosts, setShowPosts] = useState(true);
    const [userData, setUserData] = useState({});
    const [profilePic, setProfilePic] = useState(null);
    const [reference, setReference] = useState({
        rating: 0,
        open: false,
        author: {
            id: loggedInUser,
            displayName: localStorage.getItem("displayName")
        }
    });
    const { t } = useTranslation();


    useEffect(() => {
        if (!params?.id) {
            return
        }

        getUserInfo(params?.id).then((result) => {
            setUserData(result);
        });

        getProfilePicture(params?.id).then((result) => {
            setProfilePic(result);
        }).catch(() => {
            setProfilePic(defaultProfile);
        });
    }, []);

    const handleWriteReference = (type) => {
        setReference(cur => {
            return {
                ...cur,
                type: type,
                open: true
            }
        });
    }

    return (
        <Container className="user-profile-container">
            <Row>
                <Col xs={12}  md={userData?.referenceUrl ? 6 : 12} className="user-account-profile-col">
                    <Row style={{width:"100%"}}>
                        <Col xs={12} md={userData?.referenceUrl || !userData?.address || Object.values(userData?.address).every(x => x === null || x === '') ? 12 : 6}>
                            <Row className="center">
                                <Col>
                                    <h2>{userData.displayName}</h2>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="profile-image center">
                                    <div className="user-account-profile center" style={{backgroundImage: `url(${profilePic})`}} />
                                </Col>
                            </Row>
                            <Row>
                                {loggedInUser && <>
                                    <Col style={{textAlign:"right",paddingTop:"10px"}} xs={6} md={6} xxl={6}>  
                                        <Button disabled={params?.id === loggedInUser} color="error" onClick={() => handleWriteReference("Report")}>{t("Report")}</Button>
                                    </Col>
                                    <Col style={{textAlign:"left",paddingTop:"10px"}} xs={6} md={6} xxl={6}>  
                                        <Button disabled={params?.id === loggedInUser} onClick={() => handleWriteReference("Reference")}>{t("Review")}</Button>
                                    </Col>
                                </>}
                            </Row>
                        </Col>
                        <Col xs={12} md={userData?.referenceUrl  || !userData?.address || Object.values(userData?.address).every(x => x === null || x === '') ? 12 : 6}>
                            <Row>
                                <Col xs={12} className="map-col-container">
                                    <div className="user-full-name-loc">
                                        <div className="user-full-name">
                                            {!userData?.address}
                                            <h2>{userData?.firstName} {userData?.lastName}</h2>
                                        </div>
                                    </div>
                                    {userData?.address ?
                                    <Row>
                                        <Col xs={12} className="map-container">
                                            <Map address={userData.address} height="200px" width="400px" border="5px solid black" />
                                        </Col>
                                        {userData?.address && <Col xs={12} className="loc-pin">
                                            <FaLocationArrow/>
                                            &nbsp;&nbsp;&nbsp;
                                            {userData?.address?.city}, {userData?.address?.state}
                                        </Col>}
                                    </Row>
                                    : <div className="center">
                                        No address is saved
                                    </div>}
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    {(userData?.instagram || userData?.youtube || userData?.twitter || userData?.phoneNumber || userData?.discord || userData?.facebook) ? 
                    <Row className="center social-media-container">
                        {userData?.instagram && <Col xs={2}  className="item">
                            <SocialIcon target="blank" url={"https://www.instagram.com/"+userData?.instagram} />
                        </Col>}
                        {userData?.youtube && <Col xs={2}  className="item">
                            <SocialIcon target="blank" url={"https://www.youtube.com/channel/"+userData?.youtube} />
                        </Col>}
                        {userData?.twitter && <Col xs={2}  className="item">
                            <SocialIcon target="blank" url={"https://www.twitter.com/"+userData?.twitter} />
                        </Col>}
                        {userData?.phoneNumber && <Col xs={2}  className="item">
                            <SocialIcon target="blank" url={"tel:"+userData?.phoneNumber} network="telegram" />
                        </Col>}
                        {userData?.discord && <Col xs={2}  className="item">
                            <SocialIcon target="blank" url={"https://www.discord.com/users/"+userData?.discord} />
                        </Col>}
                        {userData?.facebook && <Col xs={2} md={2} className="item">
                            <SocialIcon target="blank" url={"https://www.facebook.com/"+userData?.facebook} />
                        </Col>}
                    </Row>
                    : <Row>
                        <Col className="center social-media-container">
                            No Contact Method is Saved
                        </Col>
                    </Row>}
                </Col>
                {userData?.referenceUrl.toLowerCase().indexOf("instagram") &&
                <Col xs={12} md={6} className="contact-outer-container">
                    <Row>
                        <Col style={{ display: 'flex', justifyContent: 'center' }}>
                            <InstagramEmbed url={userData?.referenceUrl} width={"330px"} />
                        </Col>
                    </Row>
                </Col>}
            </Row>
            {(reference?.open && <ReportReview t={t} id={params?.id} userData={userData} reference={reference} setReference={setReference} />)}
            <Row>
                <Col xs={12} className="info-dropdown">
                    <h2 onClick={() => setShowPosts(cur => !cur)}>
                        Posts&nbsp;&nbsp;
                        <i size="small" className='material-icons'>{ showPosts ? "visibility_off" : "visibility_on"}</i>
                    </h2>
                </Col>
                {showPosts && <Account user={params?.id} settingsPage={false} />}
            </Row>
            {userData?.reviews?.length > 0 && <>
                <hr style={{margin:"0"}} />
                <Reviews userData={userData} />
            </>}
        </Container>
    );
}

export default Profile;