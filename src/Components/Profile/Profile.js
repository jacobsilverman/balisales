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
    const [userData, setUserData] = useState({});
    const [profilePic, setProfilePic] = useState(null);
    const [reference, setReference] = useState({
        rating: 0,
        open: false,
        author: {
            id: localStorage.getItem("uid"),
            displayName: localStorage.getItem("displayName")
        }
    });

    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());


    const { t } = useTranslation();

    useEffect(() => {
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
                <Col xs={5} sm={3} xl={2} className="user-account-profile-col">
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
                        <Col className="outer-container" xs={12}>
                            <Row className="center social-media-container">
                                {userData?.instagram && <Col xs={6}  className="item">
                                    <SocialIcon url={userData.instagram} />
                                </Col>}
                                <Col xs={6}  className="item">
                                    <SocialIcon url="https://www.youtube.com/channel/UCWzKQGtfgLhCBdXsFORsoTA" />
                                </Col>
                                <Col xs={6}  className="item">
                                    <SocialIcon url="https://twitter.com/imVkohli" />
                                </Col>
                                {userData?.phoneNumber && <Col xs={6}className="item">
                                    <SocialIcon url={"tel:"+userData.phoneNumber} network="telegram" />
                                </Col>}
                                <Col xs={6} className="item">
                                    <SocialIcon url="https://discord.com/channels/@jacoboson#8145" />
                                </Col>
                                {userData?.facebook && <Col xs={6}  className="item">
                                    <SocialIcon url={userData.facebook} />
                                </Col>}
                            </Row>
                        </Col>
                        <Col className="center" style={{paddingTop:"20px"}} xs={12} xxl={6}>  
                            <Button color="error" onClick={() => handleWriteReference("Report")}>{t("Report")}</Button>
                        </Col>
                        <Col className="center" style={{paddingTop:"20px"}} xs={12} xxl={6}>  
                            <Button onClick={() => handleWriteReference("Reference")}>{t("Write Review")}</Button>
                        </Col>
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
                <Col xs={7} sm={9}  xl={10}>
                    <div className="user-full-name-loc">
                        <div className="user-full-name">
                            <h2>{userData?.firstName} {userData?.lastName}</h2>
                        </div>
                        <div className="loc-pin">
                            <FaLocationArrow/>
                            &nbsp;&nbsp;&nbsp;
                            {userData?.address?.city}, {userData?.address?.state}
                        </div>
                    </div>
                    {userData?.address &&
                    <Row>
                        <Col className="map-container">
                            <Map address={userData.address} width="2500px" height={isMobile ? "43vh" : "max(32vh, 390px)"} />
                        </Col>
                    </Row>}
                </Col>
            </Row>
            {(reference?.open && <ReportReview t={t} id={params?.id} userData={userData} reference={reference} setReference={setReference} />) || <hr style={{margin:"0"}} />}
            <Account user={params?.id} settingsPage={false} />
            <hr style={{margin:"0"}} />
            {userData?.reviews?.length > 0 && <Reviews userData={userData} />}
        </Container>
    );
}

export default Profile;