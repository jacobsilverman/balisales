import { Fragment, useEffect, useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import './Header.scss';
import { setUserLogin, getProfilePicture } from '../../Data/Services/userInfo.js';
import { pageTitles } from '../../Data/Constants';
import Companies from '../../Data/Constants/Companies.json';

import { Col, Container, OverlayTrigger, Popover, Row } from 'react-bootstrap';
import defaultProfile from '../../Data/Images/default-profile.jpg';

import { auth, provider } from '../../firebase-config';
import { signInWithPopup, signOut } from 'firebase/auth';
import { useNavigate }   from 'react-router-dom';

import { Button, TextField } from '@mui/material';

import { useTranslation } from "react-i18next";

const SearchBar = ({posts, showSearch, t}) => {
    const [searchValue, setSearchValue] = useState("");

    const searchFilter = useMemo(() => {
        let cache = {}
        let result = posts.map((post) => {
            if (!cache[post.author.name.toLowerCase()] && post.author.name.toLowerCase().includes(searchValue.toLowerCase())){
                cache[post.author.name.toLowerCase()] = true;
                return (<a href={"/profile?id="+post?.author?.id} key={"search-"+post?.id}>{post?.author.name}</a>)
            } else if (post.title.toLowerCase().includes(searchValue)) {
                return (<a href={"/singlePost?id="+post.id}  key={"search-"+post?.id}>{post.title}</a>);
            }
        });

        result = [...result, ...Object.keys(Companies).map((company) => {
            let val = [];
            if (company.toLowerCase().includes(searchValue.toLowerCase())){
                val.push((<div>{company}</div>))
            }
            Companies[company].forEach((bali) => {
                if (bali.toLowerCase().includes(searchValue.toLowerCase())){
                    val.push((<div>{bali+": "+company}</div>))
                }
            })
            return val;
        })]

        return result;
    }, [searchValue])
    
    const searchCls = `account-dropdown ${showSearch ? "visible" : 'hidden'}`;
    const searchAbility = (event) => {
        let newValue = event.target.value;
        setSearchValue(newValue);
    }
  
    return (
        <Fragment>
            <Row className={searchCls}>
                <Col xs={12} className="popover-container">
                    <TextField autoComplete="off" fullWidth label={t("Search")} color="" type="search" defaultValue={searchValue} onChange={searchAbility} />
                </Col>
            </Row>
            {searchValue !== "" && searchFilter.length > 0 && <div className="search-results-container">
                {searchFilter}
            </div>}
        </Fragment>
    );
};

const AccountOptions = ({uid, isAuth, resetAllPopovers, signInWithGoogle, signUserOut, showAccount, setShowAccount, setPageTitle, t}) => {
    const [showLanguages, setShowLanguages] = useState(false);

    const {i18n} = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
        resetAllPopovers();
    };

    const languageCls = `account-dropdown ${showLanguages ? "visible" : 'hidden'}`;
    const languagePopover = (
        <Row className={languageCls}>
            <Col xs={12} className="popover-language-container">
                <Button onClick={() => setShowLanguages(false)}>
                    <i size="small" className='material-icons'>arrow_back</i>
                    <span>&nbsp;{t("Language")}</span>
                </Button>
                <hr />
                <Button onClick={() => changeLanguage("ar")}>
                    Arabic
                </Button>
                <Button onClick={() => changeLanguage("zh")}>
                    Chinese
                </Button>
                <Button onClick={() => changeLanguage("en")}>
                    English
                </Button>
                <Button onClick={() => changeLanguage("es")}>
                    Español
                </Button>
                <Button onClick={() => changeLanguage("fr")}>
                    French
                </Button>
                <Button onClick={() => changeLanguage("de")}>
                    German
                </Button>
                <Button onClick={() => changeLanguage("iw")}>
                    Hebrew
                </Button>
                <Button onClick={() => changeLanguage("hi")}>
                    Hindi
                </Button>
                <Button onClick={() => changeLanguage("is")}>
                    Icelandic
                </Button>
                <Button onClick={() => changeLanguage("id")}>
                    Indonesian
                </Button>
                <Button onClick={() => changeLanguage("it")}>
                    Italian
                </Button>
                <Button onClick={() => changeLanguage("ja")}>
                    Japanese
                </Button>
                <Button onClick={() => changeLanguage("ko")}>
                    Korean
                </Button>
                <Button onClick={() => changeLanguage("pl")}>
                    Polish
                </Button>
                <Button onClick={() => changeLanguage("pt")}>
                    Portuguese
                </Button>
                <Button onClick={() => changeLanguage("ru")}>
                    Russian
                </Button>
                <Button onClick={() => changeLanguage("tr")}>
                    Turkish
                </Button>
                <Button onClick={() => changeLanguage("vi")}>
                    Vietnamese
                </Button>
            </Col>
         </Row>
    );

    const accountVisibilityCls = `account-dropdown ${showAccount ? "visible" : 'hidden'}`;

    const accountOptionsPopover = (
        <Row className={accountVisibilityCls}>
            <Col xs={12} className="popover-container">
                <Button onClick={() => {setShowLanguages(true);}}>
                    <i className="material-icons">language</i>
                    <span>&nbsp;{t("Language")}</span>
                    <i className="material-icons">arrow_forward</i>
                </Button>
                
                {/* <Link to={{pathname: '/settings'}} onClick={() => {setShowAccount(show => !show);setPageTitle("Settings")}}>
                    <Button>
                        <i className="material-icons">dark_mode</i>
                        <span>&nbsp;Dark Theme</span>
                    </Button>
                </Link> */}
                <hr />
                {isAuth && <Fragment>
                    <Link to={{pathname: '/profile?id='+uid}} onClick={() => {setShowAccount(show => !show); setPageTitle("Profile")}}>
                        <Button>
                            <i className="material-icons">person</i>
                            <span>&nbsp;{t("Profile")}</span>
                        </Button>
                    </Link>
                    <Link to={{pathname: '/settings'}} onClick={() => {setShowAccount(show => !show);setPageTitle("Settings")}}>
                        <Button>
                            <i className="material-icons">settings</i>
                            <span>&nbsp;{t("Settings")}</span>
                        </Button>
                    </Link>
                    <hr />
                </Fragment>}
                <Link to={{pathname: '/'}}>
                    {isAuth ? <Button onClick={signUserOut} color="error">
                        <i className="material-icons">logout</i>
                        <span>&nbsp;{t("Logout")}</span>
                    </Button>
                    :<Button onClick={signInWithGoogle}>
                        <i className="material-icons">login</i>
                        <span>&nbsp;{t("Login")}</span>
                    </Button>}
                </Link>
            </Col>
        </Row>
    );

    return (showLanguages) ? languagePopover : accountOptionsPopover;
}

