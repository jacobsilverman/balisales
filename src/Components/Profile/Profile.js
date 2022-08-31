import { useEffect, useState } from 'react';

import { getUserInfo } from '../../Data/Services/userInfo.js';

import { Container, Col, Row } from 'react-bootstrap';

const Profile = () => {
    const [userData, setUserData] = useState({});

    useEffect(() => {
        getUserInfo().then((result) => {
            setUserData(result);
        });
    }, []);

    return (
        <Container>
            <Row>
                <Col xs={5} className="right">
                    user Id:
                </Col>
                <Col xs={7} className="left">
                    {userData.id}
                </Col>
            </Row>
            <Row>
                <Col xs={5} className="right">
                    First Name:
                </Col>
                <Col xs={7} className="left">
                    {userData.firstName}
                </Col>
            </Row>
            <Row>
                <Col xs={5} className="right">
                    Last Name:
                </Col>
                <Col xs={7} className="left">
                    {userData.lastName}
                </Col>
            </Row>
            <Row>
                <Col xs={5} className="right">
                    Display Name:
                </Col>
                <Col xs={7} className="left">
                    {userData.displayName}
                </Col>
            </Row>
            <Row>
                <Col xs={5} className="right">
                    Phone Number:
                </Col>
                <Col xs={7} className="left">
                    {userData.phoneNumber}
                </Col>
            </Row>
            <Row>
                <Col xs={5} className="right">
                    Instagram:
                </Col>
                <Col xs={7} className="left">
                    {userData.instagram}
                </Col>
            </Row>
            <Row>
                <Col xs={5} className="right">
                    Facebook
                </Col>
                <Col xs={7} className="left">
                    {userData.facebook}
                </Col>
            </Row>
        </Container>
    );
}

export default Profile;