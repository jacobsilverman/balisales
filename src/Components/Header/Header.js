import { Fragment, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';
import { setUserLogin, getProfilePicture } from '../../Data/Services/userInfo.js';
import { pageTitles } from '../../Data/Constants';

import { Col, Container, OverlayTrigger, Popover, Row } from 'react-bootstrap';
import defaultProfile from '../../Data/Images/default-profile.jpg';

import { auth, provider } from '../../firebase-config';
import { signInWithPopup, signOut } from 'firebase/auth';
import { useNavigate }   from 'react-router-dom';

import { Button, TextField } from '@mui/material';

const SearchBar = ({posts, showSearch}) => {
    const [searchValue, setSearchValue] = useState("");

    const searchFilter = useMemo(() => {
        const searchItems = ["test", "yes", "new"];
        const result = searchItems.filter((item) => {
            return item.includes(searchValue);
        }).map((item) => {
            return (<div key={"search-"+item}>{item}</div>)
        });
        return result;
    },[searchValue])
    
    const searchCls = `account-dropdown ${showSearch ? "visible" : 'hidden'}`;
    const searchAbility = (event) => {
        let newValue = event.target.value;
        if (newValue.match(/[%<>\\$'"]/)) {
            return
        }
        setSearchValue(newValue);
    }
  
    return (
        <Fragment>
            <Row className={searchCls}>
                <Col xs={12} className="popover-container">
                    <TextField fullWidth label="search" color="" type="search" defaultValue={searchValue} onChange={searchAbility} />
                </Col>
            </Row>
            {searchValue !== "" && searchFilter.length > 0 && <div className="search-results-container">
                {searchFilter}
            </div>}
        </Fragment>
    );
  };

function Header({posts}) {
    let navigate = useNavigate();
    
    const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
    const [showAccount, setShowAccount] = useState(false);
    const [showInbox, setShowInbox] = useState(false);
    const [showNav, setShowNav] = useState(false);
    const [showNotifications, setShowNotifications] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
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

    const resetAllPopovers = (ignore) => {
        ignore !== "inbox" && setShowInbox(false);
        ignore !== "account" && setShowAccount(false);
        ignore !== "notifications" && setShowNotifications(false);
        ignore !== "search" && setShowSearch(false);
        ignore !== "nav" && setShowNav(false);
    }

    const navCls = `account-dropdown ${showNav ? "visible" : 'hidden'}`;

    const navPopover = (
        <Popover id="popover-nav" title="Account Info">
            <Row className={navCls}>
                <Col xs={12} className="popover-container">
                    <Link className="white" to={{pathname: '/createPost'}}>
                        <Button  onClick={() =>{resetAllPopovers("create");setPageTitle("Create")}}>
                            <i className="material-icons">add</i>
                            &nbsp;Create
                        </Button>
                    </Link>
                    <hr />
                    <Link className="white" to={{pathname: '/contactUs'}}>
                        <Button onClick={() =>{resetAllPopovers("contact");setPageTitle("Contact")}}>
                            <i className="material-icons">contact_support</i>
                            &nbsp;Contact Support
                        </Button>
                    </Link>
                    <Link className="white" to={{pathname: '/aboutUs'}}>
                        <Button onClick={() =>{resetAllPopovers("about");setPageTitle("About Us")}}>
                            <i className="material-icons">face</i>
                            &nbsp;About Us
                        </Button>
                    </Link>
                </Col>
            </Row>
        </Popover>
    );

    const searchPopover = (
        <Popover id="popover-search" title="Account Info">
            <SearchBar posts={posts} showSearch={showSearch} />
        </Popover>
    );

    const notificationCls = `account-dropdown ${showNotifications ? "visible" : 'hidden'}`;

    const notificationPopover = (
        <Popover id="popover-notications" title="Account Info">
            <Row className={notificationCls}>
                <Button xs={3} className="popover-container">
                    <i className="material-icons">highlight</i>
                    &nbsp;no new alerts
                </Button>
            </Row>
        </Popover>
    );

    const inboxCls = `account-dropdown ${showInbox ? "visible" : 'hidden'}`;

    const inboxPopover = (
        <Popover id="popover-inbox" title="Account Info">
            <Row className={inboxCls}>
                <Button xs={3} className="popover-container">
                    <i className="material-icons">message</i>
                    &nbsp;no new messages
                </Button>
            </Row>
        </Popover>
    );

    const accountVisibilityCls = `account-dropdown ${showAccount ? "visible" : 'hidden'}`;

    const accountOptionsPopover = (
        <Popover id="popover-account" title="Account Info">
            <Row className={accountVisibilityCls}>
                <Col xs={12} className="popover-container">
                    <Link to={{pathname: '/settings'}} onClick={() => {setShowAccount(show => !show);setPageTitle("Settings")}}>
                        <Button>
                            <i className="material-icons">language</i>
                            <span>&nbsp;Language</span>
                        </Button>
                    </Link>
                    <Link to={{pathname: '/settings'}} onClick={() => {setShowAccount(show => !show);setPageTitle("Settings")}}>
                        <Button>
                            <i className="material-icons">dark_mode</i>
                            <span>&nbsp;Dark Theme</span>
                        </Button>
                    </Link>
                    <hr />
                    {isAuth && <Fragment>
                        <Link to={{pathname: '/profile?id='+uid}} onClick={() => {setShowAccount(show => !show); setPageTitle("Profile")}}>
                            <Button>
                                <i className="material-icons">person</i>
                                <span>&nbsp;Profile</span>
                            </Button>
                        </Link>
                        <Link to={{pathname: '/settings'}} onClick={() => {setShowAccount(show => !show);setPageTitle("Settings")}}>
                            <Button>
                                <i className="material-icons">settings</i>
                                <span>&nbsp;Settings</span>
                            </Button>
                        </Link>
                        <hr />
                    </Fragment>}
                    <Link to={{pathname: '/'}}>
                        {isAuth ? <Button onClick={signUserOut} color="error">
                            <i className="material-icons">logout</i>
                            <span>&nbsp;Logout</span>
                        </Button>
                        :<Button onClick={signInWithGoogle}>
                            <i className="material-icons">login</i>
                            <span>&nbsp;Log In</span>
                        </Button>}
                    </Link>
                </Col>
            </Row>
        </Popover>
    );

    const navBar = useMemo(() =>{
        return (
            <Container>
                <Row>
                    <Col xs={5} sm={4} md={3} lg={2} className="login-container-left">
                        <Link className="white" to={{pathname: '/'}}>
                            <Button onClick={() =>{resetAllPopovers();setPageTitle("Home")}}>
                                <i className="material-icons">home</i>
                            </Button>
                        </Link>
                        <Link className="white" to={{pathname: '/'}}>
                            <Button onClick={() =>{resetAllPopovers();setPageTitle("Home")}}>
                                Browse
                            </Button>
                        </Link>
                        <OverlayTrigger trigger="click" placement="bottom-start" show={showNav} overlay={navPopover}>
                            <Button onClick={() =>{resetAllPopovers("nav");setShowNav(show => !show)}}>
                                <i className="material-icons">format_list_bulleted</i>
                            </Button>
                        </OverlayTrigger>
                    </Col>
                    {window.innerWidth > 700 ? <Col className="center title">
                        <h1 style={{display:"inline-block",fontSize:"40px",fontFamily:"roboto",paddingTop:"10px"}}>
                            <a href="/" style={{color:"black", textDecoration: "none"}}>
                                {pageTitle}
                            </a>
                        </h1>
                    </Col> : <Col />}
                    <Col xs={6} sm={4} md={3} lg={2} className="login-container-right">
                        <OverlayTrigger trigger="click" placement="bottom-end" show={showSearch} overlay={searchPopover}>
                            <Button  onClick={() => {resetAllPopovers("search");setShowSearch(show => !show)}}>
                                <i className="material-icons">search</i>
                            </Button>
                        </OverlayTrigger>
                        {isAuth && 
                        <OverlayTrigger trigger="focus" placement="bottom-end" show={showNotifications} overlay={notificationPopover}>
                            <Button  onClick={() => {resetAllPopovers("notifications");setShowNotifications(show => !show)}}>
                                <i className="material-icons">notifications</i>
                            </Button>
                        </OverlayTrigger>}
                        {isAuth && 
                        <OverlayTrigger trigger="focus" placement="bottom-end" show={showInbox} overlay={inboxPopover}>
                            <Button onClick={() => {resetAllPopovers("inbox");setShowInbox(show => !show)}}>
                                <i className="material-icons">inbox</i>
                            </Button>
                        </OverlayTrigger>}
                        {!isAuth && 
                        <Fragment>
                            <Button variant='outlined' size="medium" onClick={signInWithGoogle}  style={{textTransform: 'none', padding:"5px",margin:"5px"}}>Log In</Button>
                            <Button variant='contained' size="medium" onClick={signInWithGoogle}  style={{textTransform: 'none', padding:"5px",margin:"5px"}}>Sign Up</Button>
                        </Fragment>}
                        <OverlayTrigger trigger="click" placement="bottom-end" show={showAccount} overlay={accountOptionsPopover}>
                            <Button onClick={() => {resetAllPopovers("account");setShowAccount(show => !show)}}>
                                {isAuth ? 
                                <div className="account-profile" style={{backgroundImage: `url(${profilePic})`}} />
                                : <i className="material-icons">manage_accounts</i>}
                            </Button>
                        </OverlayTrigger>
                    </Col>
                </Row>
            </Container>
        );
    }, [profilePic, isAuth, showAccount, showInbox, showNav, showNotifications, showSearch]);

    return (
        <nav>
            <header className="App-header">
                {navBar}
            </header>
        </nav>
    );
}

export default Header;