const Header = ({posts, setShowFilter}) => {
    let navigate = useNavigate();
    const { t } = useTranslation();
    
    const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
    const [showAccount, setShowAccount] = useState(false);
    const [showInbox, setShowInbox] = useState(false);
    const [showNav, setShowNav] = useState(false);
    const [showNotifications, setShowNotifications] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [profilePic, setProfilePic] = useState(localStorage.getItem("profile-picture-"+localStorage.getItem("uid")));
    const [uid, setUid] = useState(localStorage.getItem("uid"));
    const [pageTitle, setPageTitle] = useState(t(pageTitles[window.location.pathname]));

    const location = useLocation();

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
                            &nbsp;{t("Create")}
                        </Button>
                    </Link>
                    <hr />
                    <Link className="white" to={{pathname: '/contactUs'}}>
                        <Button onClick={() =>{resetAllPopovers("contact");setPageTitle("Contact")}}>
                            <i className="material-icons">contact_support</i>
                            &nbsp;{t("Contact Support")}
                        </Button>
                    </Link>
                    <Link className="white" to={{pathname: '/aboutUs'}}>
                        <Button onClick={() =>{resetAllPopovers("about");setPageTitle("About")}}>
                            <i className="material-icons">face</i>
                            &nbsp;{t("About Us")}
                        </Button>
                    </Link>
                </Col>
            </Row>
        </Popover>
    );

    const searchPopover = (
        <Popover id="popover-search" title="Account Info">
            <SearchBar posts={posts} showSearch={showSearch} t={t} />
        </Popover>
    );

    const notificationCls = `account-dropdown ${showNotifications ? "visible" : 'hidden'}`;

    const notificationPopover = (
        <Popover id="popover-notications" title="Account Info">
            <Row className={notificationCls}>
                <Button xs={3} className="popover-container">
                    <i className="material-icons">highlight</i>
                    &nbsp;{t("no new alerts")}
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
                    &nbsp;{t("no new messages")}
                </Button>
            </Row>
        </Popover>
    );

    const accountOptionsPopover = (
        <Popover id="popover-account" title="Account Info">
            <AccountOptions 
                uid={uid} 
                isAuth={isAuth} 
                resetAllPopovers={resetAllPopovers}
                signInWithGoogle={signInWithGoogle} 
                signUserOut={signUserOut} 
                showAccount={showAccount} 
                setShowAccount={setShowAccount}
                setPageTitle={setPageTitle}
                t={t} />
        </Popover>
    );

    const navBar = useMemo(() =>{
        return (
            <Container>
                <Row>
                    <Col xs={3} sm={3} md={3} lg={2} className="login-container-left">
                        <Link className="white" to={{pathname: '/'}}>
                            <Button onClick={() =>{resetAllPopovers();setPageTitle("Home")}}>
                                <i className="material-icons">home</i>
                            </Button>
                        </Link>
                        {location.pathname==='/' ? 
                        //  <Link className="white">
                            <Button onClick={() =>{resetAllPopovers();setShowFilter(cur => !cur)}}>
                                {t("Filter")}
                            </Button>
                        // </Link>
                        : <Link className="white" to={{pathname: '/'}}>
                            <Button onClick={() =>{resetAllPopovers();setPageTitle("Home")}}>
                                {t("Browse")}
                            </Button>
                        </Link>}
                        <OverlayTrigger trigger="click" placement="bottom-start" show={showNav} overlay={navPopover}>
                            <Button onClick={() =>{resetAllPopovers("nav");setShowNav(show => !show)}}>
                                <i className="material-icons">format_list_bulleted</i>
                            </Button>
                        </OverlayTrigger>
                    </Col>
                    {window.innerWidth > 800 ? <Col className="center title">
                        <h1 style={{display:"inline-block",fontSize:"40px",fontFamily:"roboto",paddingTop:"10px"}}>
                            <a href="/" style={{color:"black", textDecoration: "none"}}>
                                {t(pageTitle)}
                            </a>
                        </h1>
                    </Col> : <Col />}
                    <Col xs={8} sm={5} md={3} lg={2} className="login-container-right">
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
                            <Button variant='outlined' size="medium" onClick={signInWithGoogle}  style={{textTransform: 'none', padding:"5px",margin:"5px"}}>{t("Login")}</Button>
                            <Button variant='contained' size="medium" onClick={signInWithGoogle}  style={{textTransform: 'none', padding:"5px",margin:"5px"}}>{t("Signup")}</Button>
                        </Fragment>}
                        <OverlayTrigger trigger="click" placement="bottom-end" show={showAccount} overlay={accountOptionsPopover}>
                            <Button onClick={() => {resetAllPopovers("account");setShowAccount(show => !show) }}>
                                {isAuth ? 
                                <div className="account-profile" style={{backgroundImage: `url(${profilePic})`}} />
                                : <i className="material-icons">manage_accounts</i>}
                            </Button>
                        </OverlayTrigger>
                    </Col>
                </Row>
            </Container>
        );
    }, [profilePic, isAuth, showAccount, showInbox, showNav, showNotifications, showSearch, pageTitle]);

    return (
        <nav>
            <header className="App-header">
                {navBar}
            </header>
        </nav>
    );
}

export default Header;