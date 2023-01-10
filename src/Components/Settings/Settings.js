import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import { getUserInfo, setUserInfo } from '../../Data/Services/userInfo.js';

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
                        <Col xs={12} sm={4} className="setting-item">
                            <TextField label="first name" color="" onChange={(event) => setFirstName(event.target.value)} focused value={firstName} />
                        </Col>
            
                        <Col xs={12} sm={4} className="setting-item">
                            <TextField label="last name" color="" onChange={(event) => setLastName(event.target.value)} focused value={lastName} />
                        </Col>
            
                        <Col xs={12} sm={4} className="setting-item">
                            <TextField label="display name" color="" onChange={(event) => setDisplayName(event.target.value)} focused value={displayName} />
                        </Col>
                
                        <Col xs={12} sm={4} className="setting-item">
                            <TextField label="phone number" color="" onChange={(event) => setPhoneNumber(event.target.value)} focused value={phoneNumber} />
                        </Col>
                
                        <Col xs={12} sm={4} className="setting-item">
                            <TextField label="instagram" color="" onChange={(event) => setInstagram(event.target.value)} focused value={instagram} />
                        </Col>
                

                        <Col xs={12} sm={4} className="setting-item">
                            <TextField label="facebook" color="" onChange={(event) => setFacebook(event.target.value)} focused value={facebook} />
                        </Col>
                
                        <Col xs={12} className="setting-item">
                            <label className='profile-label' for="inputTag">
                                Profile Picture
                                <input id="inputTag" className='profile-input' type="file" onChange={handleChange} accept="/image/*" />
                                <br />
                                <FaImage size={40} />
                            </label>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} className="setting-item">
                            <Button variant="contained" onClick={() => setUserInfo({id, firstName, lastName, displayName, phoneNumber, instagram, facebook, posts}, file)}>
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