import { lazy, Fragment, useEffect, useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import './Header.scss';
import { getIp, getUserInfo, setUserLogin, setUserInfo, getProfilePicture } from '../../Data/Services/userInfo.js';
import { pageTitles } from '../../Data/Constants';
import Companies from '../../Data/Constants/Companies.json';


import { Col, Container, OverlayTrigger, Popover, Row } from 'react-bootstrap';
import defaultProfile from '../../Data/Images/default-profile.jpg';

import { auth, facebookProvider, googleProvider, twitterProvider, yahooProvider } from '../../firebase-config';
import { sendPasswordResetEmail, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { useNavigate }   from 'react-router-dom';

import { Button, TextField } from '@mui/material';

import { useTranslation } from "react-i18next";

import SelectModal from '../Body/Posts/Post/SelectModal';

import Donate from "../Donate";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const LoginModal = lazy(() => import('../Header/Login/LoginModal'));

const SearchBar = ({posts, showSearch, t, popped}) => {
    const [searchValue, setSearchValue] = useState("");

    const searchFilter = useMemo(() => {
        let cache = {}
        let result = posts.map((post) => {
            const name = post.author.name.toLowerCase();

            if (!cache[name] && name.includes(searchValue.toLowerCase())){
                cache[name] = true;
                return (
                    <OverlayTrigger key={post?.id} trigger="focus" overlay={<Popover>User Info</Popover>} placement="left">
                        <a href={"/profile?id="+post?.author?.id} targe="blank" key={"search-"+post?.id}>{post?.author.name}</a>
                    </OverlayTrigger>
                );
            } 
            return;
        });

        result = [...result, posts.map((post) => {
            const price = (<Popover>${post?.price}</Popover>);
            const title = post.title.toLowerCase()
            
            if (title.includes(searchValue.toLowerCase())) {
                return (
                    <OverlayTrigger key={post?.id}  trigger="hover" overlay={price} placement="left">
                        <div className="post-link" key={"search-"+post?.id} onClick={(e)=>{e.stopPropagation();setOpenPost({show:true,post:post})}}>{post.title}</div>
                        {/* <a href={"/singlePost?id="+post.id} targe="blank" key={"search-"+post?.id}>{post.title}</a> */}
                    </OverlayTrigger>
                );
            }
            return;
        })]

        result = [...result, ...Object.keys(Companies).map((company) => {
            let val = [];
            // if (company.toLowerCase().includes(searchValue.toLowerCase())){
            //     val.push((<div>{company}</div>))
            // }
            Companies[company].forEach((bali) => {
                // if (typeof bali === 'string' && bali.toLowerCase().includes(searchValue.toLowerCase())){
                //     val.push((<div>{bali+": "+company}</div>))
                // } else 
                if (bali !== 'string' && (bali?.blade?.toLowerCase().includes(searchValue.toLowerCase()) || company.toLowerCase().includes(searchValue.toLowerCase()))) {
                    const price = (<Popover>${bali?.price}</Popover>);
                    val.push((
                        <OverlayTrigger key={bali?.url + bali?.blade} trigger="hover" overlay={price} placement="left">
                            <a href={bali?.url} target="blank">{bali?.blade+": "+company}</a>
                        </OverlayTrigger>
                    ))
                }
            })

            return val;
        })]
        result = result.filter(element => {
            if (typeof element === "object" && element.length > 0) {
                element = element.filter(ele => ele !== undefined && ele.length !== 0)
            }
            
            return element !== undefined && element.length !== 0;
        });

        return result.length > 0 ? result : "No Results Found";
    }, [searchValue])
    
    const searchCls = `account-dropdown ${showSearch ? "visible" : 'hidden'}`;
    const searchAbility = (event) => {
        let newValue = event.target.value;
        setSearchValue(newValue);
    }
    const [openPost, setOpenPost] = useState({show:false, posts: posts});

    const resultOfSearch = (
    <div className="search-results-container">
        {searchFilter}
    </div>);
  
    return (
        <Fragment>
            <SelectModal t={t} 
                item={openPost.post} 
                openSelectModal={openPost.show} 
                setOpenSelectModal={setOpenPost} />
            <Row className={searchCls}>
                <Col xs={12} className="popover-container">
                    <OverlayTrigger show={searchValue !== "" && searchFilter.length > 0 && !popped } overlay={<Popover>{resultOfSearch}</Popover>} placement='bottom'>
                        <TextField autoComplete="off" fullWidth label={t("Search")} color="" type="search" defaultValue={searchValue} onClick={(event)=>event.stopPropagation()} onChange={searchAbility} />
                    </OverlayTrigger>
                </Col> 
            </Row>
            {searchValue !== "" && searchFilter.length > 0 && popped && resultOfSearch}
        </Fragment>
    );
};

const AccountOptions = ({uid, isAuth, resetAllPopovers, signUserOut, showAccount, setOpenLoginModal, setNewAccount, setShowAccount, setPageTitle, t}) => {
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
                <Button onClick={(e) => {e.stopPropagation();setShowLanguages(false)}}>
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
                <Button onClick={(e) => {e.stopPropagation();setShowLanguages(true);}}>
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
                    :<Button onClick={() => {setNewAccount(false);setOpenLoginModal(true)}}>
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
    const location = useLocation();
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
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [newAccount, setNewAccount] = useState(true);
    const [provider, setProvider] = useState(googleProvider);
    const [openLoginModal, setOpenLoginModal] = useState(false);

    useEffect(() => {
      const handleWindowResize = () => {
        setWindowWidth(window.innerWidth)
      };
  
      window.addEventListener('resize', handleWindowResize);
  
      return () => {
        window.removeEventListener('resize', handleWindowResize);
      };
    },[]);

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

    const saveInitialUserValues = (result) => {
        getUserInfo(result?.user?.uid).then((userInfo) => {
            if (!userInfo?.firstName || !userInfo?.lastName || !userInfo?.displayName || !userInfo?.ip) {
                getIp().then((ip)=>{
                    const info = {
                        ...userInfo,
                        ip: ip,
                        firstName: result?._tokenResponse?.firstName,
                        lastName: result?._tokenResponse?.lastName,
                        displayName: result?.user?.displayName,
                        posts: []
                    };
                    setUserInfo(info).then((res) => console.log("saved: ", res)).catch((err)=> console.log("cant save: ", err))
                }).catch((er)=>er)
            }
        })
    }

    const resetEmailPassword = (userEmail) => {
        sendPasswordResetEmail(auth, userEmail).then(() => {
            alert(t('Password reset email was successfully sent!'), userEmail);
            console.log(userEmail)
        }).catch((error) => {
            alert(t('Password reset email failed! '), error);
        });
    }

    const signInWithGoogle = () => {
        setProvider(googleProvider);
        signInWithPopup(auth, googleProvider).then((result) => {
            setIsAuth(true);
            setUid(result?.user?.uid);
            setUserLogin(result.user);

            localStorage.setItem("isAuth", true);
            localStorage.setItem("uid", result?.user?.uid);
            localStorage.setItem("displayName", result?.user?.displayName);
            return result;
        }).then((result) => {
            saveInitialUserValues(result)
        }).catch((err) => {
            console.error("google failed to sign in: ", err)
        })
    }

    const signInWithTwitter = () => {
        setProvider(twitterProvider);
        signInWithPopup(auth, twitterProvider).then((result) => {
            setIsAuth(true);
            setUid(result?.user?.uid);
            setUserLogin(result.user);

            localStorage.setItem("isAuth", true);
            localStorage.setItem("uid", result?.user?.uid);
            localStorage.setItem("displayName", result?.user?.displayName);
            return result;
        }).then((result) => {
            saveInitialUserValues(result)
        }).catch((err) => {
            console.error(err)
        })
    }

    const signInWithYahoo = () => {
        setProvider(yahooProvider);
        signInWithPopup(auth, yahooProvider).then((result) => {
            setIsAuth(true);
            setUid(result?.user?.uid);
            setUserLogin(result.user);

            localStorage.setItem("isAuth", true);
            localStorage.setItem("uid", result?.user?.uid);
            localStorage.setItem("displayName", result?.user?.displayName);

            return result;
        }).then((result) => {
            saveInitialUserValues(result)
        }).catch((err) => {
            console.error(err)
        })
    }

    const signInWithEmail = (email, password, newAccount, setValidate) => {
        const loginPromise = newAccount ? createUserWithEmailAndPassword(auth, email, password) : signInWithEmailAndPassword(auth, email, password);

        loginPromise.then((result) => {
            setIsAuth(true);
            setUid(result?.user?.uid);
            setUserLogin(result.user);
            
            localStorage.setItem("isAuth", true);
            localStorage.setItem("uid", result?.user?.uid);
            localStorage.setItem("displayName", email);

            return result;
        }).then((result) => {
            setOpenLoginModal(false);
            saveInitialUserValues(result)
        }).catch((err) => {
            let errorMessage;

            if (newAccount) {
                if (err.code === "auth/weak-password") {
                    errorMessage = "Weak passwork please make sure it's at least 6 characters.";
                }else{  
                    errorMessage = "Login already exists, can not create a new account with that email.";
                }
            } else{
                errorMessage = "Email or Password is incorrect, please try again.";
            }

            if (err.code === "auth/too-many-requests"){
                errorMessage = "Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.";
            }

            setValidate(cur => {return {...cur, error: errorMessage}})
            console.error(err)
        })
    }

    const signInWithFacebook = () => {
        setProvider(facebookProvider);
        signInWithPopup(auth, facebookProvider).then((result) => {
            // The signed-in user info.
            // const user = result.user;
        
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            // const credential = FacebookAuthProvider.credentialFromResult(result);
            // const accessToken = credential.accessToken;
        
            // IdP data available using getAdditionalUserInfo(result)
            // ...
          }).catch((error) => {
            // Handle Errors here.
            // const errorCode = error.code;
            // const errorMessage = error.message;
            // The email of the user's account used.
            // const email = error.customData.email;
            // The AuthCredential type that was used.
            console.log(error);
            // const credential = FacebookAuthProvider.credentialFromError(error);
        
            // ...
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
            <SearchBar posts={posts} showSearch={showSearch} t={t} popped={true} />
        </Popover>
    );

    // const notificationCls = `account-dropdown ${showNotifications ? "visible" : 'hidden'}`;

    // const notificationPopover = (
    //     <Popover id="popover-notications">
    //         <Row className={notificationCls}>
    //             <Button xs={3} className="popover-container">
    //                 <i className="material-icons">highlight</i>
    //                 &nbsp;{t("no new alerts")}
    //             </Button>
    //         </Row>
    //     </Popover>
    // );

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
                signUserOut={signUserOut} 
                setOpenLoginModal={setOpenLoginModal}
                setNewAccount={setNewAccount}
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
                <LoginModal t={t} openLoginModal={openLoginModal} setOpenLoginModal={setOpenLoginModal} newAccount={newAccount} setNewAccount={setNewAccount} signInWithEmail={signInWithEmail} signInWithGoogle={signInWithGoogle} signInWithFacebook={signInWithFacebook} signInWithTwitter={signInWithTwitter} signInWithYahoo={signInWithYahoo} resetEmailPassword={resetEmailPassword} />

                <PayPalScriptProvider options={initialOptions}>
                    <Donate showDonate={showDonate} setShowDonate={setShowDonate} />
                </PayPalScriptProvider>
                <Row className="between" onClick={() => {resetAllPopovers()}}>
                    <Col xs={5} sm={7} md={9} className="login-container-left">
                        <Button onClick={() =>{resetAllPopovers();setPageTitle("Home");window.location.href = "/"}}>
                            <i className="material-icons">home</i>
                        </Button>
                        {windowWidth < 800 ? <OverlayTrigger trigger="click" placement="bottom-start" show={showNav} overlay={navPopover}>
                            <Button onClick={(e) =>{e.stopPropagation();resetAllPopovers("nav");setShowNav(show => !show)}}>
                                <i className="material-icons">format_list_bulleted</i>
                            </Button>
                        </OverlayTrigger>:
                        <>
                            {isAuth &&<Link className="white nav-bar-item" to={{pathname: '/createPost'}}>
                                <Button onClick={() =>{resetAllPopovers("create");setPageTitle("Create")}}>
                                    <i className="material-icons">add</i>
                                    &nbsp;{t("Create")}
                                </Button>
                            </Link>}
                            <Link className="white nav-bar-item" to={{pathname: '/contactUs'}}>
                                <Button onClick={() =>{resetAllPopovers("contact");setPageTitle("Contact")}}>
                                    <i className="material-icons">contact_support</i>
                                    &nbsp;{t("Contact")}
                                </Button>
                            </Link>
                            <Link className="white nav-bar-item" to={{pathname: '/aboutUs'}}>
                                <Button onClick={() =>{resetAllPopovers("about");setPageTitle("About")}}>
                                    <i className="material-icons">face</i>
                                    &nbsp;{t("About Us")}
                                </Button>
                            </Link>
                            <Button onClick={() =>{resetAllPopovers();setShowDonate(cur => !cur)}}>
                                <i className="material-icons">payments</i>
                                &nbsp;{t("Donate")}
                            </Button>
                        </>}
                        {location.pathname==='/' ? 
                            <Button onClick={() =>{resetAllPopovers();setShowFilter(cur => !cur)}}>
                                {windowWidth>800 && <i className="material-icons">manage_search</i>}
                                {t("Filter")}
                            </Button>
                            : <Button href="/" onClick={() =>{resetAllPopovers();setPageTitle("Home")}}>
                                {t("Browse")}
                        </Button>}
                    </Col>
                    {/* {window.innerWidth > 800 ? <Col className="center title">
                        <h1 style={{display:"inline-block",fontSize:"40px",fontFamily:"roboto",paddingTop:"10px"}}>
                            <a href="/" style={{color:"black", textDecoration: "none"}}>
                                {t(pageTitle)}
                            </a>
                        </h1>
                    </Col> : <Col />} */}
                    <Col xs={6} sm={4} md={2} className="login-container-right">
                        {windowWidth < 1100 ? <OverlayTrigger trigger="click" placement="bottom-end" show={showSearch} overlay={searchPopover}>
                             <Button  onClick={(e) => {e.stopPropagation();resetAllPopovers("search");setShowSearch(show => !show)}}>
                                <i className="material-icons">search</i>
                            </Button>
                        </OverlayTrigger> :
                        <SearchBar posts={posts} showSearch={true} t={t} popped={false} />}
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
                            <Button variant='outlined' size="medium" onClick={() => {setNewAccount(false);setOpenLoginModal(true)}} style={{textTransform: 'none', padding:"5px",margin:"5px"}}>{t("Login")}</Button>
                            <Button variant='contained' size="medium" onClick={() => {setNewAccount(true);setOpenLoginModal(true)}} style={{textTransform: 'none', padding:"5px",margin:"5px"}}>{t("Signup")}</Button>
                        </Fragment>}
                        <OverlayTrigger trigger="click" placement="bottom-end" show={showAccount} overlay={accountOptionsPopover}>
                            <Button onClick={(e) => {e.stopPropagation();resetAllPopovers("account");setShowAccount(show => !show) }}>
                                {isAuth ? 
                                <div className="account-profile" style={{backgroundImage: `url(${profilePic})`}} />
                                : <i className="material-icons">manage_accounts</i>}
                            </Button>
                        </OverlayTrigger>
                    </Col>
                </Row>
            </Container>
        );
    }, [profilePic, isAuth, showAccount, showDonate, showInbox, showNav, showNotifications, showSearch, pageTitle, windowWidth, openLoginModal, newAccount, posts]);

    return (
        <nav>
            <header className="App-header">
                {navBar}
            </header>
        </nav>
    );
}

export default Header;