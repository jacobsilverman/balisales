import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import { getUserInfo, setUserInfo } from '../../Data/Services/userInfo.js';

import Button from '@mui/material/Button';

function Settings() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [instagram, setInstagram] = useState('');
    const [facebook, setFacebook] = useState('');
    
    const setUser = (payload) => {
        getUserInfo().then((result) => {
            setUserInfo({ ...result, ...payload });
        });
    }

    return (
        <Container>
            <Row>
                <Col xs={12} className="center">
                    <Row>
                        <Col xs={12}>
                            <label>First name</label>
                        </Col>
                        <Col xs={12}>
                            <input onChange={(event) => setFirstName(event.target.value)} />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <label>Last name</label>
                        </Col>
                        <Col xs={12}>
                            <input onChange={(event) => setLastName(event.target.value)} />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <label>Display name</label>
                        </Col>
                        <Col xs={12}>
                            <input onChange={(event) => setDisplayName(event.target.value)} />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <label>Phone number</label>
                        </Col>
                        <Col xs={12}>
                            <input onChange={(event) => setPhoneNumber(event.target.value)} />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <label>Profile Picture</label>
                        </Col>
                        <Col xs={12}>
                            <input />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <label>Instagram Url</label>
                        </Col>
                        <Col xs={12}>
                            <input onChange={(event) => setInstagram(event.target.value)} />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <label>Facebook Url</label>
                        </Col>
                        <Col xs={12}>
                            <input onChange={(event) => setFacebook(event.target.value)} />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <Button onClick={() => setUser({firstName, lastName, displayName, phoneNumber, instagram, facebook})}>
                                Submit
                            </Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default Settings;