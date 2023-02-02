import { Fragment, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';
import { setUserLogin, getProfilePicture } from '../../Data/Services/userInfo.js';
import { pageTitles } from '../../Data/Constants';
import SmNav from './SmNav/SmNav';
import LgNav from './LgNav/LgNav';

import { Col, Container, OverlayTrigger, Popover, Row } from 'react-bootstrap';
import defaultProfile from '../../Data/Images/default-profile.jpg';

import { auth, provider } from '../../firebase-config';
import { signInWithPopup, signOut } from 'firebase/auth';
import { useNavigate }   from 'react-router-dom';

import Button from '@mui/material/Button';

function Header() {
    let navigate = useNavigate();
    
    const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
    const [showNav, setShowNav] = useState(false);
    const [showAccount, setShowAccount] = useState(false);
    const [profilePic, setProfilePic] = useState(localStorage.getItem("profile-picture-"+localStorage.getItem("uid")));
    const [uid, setUid] = useState(localStorage.getItem("uid"));
    const [pageTitle, setPageTitle] = useState(pageTitles[window.location.pathname]);

    useEffect(() => {
        let ignore = false;
        if (!ignore && !profilePic) {
            getProfilePicture(uid).then((result) => {
                setProfilePic(result);
                localStorage.setItem("profile-picture-"+uid, result);
            }).catch(() => {
                setProfilePic(defaultProfile);
            });
        }
        return () => { ignore = true };
    }, [uid]);

    const signUserOut = () => {
        signOut(auth, provider).then(() => {
            setIsAuth(false);
            setShowAccount(false);
            navigate("/");
            localStorage.clear();
            localStorage.removeItem("uid");
            localStorage.removeItem("profile-picture-"+uid);
            localStorage.removeItem("displayName");
            console.log("user id: ",localStorage.getItem("uid"));
            setUid("");
        })
    }

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            setIsAuth(true);
            localStorage.setItem("isAuth", true);
            console.log(result?.user?.displayName);
            setUserLogin(result.user);
            localStorage.setItem("uid", result?.user?.uid);
            localStorage.setItem("displayName", result?.user?.displayName);
            console.log("user id: ",localStorage.getItem("uid"));
            setUid(result?.user?.uid);
        })
    }

    const closeNav = () => {
        setShowNav(cur => !cur);
        document.getElementById("menu__toggle").checked = false;
    }

    const accountVisibilityCls = `account-dropdown ${showAccount ? "visible" : 'hidden'}`;

    const accountOptionsPopover = (
        <Popover className="popover-container" id="popover-basic" title="Account Info">
            <Row className={accountVisibilityCls}>
                <Col  xs={12}>
                    <Row>
                        <Col xs={6} className="popover-item">
                            <Link to={{pathname: '/profile?id='+uid}} onClick={() => {setShowAccount(show => !show); setPageTitle("Profile")}}>
                                <div className="center popover-text">Profile</div>
                                <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="AttributionIcon" tabIndex="-1" title="Attribution"><path d="M12 8.5c-.91 0-2.75.46-2.75 1.38v4.62h1.5V19h2.5v-4.5h1.5V9.88c0-.91-1.84-1.38-2.75-1.38z"></path><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path><circle cx="12" cy="6.5" r="1.5"></circle></svg>
                            </Link>
                        </Col>
                        <Col xs={6} className="popover-item">
                            <Link to={{pathname: '/settings'}} onClick={() => {setShowAccount(show => !show);setPageTitle("Settings")}}>
                                <div className="center popover-text">Settings</div>
                                <svg className="setting-icon" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="SettingsIcon" tabIndex="-1" title="Settings"><path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"></path></svg>
                            </Link>
                        </Col>
                    </Row>
                    <Row  className="">
                        <Button onClick={signUserOut} color="error">
                            <Col className="right" xs={9}>
                                <span>Logout</span>
                            </Col>
                            <Col className="right" xs={3}>
                                <svg className="" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LogoutIcon" tabIndex="-1" title="Logout"><path d="m17 7-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"></path></svg>
                            </Col>
                        </Button>
                    </Row>
                </Col>
            </Row>
        </Popover>
    );

    const navBar = useMemo(() =>{
        return (
            <Container>
                <Row>
                    {window.innerWidth <= 1135 && (
                    <Fragment>
                        <SmNav signInWithGoogle={signInWithGoogle}
                        showNav={showNav}
                        closeNav={closeNav}
                        setPageTitle={setPageTitle}
                        setShowNav={setShowNav}
                        uid={uid} />
                        <Col xs={7} sm={8} className="center title">
                            { (typeof pageTitle === 'string') ? <h1 style={{display:"inline-block",fontSize:"40px",fontFamily:"roboto",paddingTop:"10px"}}><a href="/" style={{color:"black", textDecoration: "none"}}>{pageTitle}</a></h1>
                            : pageTitle
                            }
                        </Col>
                    </Fragment>)}

                    {window.innerWidth > 1135 && (
                    <Fragment>
                        <Col xs={7} sm={8} lg={3} className="center title">
                            { (typeof pageTitle === 'string') ? <h1 style={{display:"inline-block",fontSize:"40px",fontFamily:"roboto",paddingTop:"10px"}}><a href="/" style={{color:"black", textDecoration: "none"}}>{pageTitle}</a></h1>
                            : pageTitle
                            }
                        </Col>
                        <LgNav setPageTitle={setPageTitle} />
                    </Fragment>)}
                    <Col xs={3} sm={2} lg={2} className="login-container">
                        {!isAuth
                        ? <Button size="large" onClick={signInWithGoogle}>Login</Button>
                        :
                        <OverlayTrigger trigger="click" placement="bottom-end" show={showAccount} overlay={accountOptionsPopover}>
                            <Button onClick={() => setShowAccount(show => !show)}>
                                <div className="account-profile" style={{backgroundImage: `url(${profilePic})`}} />
                            </Button>
                        </OverlayTrigger>}
                    </Col>
                </Row>
            </Container>
        );
    }, [profilePic, isAuth, showAccount, isAuth, showNav, pageTitle]);

    return (
        <nav>
            <header className="App-header">
                {navBar}
            </header>
        </nav>
    );
}

export default Header;