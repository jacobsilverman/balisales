import { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';
import { setUserLogin, getProfilePicture } from '../../Data/Services/userInfo.js';

import { Col, Container, OverlayTrigger, Popover, Row } from 'react-bootstrap';
import defaultProfile from '../../Data/Images/default-profile.png';

import { auth, provider } from '../../firebase-config';
import { signInWithPopup, signOut } from 'firebase/auth';
import { useNavigate }   from 'react-router-dom';

import Button from '@mui/material/Button';

function Header({isAuth, setIsAuth}) {
    let navigate = useNavigate();
    
    const [showAccount, setShowAccount] = useState(false);
    const [profilePic, setProfilePic] = useState('');
    const [uid, setUid] = useState(localStorage.getItem("uid"));

    useEffect(() => {
        getProfilePicture(uid).then((result) => {
            setProfilePic(result);
        }).catch(() => {
            setProfilePic(defaultProfile);
        });
    }, [uid]);

    const signUserOut = () => {
        signOut(auth, provider).then(() => {
            setIsAuth(false);
            setShowAccount(false);
            navigate("/");
            localStorage.clear();
            localStorage.setItem("uid", "");
            console.log("user id: ",localStorage.getItem("uid"));
            setUid("");
        })
    }

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            setIsAuth(true);
            localStorage.setItem("isAuth", true);
            console.log(result);
            setUserLogin(result.user);
            localStorage.setItem("uid", result?.user?.uid);
            console.log("user id: ",localStorage.getItem("uid"));
            setUid(result?.user?.uid);
        })
    }

    const accountVisibilityCls = `account-dropdown ${showAccount ? "visible" : 'hidden'}`;

    const popover = (
        <Popover className="popover-container" id="popover-basic" title="Account Info">
            <Row className={accountVisibilityCls}>
                <Col  xs={12}>
                    <Row>
                        <Col xs={4} className="popover-item">
                            <div className="center">Posts</div>
                            <Button>
                                <Link className="white" to={{pathname: '/account'}}>
                                    <svg className="" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ReceiptLongIcon" tabIndex="-1" title="ReceiptLong"><path d="M19.5 3.5 18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2v14H3v3c0 1.66 1.34 3 3 3h12c1.66 0 3-1.34 3-3V2l-1.5 1.5zM19 19c0 .55-.45 1-1 1s-1-.45-1-1v-3H8V5h11v14z"></path><path d="M9 7h6v2H9zm7 0h2v2h-2zm-7 3h6v2H9zm7 0h2v2h-2z"></path></svg>
                                </Link>
                            </Button>
                            
                        </Col>
                        <Col xs={4} className="popover-item">
                            <div className="center">Profile</div>
                            <Button>
                                <Link className="white" to={{pathname: '/profile'}}>
                                    <svg className="" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="AttributionIcon" tabIndex="-1" title="Attribution"><path d="M12 8.5c-.91 0-2.75.46-2.75 1.38v4.62h1.5V19h2.5v-4.5h1.5V9.88c0-.91-1.84-1.38-2.75-1.38z"></path><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path><circle cx="12" cy="6.5" r="1.5"></circle></svg>
                                </Link>
                            </Button>
                        </Col>
                        <Col xs={4} className="popover-item">
                            <div className="center">Settings</div>
                            <Button>
                                <Link className="white" to={{pathname: '/settings'}}>
                                    <svg className="" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="SettingsIcon" tabIndex="-1" title="Settings"><path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"></path></svg>
                                </Link>
                            </Button>
                        </Col>
                    </Row>
                    <Row  className="popover-item">
                        <Button onClick={signUserOut}>
                            <Col className="right" xs={10}>
                                <span>Logout</span>
                            </Col>
                            <Col className="right" xs={2}>
                                <svg className="" focusable="false" aria-hidden="true" viewBox="0 0 40 24" data-testid="LogoutIcon" tabIndex="-1" title="Logout"><path d="m17 7-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"></path></svg>
                            </Col>
                        </Button>
                    </Row>
                </Col>
            </Row>
        </Popover>
    );

    return (
        <Fragment>
            <header className="App-header">
                <Container>
                    <Row>
                        <Col xs={2} sm={2} md={2} className="remove-right-padding icon-padding">
                            <a href="/">
                                <i className="material-icons home">home</i>
                            </a>
                        </Col>
                        <Col  xs={2} sm={2} md={2} className="icon-padding">
                            <Link className="white" to={{pathname: '/createPost'}}><i className="material-icons home">add</i></Link>
                        </Col>
                        <Col xs={4} sm={4} md={4} className="center title">
                            <h1 style={{fontSize:"40px",fontFamily:"roboto",paddingTop:"10px"}}>Sales</h1>
                        </Col>
                        <Col xs={4} sm={4} md={4} className="login-padding">
                            <Row>
                                <Col xs={12} className="right">
                                    {!isAuth
                                    ? <Button onClick={signInWithGoogle}>Login</Button>
                                    :
                                    <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                                        <Button onClick={() => setShowAccount(!showAccount)}>
                                            <div className="account-profile" style={{backgroundImage: `url(${profilePic})`}} />
                                        </Button>
                                    </OverlayTrigger>}
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </header>
        </Fragment>
    );
}

export default Header;