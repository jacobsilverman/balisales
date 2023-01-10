import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import { getUserInfo, setUserInfo } from '../../Data/Services/userInfo.js';

import { MdUpload } from "react-icons/md";

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import './Settings.scss';

function Settings() {
    const [id, setId] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [instagram, setInstagram] = useState('');
    const [facebook, setFacebook] = useState('');
    const [file, setFile] = useState('');
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        getUserInfo().then((result) => {
            setId(result.id);
            setFirstName(result.firstName);
            setLastName(result.lastName);
            setDisplayName(result.displayName);
            setPhoneNumber(result.phoneNumber);
            setInstagram(result.instagram);
            setFacebook(result.facebook);
            setPosts(result.posts || []);
        });
    }, []);

    function handleChange(event) {
        setFile(event.target.files[0]);
    }

    return (
        <Container>
            <Row>
                <Col xs={12} className="center">
                    <Row>
                        <Col xs={12}>
                            <TextField label="first name" color="" onChange={(event) => setFirstName(event.target.value)} focused value={firstName} />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <TextField label="last name" color="" onChange={(event) => setLastName(event.target.value)} focused value={lastName} />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <TextField label="display name" color="" onChange={(event) => setDisplayName(event.target.value)} focused value={displayName} />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <TextField label="phone number" color="" onChange={(event) => setPhoneNumber(event.target.value)} focused value={phoneNumber} />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <TextField label="instagram" color="" onChange={(event) => setInstagram(event.target.value)} focused value={instagram} />
                        </Col>
                    </Row>
                    <Row>

                        <Col xs={12}>
                            <TextField label="facebook" color="" onChange={(event) => setFacebook(event.target.value)} focused value={facebook} />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <label className='profile-label' for="inputTag">
                                Profile Picture
                                <input id="inputTag" className='profile-input' type="file" onChange={handleChange} accept="/image/*" />
                                <br />
                                <MdUpload />
                            </label>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <Button onClick={() => setUserInfo({id, firstName, lastName, displayName, phoneNumber, instagram, facebook, posts}, file)}>
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