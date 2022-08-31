import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import { getUserInfo, setUserInfo } from '../../Data/Services/userInfo.js';

import Button from '@mui/material/Button';

function Settings() {
    const [id, setId] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [instagram, setInstagram] = useState('');
    const [facebook, setFacebook] = useState('');
    
    useEffect(() => {
        getUserInfo().then((result) => {
            setId(result.id);
            setFirstName(result.firstName);
            setLastName(result.lastName);
            setDisplayName(result.displayName);
            setPhoneNumber(result.phoneNumber);
            setInstagram(result.instagram);
            setFacebook(result.facebook);
        });
    }, []);

    return (
        <Container>
            <Row>
                <Col xs={12} className="center">
                    <Row>
                        <Col xs={12}>
                            <label>First name</label>
                        </Col>
                        <Col xs={12}>
                            <input value={firstName} onChange={(event) => setFirstName(event.target.value)} />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <label>Last name</label>
                        </Col>
                        <Col xs={12}>
                            <input value={lastName} onChange={(event) => setLastName(event.target.value)} />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <label>Display name</label>
                        </Col>
                        <Col xs={12}>
                            <input value={displayName} onChange={(event) => setDisplayName(event.target.value)} />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <label>Phone number</label>
                        </Col>
                        <Col xs={12}>
                            <input value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)} />
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
                            <input value={instagram} onChange={(event) => setInstagram(event.target.value)} />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <label>Facebook Url</label>
                        </Col>
                        <Col xs={12}>
                            <input value={facebook} onChange={(event) => setFacebook(event.target.value)} />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <Button onClick={() => setUserInfo({id, firstName, lastName, displayName, phoneNumber, instagram, facebook})}>
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