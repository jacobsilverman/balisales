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
import './Profile.scss';
import { Button } from '@mui/material';
import Reviews from '../Reviews/Reviews.js';
import ReportReview from './ReportReview/ReportReview.js';
import { useTranslation } from 'react-i18next';

const Profile = () => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    const loggedId = localStorage.getItem("uid")
    const [loggedInUserData, setLoggedInUserData] = useState(loggedId);
    const [showPosts, setShowPosts] = useState(true);
    const [editPosts, setEditPosts] = useState(false);
    const [userData, setUserData] = useState();
    const [profilePic, setProfilePic] = useState(null);
    const [reference, setReference] = useState({
        rating: 0,
        open: false,
        author: {
            id: loggedId,
            displayName: localStorage.getItem("displayName")
        }
    });
    const { t } = useTranslation();

    useEffect(() => {
        if (!params?.id) {
            return
        }
        getUserInfo(params?.id).then((result) => {
            let parseResult = {...result};
            if (!parseResult?.referenceUrl) {
                parseResult.referenceUrl = ''
            }
            setUserData(parseResult);
        });

        getUserInfo(loggedId).then((result) => {
            setLoggedInUserData(result);
        })

        getProfilePicture(params?.id).then((result) => {
            setProfilePic(result);
        }).catch((err) => {
            setProfilePic(defaultProfile);
            console.error("no picture: ", err);
        });
    }, [params?.id, loggedId]);

    const handleWriteReference = (type) => {
        setReference(cur => {
            return {
                ...cur,
                type: type,
                open: true
            }
        });
    }

    const editToggle = `material-icons ${(editPosts)? 'green' : ''}`;

    if (!userData) {
        return;
    }
    
    return (
        <>
        <Container className="profile-header-container">
            <Row>
                <Col className="profile-header">
                    <h2>{userData?.displayName}</h2>
                </Col>
            </Row>
        </Container>
        <Container className="user-profile-container">
            <Row>
                <Col xs={12}  md={userData?.referenceUrl ? 6: 12} className="user-account-profile-col">
                    <Row style={{width:"100%"}}>
                        
                        <Col xs={12} md={userData?.referenceUrl || !userData?.address || Object.values(userData?.address).every(x => x === null || x === '') ? 12 : 6}>
                            {/* <Row className="center">
                                <Col>
                                    <h2>{userData.displayName}</h2>
                                </Col>
                            </Row> */}
                            {/* <div className="user-full-name-loc">
                                <div className="user-full-name">
                                    {!userData?.address}
                                    <h4>{userData?.firstName} {userData?.lastName}</h4>
                                </div>
                            </div> */}
                            <Row>
                                <Col className="profile-image center">
                                    <div className="user-account-profile center" style={{backgroundImage: `url(${profilePic})`}} />
                                </Col>
                            </Row>
                            <Row>
                                {loggedId && <>
                                    <Col style={{textAlign:"right",paddingTop:"10px"}} xs={6} md={6} xxl={6}>  
                                        <Button disabled={params?.id === loggedInUserData || loggedInUserData?.ip === userData?.ip} color="error" onClick={() => handleWriteReference("Report")}>{t("Report")}</Button>
                                    </Col>
                                    <Col style={{textAlign:"left",paddingTop:"10px"}} xs={6} md={6} xxl={6}>  
                                        <Button disabled={params?.id === loggedInUserData || loggedInUserData?.ip === userData?.ip} onClick={() => handleWriteReference("Reference")}>{t("Review")}</Button>
                                    </Col>
                                </>}
                            </Row>
                        </Col>
                        <Col xs={12} md={userData?.referenceUrl  || !userData?.address || Object.values(userData?.address).every(x => x === null || x === '') ? 12 : 6}>
                            <Row>
                                <Col xs={12} className="map-col-container">
                                    {userData?.address ?
                                    <Row>
                                        <Col xs={12} className="map-container">
                                            <Map addresses={[{...userData?.address, userInfo: {displayName: userData?.displayName, id: params?.id, icon: profilePic}}]} height="200px" width="75%" zoom={5} border="5px solid black" userInfo={{displayName: userData?.displayName, id: userData?.id, icon: profilePic}} />
                                        </Col>
                                        {userData?.address && <Col xs={12} className="loc-pin">
                                            <FaLocationArrow/>
                                            &nbsp;&nbsp;&nbsp;
                                            {userData?.address?.city}, {userData?.address?.state}
                                        </Col>}
                                    </Row>
                                    : <div className="center">
                                        {t('No address is saved')}
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
                        {userData?.facebook && <Col xs={2} className="item">
                            <SocialIcon target="blank" url={"https://www.facebook.com/"+userData?.facebook} />
                        </Col>}
                    </Row>
                    : <Row>
                        <Col className="center social-media-container">
                            {t('No Contact Method is Saved')}
                        </Col>
                    </Row>}
                </Col>
                {userData?.referenceUrl && userData?.referenceUrl?.toLowerCase().indexOf("instagram") &&
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
                <Col xs={6} className="info-dropdown">
                    <h2 onClick={() => setShowPosts(cur => !cur)}>
                        {t('Posts')}&nbsp;&nbsp;
                        <i size="small" className='material-icons'>{ showPosts ? "visibility_off" : "visibility_on"}</i>
                    </h2>
                </Col>
                {params?.id === loggedId && <Col xs={6} className="info-dropdown right">
                    <h4 onClick={() => setEditPosts(cur => !cur)}>
                        {t('Edit')}&nbsp;&nbsp;
                        <i size="small" className={editToggle}>{ !editPosts ? "toggle_off" : "toggle_on"}</i>
                    </h4>
                </Col>}
                {showPosts && <Account user={params?.id} settingsPage={editPosts} />}
            </Row>
            {userData?.reviews?.length > 0 && <>
                <hr style={{margin:"0"}} />
                <Reviews userData={userData} />
            </>}
        </Container>
        </>
    );
}

export default Profile;