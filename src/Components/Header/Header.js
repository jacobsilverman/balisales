import { Fragment, useEffect, useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import './Header.scss';
import { getUserInfo, setUserLogin, setUserInfo, getProfilePicture } from '../../Data/Services/userInfo.js';
import { pageTitles } from '../../Data/Constants';
import Companies from '../../Data/Constants/Companies.json';

import { Col, Container, OverlayTrigger, Popover, Row } from 'react-bootstrap';
import defaultProfile from '../../Data/Images/default-profile.jpg';

import { auth, provider } from '../../firebase-config';
import { signInWithPopup, signOut } from 'firebase/auth';
import { useNavigate }   from 'react-router-dom';

import { Button, TextField } from '@mui/material';

import { useTranslation } from "react-i18next";

import SelectModal from '../Body/Posts/Post/SelectModal';

import Donate from "../Donate";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const SearchBar = ({posts, showSearch, t}) => {
    const [searchValue, setSearchValue] = useState("");

    const searchFilter = useMemo(() => {
        let cache = {}
        let result = posts.map((post) => {
            const price = (<Popover>${post?.price}</Popover>);
            const name = post.author.name.toLowerCase();
            if (!cache[name] && name.includes(searchValue.toLowerCase())){
                cache[name] = true;
                return (
                    <OverlayTrigger  trigger="hover" overlay={<Popover>User Info</Popover>} placement="left">
                        <a href={"/profile?id="+post?.author?.id} targe="blank" key={"search-"+post?.id}>{post?.author.name}</a>
                    </OverlayTrigger>
                );
            } else if (post.title.toLowerCase().includes(searchValue)) {
                return (
                    <OverlayTrigger  trigger="hover" overlay={price} placement="left">
                        <a className="post-link" key={"search-"+post?.id} onClick={()=>setOpenPost({open:true,post:post})}>{post.title}</a>
                        {/* <a href={"/singlePost?id="+post.id} targe="blank" key={"search-"+post?.id}>{post.title}</a> */}
                    </OverlayTrigger>
                );
            }
            return;
        });

        result = [...result, ...Object.keys(Companies).map((company) => {
            let val = [];
            if (company.toLowerCase().includes(searchValue.toLowerCase())){
                val.push((<div>{company}</div>))
            }
            Companies[company].forEach((bali) => {
                if (typeof bali === 'string' && bali.toLowerCase().includes(searchValue.toLowerCase())){
                    val.push((<div>{bali+": "+company}</div>))
                } else if (bali !== 'string' && (bali?.blade?.toLowerCase().includes(searchValue.toLowerCase()) || company.toLowerCase().includes(searchValue.toLowerCase()))) {
                    const price = (<Popover>${bali?.price}</Popover>);
                    val.push((
                        <OverlayTrigger trigger="hover" overlay={price} placement="left">
                            <a href={bali?.url} target="blank">{bali?.blade+": "+company}</a>
                        </OverlayTrigger>
                    ))
                }
            })

            return val;
        })]
        result = result.filter(element => element !== undefined && element.length !== 0);

        return result.length > 0 ? result : "No Results Found";
    }, [searchValue])
    
    const searchCls = `account-dropdown ${showSearch ? "visible" : 'hidden'}`;
    const searchAbility = (event) => {
        let newValue = event.target.value;
        setSearchValue(newValue);
    }
    const [openPost, setOpenPost] = useState(false);
  
    return (
        <Fragment>
            <SelectModal t={t} 
                item={openPost.post} 
                openSelectModal={openPost.open} 
                setOpenSelectModal={setOpenPost} />
            <Row className={searchCls}>
                <Col xs={12} className="popover-container">
                    <TextField autoComplete="off" fullWidth label={t("Search")} color="" type="search" defaultValue={searchValue} onChange={searchAbility} />
                </Col>
            </Row>
            {searchValue !== "" && searchFilter.length > 0 && 
            <div className="search-results-container">
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
                    <span>&nbsp;{t("Language")}&nbsp;</span>
                    <i className="material-icons">language</i>
                </Button>
                <hr />
                <Button onClick={() => changeLanguage("en")}>
                    English
                </Button>
                <Button onClick={() => changeLanguage("es")}>
                    Español
                </Button>
                <Button onClick={() => changeLanguage("fr")}>
                    Français
                </Button>
                <Button onClick={() => changeLanguage("de")}>
                    Deutsch
                </Button>
                <Button onClick={() => changeLanguage("id")}>
                    Indonesia
                </Button>
                <Button onClick={() => changeLanguage("is")}>
                    íslenskur
                </Button>
                <Button onClick={() => changeLanguage("it")}>
                    Italiano
                </Button>
                <Button onClick={() => changeLanguage("pl")}>
                    Polski
                </Button>
                <Button onClick={() => changeLanguage("pt")}>
                    Português
                </Button>
                <Button onClick={() => changeLanguage("tr")}>
                    Türkçe
                </Button>
                <Button onClick={() => changeLanguage("vi")}>
                    Tiếng Việt
                </Button>
                <Button onClick={() => changeLanguage("ru")}>
                    Русский
                </Button>
                <Button onClick={() => changeLanguage("iw")}>
                    עִברִית
                </Button>
                <Button onClick={() => changeLanguage("ja")}>
                    日本
                </Button>
                <Button onClick={() => changeLanguage("zh")}>
                    中国人
                </Button>
                <Button onClick={() => changeLanguage("ko")}>
                    한국인
                </Button>
                <Button onClick={() => changeLanguage("hi")}>
                    हिंदी
                </Button>
                <Button onClick={() => changeLanguage("ar")}>
                    عربي
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
    
    const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth")==="true");
    const [showAccount, setShowAccount] = useState(false);
    const [showDonate, setShowDonate] = useState(false);
    const [showInbox, setShowInbox] = useState(false);
    const [showNav, setShowNav] = useState(false);
    const [showNotifications, setShowNotifications] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [profilePic, setProfilePic] = useState(localStorage.getItem("profile-picture-"+localStorage.getItem("uid")));
    const [uid, setUid] = useState(localStorage.getItem("uid"));
    const [pageTitle, setPageTitle] = useState(t(pageTitles[window.location.pathname]));

    const location = useLocation();

    useEffect(() => {
        getProfilePicture(uid).then((result) => {
            setProfilePic(result);
            localStorage.setItem("profile-picture-"+uid, result);
        }).catch(() => {
            setProfilePic(defaultProfile);
            localStorage.setItem("profile-picture-"+uid, defaultProfile);
        });
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
            localStorage.setItem("isAuth", false);
            setProfilePic(null);
            setUid("");
        })
    }

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            setIsAuth(true);
            setUid(result?.user?.uid);
            setUserLogin(result.user);

            localStorage.setItem("isAuth", true);
            localStorage.setItem("uid", result?.user?.uid);
            localStorage.setItem("displayName", result?.user?.displayName);

            return result;
        }).then((result) => {
            getUserInfo(result?.user?.uid).then((userInfo) => {
                if (!userInfo?.firstName || !userInfo?.lastName || !userInfo?.displayName) {
                    setUserInfo({...userInfo, firstName: result?._tokenResponse?.firstName, lastName: result?._tokenResponse?.lastName, displayName: result?.user?.displayName, posts:[]})
                }
            })
        });
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
        <Popover id="popover-nav">
            <Row className={navCls}>
                <Col xs={12} className="popover-container">
                    {isAuth && <><Link className="white" to={{pathname: '/createPost'}}>
                        <Button onClick={() =>{resetAllPopovers("create");setPageTitle("Create")}}>
                            <i className="material-icons">add</i>
                            &nbsp;{t("Create")}
                        </Button>
                    </Link> 
                    <hr /></>}
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
                    <Button onClick={() =>{resetAllPopovers();setShowDonate(cur => !cur)}}>
                        <i className="material-icons">payments</i>
                        &nbsp;{t("Donate")}
                    </Button>
                </Col>
            </Row>
        </Popover>
    );

    const searchPopover = (
        <Popover id="popover-search">
            <SearchBar posts={posts} showSearch={showSearch} t={t} />
        </Popover>
    );

    const notificationCls = `account-dropdown ${showNotifications ? "visible" : 'hidden'}`;

    const notificationPopover = (
        <Popover id="popover-notications">
            <Row className={notificationCls}>
                <Button xs={3} className="popover-container">
                    <i className="material-icons">highlight</i>
                    &nbsp;{t("no new alerts")}
                </Button>
            </Row>
        </Popover>
    );

    // const inboxCls = `account-dropdown ${showInbox ? "visible" : 'hidden'}`;

    // const inboxPopover = (
    //     <Popover id="popover-inbox" title="Account Info">
    //         <Row className={inboxCls}>
    //             <Button xs={3} className="popover-container">
    //                 <i className="material-icons">message</i>
    //                 &nbsp;{t("no new messages")}
    //             </Button>
    //         </Row>
    //     </Popover>
    // );

    const accountOptionsPopover = (
        <Popover id="popover-account">
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
    const initialOptions = {
        "client-id": "AcDvZSxUTgqvgZJPOiePLTCf8ssTgSE3EMUVK_n_tibgu6lifFz9-6ECtEeUMOIq2F-wMzjlZ47dmcaS",
        currency: "USD",
        intent: "capture",
    };

    const navBar = useMemo(() => {
        return (
            <Container>
                <PayPalScriptProvider options={initialOptions}>
                    <Donate showDonate={showDonate} setShowDonate={setShowDonate} />
                </PayPalScriptProvider>
                <Row>
                    <Col xs={3} sm={3} md={3} lg={2} className="login-container-left">
                        <Button href="/" onClick={() =>{resetAllPopovers();setPageTitle("Home")}}>
                            <i className="material-icons">home</i>
                        </Button>
                        {location.pathname==='/' ? 
                            <Button onClick={() =>{resetAllPopovers();setShowFilter(cur => !cur)}}>
                                {t("Filter")}
                            </Button>
                            : <Button href="/" onClick={() =>{resetAllPopovers();setPageTitle("Home")}}>
                                {t("Browse")}
                            </Button>}
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
                        {/* {isAuth && 
                        <OverlayTrigger trigger="focus" placement="bottom-end" show={showNotifications} overlay={notificationPopover}>
                            <Button  onClick={() => {resetAllPopovers("notifications");setShowNotifications(show => !show)}}>
                                <i className="material-icons">notifications</i>
                            </Button>
                        </OverlayTrigger>} */}
                        {/* {isAuth && 
                        <OverlayTrigger trigger="focus" placement="bottom-end" show={showInbox} overlay={inboxPopover}>
                            <Button onClick={() => {resetAllPopovers("inbox");setShowInbox(show => !show)}}>
                                <i className="material-icons">inbox</i>
                            </Button>
                        </OverlayTrigger>} */}
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
    }, [profilePic, isAuth, showAccount, showDonate, showInbox, showNav, showNotifications, showSearch, pageTitle]);

    return (
        <nav>
            <header className="App-header">
                {navBar}
            </header>
        </nav>
    );
}

export default Header;