import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import { getUserInfo, setUserInfo } from '../../Data/Services/userInfo.js';

import Account from '../Account';

import { FaImage } from "react-icons/fa";

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
                <Col xs={12} className="center settings-container">
                    <Row>
                        <Col xs={12} md="6" lg={4} className="setting-item">
                            <TextField fullWidth label="first name" color="" onChange={(event) => setFirstName(event.target.value)} value={firstName} />
                        </Col>
            
                        <Col xs={12} md="6" lg={4} className="setting-item">
                            <TextField fullWidth label="last name" color="" onChange={(event) => setLastName(event.target.value)} value={lastName} />
                        </Col>
            
                        <Col xs={12} md="6" lg={4} className="setting-item">
                            <TextField fullWidth label="display name" color="" onChange={(event) => setDisplayName(event.target.value)} value={displayName} />
                        </Col>
                
                        <Col xs={12} md="6" lg={4} className="setting-item">
                            <TextField fullWidth label="phone number" color="" onChange={(event) => setPhoneNumber(event.target.value)} value={phoneNumber} />
                        </Col>
                
                        <Col xs={12} md="6" lg={4} className="setting-item">
                            <TextField fullWidth label="instagram" color="" onChange={(event) => setInstagram(event.target.value)} value={instagram} />
                        </Col>
                

                        <Col xs={12} md="6" lg={4} className="setting-item">
                            <TextField fullWidth label="facebook" color="" onChange={(event) => setFacebook(event.target.value)} value={facebook} />
                        </Col>
                
                        <Col xs={12} className="setting-item">
                            <label className='profile-label' for="inputTag">
                                <span style={{color:"#1976d2"}}>Profile Picture</span>
                                <input id="inputTag" className='profile-input' type="file" onChange={handleChange} accept="/image/*" />
                                <br />
                                <FaImage size={40} />
                            </label>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} className="submit-button">
                            <Button variant="contained" onClick={() => setUserInfo({id, firstName, lastName, displayName, phoneNumber, instagram, facebook, posts}, file)}>
                                Submit
                            </Button>
                        </Col>
                    </Row>
                </Col>
                <hr />
                <Account />
            </Row>
        </Container>
    );
}

export default Settings;