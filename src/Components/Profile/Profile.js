import { useEffect, useState } from 'react';

import { getUserInfo, getProfilePicture } from '../../Data/Services/userInfo.js';
import defaultProfile from '../../Data/Images/default-profile.jpg';

import Account from '../Account/Account';

import SocialMedia from '../SocialMedia/SocialMedia.js';

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
                <Col xs={12} className="center">
                    <h1>{userData.firstName} {userData.lastName}</h1>
                </Col>
            </Row>
            
            <Row>
                <Col xs={12} className="profile-image center">
                    <div className="account-profile center" style={{backgroundImage: `url(${profilePic})`}} />
                </Col>
            </Row>

            <Row>
                <Col xs={12} className="center">
           
                    <SocialMedia 
                        instagram={userData.instagram}
                        facebook={userData.facebook}
                        userName={userData.displayName}
                        phoneNumber={userData.phoneNumber} />
                </Col>
            </Row>
            <hr />
            <Account user={params.id} />
        </Container>
    );
}

export default Profile;