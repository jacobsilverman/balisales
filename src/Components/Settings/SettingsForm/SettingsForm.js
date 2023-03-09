import { useEffect, useMemo, useState } from 'react';
import { Col, Row } from 'react-bootstrap';

import { getUserInfo, setUserInfo } from '../../../Data/Services/userInfo.js';

import { FaImage } from "react-icons/fa";
import Map from '../../Map';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useTranslation } from 'react-i18next';

const SettingsForm = ({id}) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [instagram, setInstagram] = useState('https://www.instagram.com/');
    const [facebook, setFacebook] = useState('https://www.facebook.com/');
    
    const [address, setAddress] = useState({
        address: '',
        unit: '',
        city: '',
        state: '',
        country: '',
        zipcode: ''
    });
    
    const [file, setFile] = useState('');
    const [posts, setPosts] = useState([]);
    const [showRequiredInfo, setShowRequiredInfo] = useState(true);
    const [showSocialInfo, setShowSocialInfo] = useState(true);
    const [showLocationInfo, setShowLocationInfo] = useState(true);
    const [profilePicture, setProfilePicture] = useState(localStorage.getItem("profile-picture-"+localStorage.getItem("uid")));

    const [validation, setValidation] = useState({
        firstName: false,
        lastName: false,
        displayName: false,
        phoneNumber: true,
        instagram: true,
        facebook: true,
        address: true,
        unit: true,
        city: true,
        country: true,
        state: true,
        zipcode: true
    });

    const { t } = useTranslation();

    const isValid = useMemo(() => {
        return !Object.values(validation).some((item) => item === false);
    }, [validation]);
    
    useEffect(() => {
        getUserInfo(id).then((result) => {
            setFirstName(result.firstName);
            setLastName(result.lastName);
            setDisplayName(result.displayName);
            setPhoneNumber(result.phoneNumber);
            setInstagram(result.instagram);
            setFacebook(result.facebook);
            setAddress(result.address);
            setPosts(result.posts || []);
            setValidation({
                firstName: result.firstName.length > 0,
                lastName: result.lastName.length > 0,
                displayName: result.displayName.length > 0,
                phoneNumber: result.phoneNumber.length === 0 || result.phoneNumber.length === 10,
                instagram:  true,
                facebook: true,
                address: true,
                unit: true,
                city: true,
                country: true,
                state: true,
                zipcode: true
            });
        });
    }, []);

    function handleProfileChange(event) {
        setFile(event.target.files[0]);
        setProfilePicture(URL.createObjectURL(event.target.files[0]));
    }

    const handleFirstNameChange = (event) => {
        const newVal = event.target.value;
        if (newVal.match(/['\-"><;:\\+{}!@#$%=^*_|[\]]/)) {
            return
        }
        setValidation(cur => {return {...cur, firstName: newVal !== ""}});
        setFirstName(newVal);
    }

    const handleLastNameChange = (event) => {
        const newVal = event.target.value;
        if (newVal.match(/['\-"><;:\\+{}!@#$%=^*_|[\]]/)) {
            return
        }
        setValidation(cur => {return {...cur, lastName: newVal !== ""}});
        setLastName(newVal);
    }

    const handleDisplayNameChange = (event) => {
        const newVal = event.target.value;
        if (newVal.match(/['\-"><;:\\+{}!@#$%=^*_|[\]]/)) {
            return
        }
        setValidation(cur => {return {...cur, displayName: newVal !== ""}});
        setDisplayName(newVal);
    }

    const handlePhoneNumberChange = (event) => {
        let result = event.target.value;
        let parsedNumber = result.replace("(","").replace(")","").replace(" ","").replace("-","");
        setValidation(cur => {return {...cur, phoneNumber: parsedNumber.length === 0  || parsedNumber.length === 10}});
        setPhoneNumber(parsedNumber);
    }

    const handleInstagramChange = (event) => {
        let newVal = event.target.value;
        if (newVal.match(/['\-"><;\\+{}!@#$%=^*_|[\]]/)) {
            return
        }
        let subRoute = newVal.split('/')
        if (typeof subRoute[3] === 'undefined') {
            return
        }

        setValidation(cur => {return {...cur, instagram: subRoute[3].length > 0}});
        setInstagram('https://www.instagram.com/'+subRoute[3]);
    }

    const handleFacebookChange = (event) => {
        let newVal = event.target.value;
        if (newVal.match(/['\-"><;\\+{}!@#$%=^*_|[\]]/)) {
            return
        }
        let subRoute = newVal.split('/')
        if (typeof subRoute[3] === 'undefined') {
            return
        }

        setValidation(cur => {return {...cur, facebook: subRoute[3].length > 0}});
        setFacebook('https://www.facebook.com/'+subRoute[3]);
    }

    const handleAddressChange = (event) => {
        let newVal = event.target.value;
        if (newVal.match(/['\-"><;\\+{}!@#$%=^*_|[\]]/)) {
            return
        }

        setValidation(cur => {return {...cur, address: true}});
        setAddress(cur => {return {...cur, address: newVal}});
    }

    const handleUnitChange = (event) => {
        let newVal = event.target.value;
        if (newVal.match(/['\-"><;\\+{}!@#$%=^*_|[\]]/)) {
            return
        }

        setValidation(cur => {return {...cur, unit: true}});
        setAddress(cur => {return {...cur, unit: newVal}});
    }

    const handleCityChange = (event) => {
        let newVal = event.target.value;
        if (newVal.match(/['\-"><;\\+{}!@#$%=^*_|[\]]/)) {
            return
        }

        setValidation(cur => {return {...cur, city: true}});
        setAddress(cur => {return {...cur, city: newVal}});
    }

    const handleCountryChange = (event) => {
        let newVal = event.target.value;
        if (newVal.match(/['\-"><;\\+{}!@#$%=^*_|[\]]/)) {
            return
        }

        setValidation(cur => {return {...cur, country: true}});
        setAddress(cur => {return {...cur, country: newVal}});
    }

    const handleStateChange = (event) => {
        let newVal = event.target.value;
        if (newVal.match(/['\-"><;\\+{}!@#$%=^*_|[\]]/)) {
            return
        }

        setValidation(cur => {return {...cur, state: true}});
        setAddress(cur => {return {...cur, state: newVal}});
    }

    const handleZipcodeChange = (event) => {
        let newVal = event.target.value;
        if (newVal.match(/['\-"><;\\+{}!@#$%=^*_|[\]]/)) {
            return
        }

        setValidation(cur => {return {...cur, zipcode: true}});
        setAddress(cur => {return {...cur, zipcode: newVal}});
    }

    const displayNumber = (number) => {
        if (isNaN(number)) return "";
        return (number.length >3 ? "(" : "")
        + number.substring(0, 3) 
        + (number.length > 3 ? ") " : "")
        + number.substring(3, 6) 
        + (number.length > 6 ? "-" : "")
        + number.substring(6, 10);
    }

    return (
        <Col xs={12} className="center settings-container">
            <Row>
                <Col xs={12} className="info-dropdown">
                    <h2 onClick={() => setShowRequiredInfo(cur => !cur)}>
                        Basic Info&nbsp;&nbsp;
                        <i size="small" className='material-icons'>{showRequiredInfo ? "visibility_off" : "visibility_on"}</i>
                    </h2>
                </Col>
                <hr />
                {showRequiredInfo && <>
                    <Col xs={12} sm={4} className="setting-item">
                        <TextField fullWidth label={t("First Name")} error={!validation.firstName} type="search" onChange={handleFirstNameChange} value={firstName} />
                    </Col>

                    <Col xs={12} sm={4} className="setting-item">
                        <TextField fullWidth label={t("Last Name")} error={!validation.lastName} type="search" onChange={handleLastNameChange} value={lastName} />
                    </Col>

                    <Col xs={12} sm={4} className="setting-item">
                        <TextField fullWidth label={t("Display Name")} error={!validation.displayName} type="search" onChange={handleDisplayNameChange} value={displayName} />
                    </Col>
                </>}

                <Col xs={12} className="info-dropdown">
                    <h2 onClick={() => setShowSocialInfo(cur => !cur)}>
                        Social Info&nbsp;&nbsp;
                        <i size="small" className='material-icons'>{ showSocialInfo ? "visibility_off" : "visibility_on"}</i>
                    </h2>
                </Col>
                <hr />
                {showSocialInfo && <>
                    <Col xs={12} md={7} lg={8}>
                        <Row>
                            <Col xs={12} className="setting-item">
                                <TextField fullWidth label={t("Phone Number")} error={!validation.phoneNumber} onChange={handlePhoneNumberChange} value={displayNumber(phoneNumber)} inputProps={{ maxLength: 14 }} />
                            </Col>
                    
                            <Col xs={12} className="setting-item">
                                <TextField fullWidth label={t(" ")} color="" type="url" error={!validation.instagram} onChange={handleInstagramChange} value={instagram} />
                            </Col>

                            <Col xs={12} className="setting-item">
                                <TextField fullWidth label={t(" ")} color="" type="url" error={!validation.facebook} onChange={handleFacebookChange} value={facebook} />
                            </Col>
                        </Row>
                    </Col>
        
                    <Col xs={12} md={5} lg={4} className="setting-item profile-image-update">
                        <label className={(!profilePicture) ? 'profile-label' : ''} htmlFor="inputTag">
                            {(!profilePicture) ? <span style={{color:"black"}}>{t('Profile Picture')}</span> : null}
                            <input id="inputTag" className='profile-input' type="file" onChange={handleProfileChange} accept="image/*" />
                            {(!profilePicture) ? <><br /><FaImage size={40} /></> : <img src={profilePicture} className="upload-image" alt="profile display" />}
                        </label>
                    </Col>
                
                </>}
                <Col xs={12} className="info-dropdown">
                    <h2 onClick={() => setShowLocationInfo(cur => !cur)}>
                        Location Info&nbsp;&nbsp;
                        <i size="small" className='material-icons'>{ showLocationInfo ? "visibility_off" : "visibility_on"}</i>
                    </h2>
                </Col>
                <hr />
                {showLocationInfo && <>
                    <Col xs={12} md={address && 7} lg={address && 8}>
                        <Row>
                            <Col xs={12} md={6} className="setting-item">
                                <TextField fullWidth label={t("Address")} error={!validation.address} value={address?.address} onChange={handleAddressChange} />
                            </Col>
                            <Col xs={12} md={6} className="setting-item">
                                <TextField fullWidth label={t("Unit")} color="" type="url" error={!validation.unit} value={address?.unit} onChange={handleUnitChange} />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={6} className="setting-item">
                                <TextField fullWidth label={t("City")} color="" type="url" error={!validation.city} value={address?.city} onChange={handleCityChange} />
                            </Col>
                            <Col xs={12} md={6} className="setting-item">
                                <TextField fullWidth label={t("Country")} color="" type="url" error={!validation.country} value={address?.country} onChange={handleCountryChange} />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={6} className="setting-item">
                                <TextField fullWidth label={t("State")} color="" type="url" error={!validation.state}  value={address?.state} onChange={handleStateChange} />
                            </Col>
                            <Col xs={12} md={6} className="setting-item">
                                <TextField fullWidth label={t("Zipcode")} color="" type="url" error={!validation.zipcode} value={address?.zipcode} onChange={handleZipcodeChange} />
                            </Col>
                        </Row>
                    </Col>
                    {address && <Col xs={12} md={5} lg={4} className="map-container">
                        <Map address={address} width="280px"  height="210px" />
                    </Col>}
                </>}
            </Row>
            <Row>
                <Col xs={12} className="submit-button">
                    <Button disabled={!isValid} variant="contained" onClick={() => setUserInfo({id, firstName, lastName, displayName, phoneNumber, instagram, facebook, address, posts}, file)}>
                        {t("Submit")}
                    </Button>
                </Col>
            </Row>
        </Col>
    );
}

export default SettingsForm;