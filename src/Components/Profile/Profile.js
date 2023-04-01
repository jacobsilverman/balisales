import { useEffect, useState } from 'react';

import { getUserInfo, getProfilePicture } from '../../Data/Services/userInfo.js';
import defaultProfile from '../../Data/Images/default-profile.jpg';

import Account from '../Account/Account';
import Map from '../Map';
import SocialMedia from '../SocialMedia/SocialMedia.js';
import { SocialIcon } from 'react-social-icons';

import { Container, Col, Row } from 'react-bootstrap';

const Profile = () => {
    const [userData, setUserData] = useState({});
    const [profilePic, setProfilePic] = useState(null);

    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());

    useEffect(() => {
        getUserInfo(params.id).then((result) => {
            setUserData(result);
        });

        getProfilePicture(params.id).then((result) => {
            setProfilePic(result);
        }).catch(() => {
            setProfilePic(defaultProfile);
        });
    }, []);


    return (
        <Container className="user-profile-container">
            <Row>
                <Col xs={4} sm={3} className="user-account-profile-col">
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
                    <Row className="center">
                        <Col>
                            <h3>{userData.firstName} {userData.lastName}</h3>
                        </Col>
                    </Row>
                    <Row className="center social-media-container">
                        {userData?.instagram && <Col sm={6} lg={3}  className="item">
                            <SocialIcon url={userData.instagram} />
                        </Col>}
                        {userData?.facebook && <Col sm={6} lg={3} className="item">
                            <SocialIcon url={userData.facebook} />
                        </Col>}
                        {userData?.phoneNumber && <Col sm={6} lg={3} className="item">
                            <SocialIcon url={"tel:"+userData.phoneNumber} network="telegram" />
                        </Col>}
                        <Col sm={6} lg={3} className="item">
                            <SocialIcon url="https://discord.com/channels/@jacoboson#8145" />
                        </Col>
                        <Col sm={6} lg={3} className="item">
                            <SocialIcon url="https://twitter.com/imVkohli" />
                        </Col>
                        <Col sm={6} lg={3} className="item">
                            <SocialIcon url="https://www.youtube.com/channel/UCWzKQGtfgLhCBdXsFORsoTA" />
                        </Col>
                        <Col sm={6} lg={3} className="item">
                            <SocialIcon url="https://www.twitch.tv/dank_satan" />
                        </Col>
                        <Col sm={6} lg={3} className="item">
                            <SocialIcon url="https://www.twitch.tv/dank_satan" />
                        </Col>
                    </Row>
                </Col>
                <Col xs={8} sm={9}>
                    {userData?.address &&
                    <Row>
                        <Col style={{display:'flex', justifyContent:'center', padding: "30px"}}>
                            <Map address={userData.address} width="800px" height="400px" />
                        </Col>
                    </Row>}
                </Col>
            </Row>


                {/* <Col xs={9}>
                    <SocialMedia 
                        instagram={userData.instagram}
                        facebook={userData.facebook}
                        phoneNumber={userData.phoneNumber} />
                </Col>
            </Row> */}
            {/* <Row className="center">
                <Col xs={12}>
                     <h3>{userData.firstName} {userData.lastName}</h3>
                </Col>
            </Row> */}
            
            <hr style={{margin:"0"}} />
            <Account user={params.id} settingsPage={false} />
        </Container>
    );
}

export default Profile;