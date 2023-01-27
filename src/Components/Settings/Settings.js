import { useEffect, useMemo, useState } from 'react';
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

    const [profilePicture, setProfilePicture] = useState(null);

    const [validation, setValidation] = useState({
        firstName: true,
        lastName: true,
        displayName: true
    });

    const isValid = useMemo(() => {
        return !Object.values(validation).some((item) => item === false);
    }, [validation]);
    
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
            setValidation({
                firstName: result.firstName.length > 0 && true,
                lastName: result.lastName.length > 0 && true,
                displayName: result.displayName.length > 0 && true
            });
        });
    }, []);

    function handleProfileChange(event) {
        setFile(event.target.files[0]);
        setProfilePicture(URL.createObjectURL(event.target.files[0]));
    }

    const handleFirstNameChange = (event) => {
        const newVal = event.target.value;
        setValidation(cur => {return {...cur, firstName: newVal !== ""}});
        setFirstName(newVal);
    }

    const handleLastNameChange = (event) => {
        const newVal = event.target.value;
        setValidation(cur => {return {...cur, lastName: newVal !== ""}});
        setLastName(newVal);
    }

    const handleDisplayNameChange = (event) => {
        const newVal = event.target.value;
        setValidation(cur => {return {...cur, displayName: newVal !== ""}});
        setDisplayName(newVal);
    }

    return (
        <Container>
            <Row>
                <Col xs={12} className="center settings-container">
                    <Row>
                        <Col xs={12} md="6" lg={4} className="setting-item">
                            <TextField fullWidth label="first name" error={!validation.firstName} type="search" onChange={handleFirstNameChange} value={firstName} />
                        </Col>
            
                        <Col xs={12} md="6" lg={4} className="setting-item">
                            <TextField fullWidth label="last name" error={!validation.lastName} type="search" onChange={handleLastNameChange} value={lastName} />
                        </Col>
            
                        <Col xs={12} md="6" lg={4} className="setting-item">
                            <TextField fullWidth label="display name" error={!validation.displayName} type="search" onChange={handleDisplayNameChange} value={displayName} />
                        </Col>
                
                        <Col xs={12} md="6" lg={4} className="setting-item">
                            <TextField fullWidth label="phone number" color="" type="tel"  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" onChange={(event) => setPhoneNumber(event.target.value)} value={phoneNumber} />
                        </Col>
                
                        <Col xs={12} md="6" lg={4} className="setting-item">
                            <TextField fullWidth label="instagram" color="" type="url" onChange={(event) => setInstagram(event.target.value)} value={instagram} />
                        </Col>

                        <Col xs={12} md="6" lg={4} className="setting-item">
                            <TextField fullWidth label="facebook" color="" type="url" onChange={(event) => setFacebook(event.target.value)} value={facebook} />
                        </Col>
                
                        <Col xs={12} className="setting-item">
                            <label className='profile-label' htmlFor="inputTag">
                                <span style={{color:"black"}}>Profile Picture</span>
                                <input id="inputTag" className='profile-input' type="file" onChange={handleProfileChange} accept="/image/*" />
                                <br />
                                {(!profilePicture) ? <FaImage size={40} /> : <img src={profilePicture} className="upload-image" alt="preview image" />}
                            </label>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} className="submit-button">
                            <Button disabled={!isValid} variant="contained" onClick={() => setUserInfo({id, firstName, lastName, displayName, phoneNumber, instagram, facebook, posts}, file)}>
                                Submit
                            </Button>
                        </Col>
                    </Row>
                </Col>
                <hr />
                <Account user={id} accountView={true} />
            </Row>
        </Container>
    );
}

export default Settings;