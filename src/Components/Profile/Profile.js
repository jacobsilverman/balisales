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
            <Row className="center">
                <Col xs={3}>
                     <h2>{userData.displayName}</h2>
                </Col>
            </Row>

            <Row>
                <Col xs={3} className="profile-image center">
                    <div className="user-account-profile center" style={{backgroundImage: `url(${profilePic})`}} />
                </Col>
                <Col xs={9}>
                    <SocialMedia 
                        instagram={userData.instagram}
                        facebook={userData.facebook}
                        phoneNumber={userData.phoneNumber} />
                </Col>
            </Row>
            <Row className="center">
                <Col xs={12}>
                     <h3>{userData.firstName} {userData.lastName}</h3>
                </Col>
            </Row>
            <hr />
            <Account user={params.id} accountView={false} />
        </Container>
    );
}

export default Profile;