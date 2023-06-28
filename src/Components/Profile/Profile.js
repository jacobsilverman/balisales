import { useEffect, useState } from 'react';

import { getUserInfo, getProfilePicture } from '../../Data/Services/userInfo.js';
import defaultProfile from '../../Data/Images/default-profile.jpg';

import { FaLocationArrow } from "react-icons/fa";

import Account from '../Account/Account';
import Map from '../Map';
// import SocialMedia from '../SocialMedia/SocialMedia.js';
import { SocialIcon } from 'react-social-icons';

import { Container, Col, Row } from 'react-bootstrap';
import { isMobile } from '../../Data/Constants/index.js';
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
                <Col xs={6} sm={6} md={3} xl={3} className="user-account-profile-col">
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
                            <Col className="center" style={{paddingTop:"10px"}} xs={6} md={6} xxl={6}>  
                                <Button disabled={params?.id === loggedInUser} color="error" onClick={() => handleWriteReference("Report")}>{t("Report")}</Button>
                            </Col>
                            <Col className="center" style={{paddingTop:"10px"}} xs={6} md={6} xxl={6}>  
                                <Button disabled={params?.id === loggedInUser} onClick={() => handleWriteReference("Reference")}>{t("Review")}</Button>
                            </Col>
                        </>}
                    </Row>
                    {/* <Row className="center report-vouch-buttons">
                        <Col style={{paddingLeft:"0px"}} xs={12} md={5}>  
                            <Button color="error" onClick={() => handleWriteReference("Report", "test")}>{t("Report")}</Button>
                        </Col>
                        <Col style={{paddingLeft:"0px"}} xs={12} md={7}>  
                            <Button onClick={() => handleWriteReference("Reference", "test1")}>{t("Write Review")}</Button>
                        </Col>
                    </Row> */}
                </Col>
                <Col xs={6} sm={6} md={3} xl={2} className="contact-outer-container">
                    <Row className="center">
                        <Col>
                            <h2>Contact</h2>
                        </Col>
                    </Row>
                    {(userData?.instagram || userData?.youtube || userData?.twitter || userData?.phoneNumber || userData?.discord || userData?.facebook) ? 
                    <Row className="center social-media-container">
                        {userData?.instagram && <Col xs={4} className="item">
                            <SocialIcon target="blank" url={"https://www.instagram.com/"+userData?.instagram} />
                        </Col>}
                        {userData?.youtube && <Col xs={4} className="item">
                            <SocialIcon target="blank" url={"https://www.youtube.com/channel/"+userData?.youtube} />
                        </Col>}
                        {userData?.twitter && <Col xs={4} className="item">
                            <SocialIcon target="blank" url={"https://www.twitter.com/"+userData?.twitter} />
                        </Col>}
                        {userData?.phoneNumber && <Col xs={4} className="item">
                            <SocialIcon target="blank" url={"tel:"+userData?.phoneNumber} network="telegram" />
                        </Col>}
                        {userData?.discord && <Col xs={4} className="item">
                            <SocialIcon target="blank" url={"https://www.discord.com/users/"+userData?.discord} />
                        </Col>}
                        {userData?.facebook && <Col xs={4} className="item">
                            <SocialIcon target="blank" url={"https://www.facebook.com/"+userData?.facebook} />
                        </Col>}
                    </Row>
                    : <Row>
                        <Col className="center social-media-container">
                            No Contact Method is Saved
                        </Col>
                    </Row>}
                    <Row>
                    </Row>
                </Col>
                <Col xs={12} sm={12} md={6} xl={7} className="map-col-container">
                    <div className="user-full-name-loc">
                        <div className="user-full-name">
                            <h2>{userData?.firstName} {userData?.lastName}</h2>
                        </div>
                        {userData?.address && <div className="loc-pin">
                            <FaLocationArrow/>
                            &nbsp;&nbsp;&nbsp;
                            {userData?.address?.city}, {userData?.address?.state}
                        </div>}
                    </div>
                    {userData?.address ?
                    <Row>
                        <Col className="map-container">
                            <Map address={userData.address} width="100%" height="150px" />
                        </Col>
                    </Row>
                    : <div style={{marginLeft: "25px"}}>
                        No address is saved
                     </div>}
                </Col>
                
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