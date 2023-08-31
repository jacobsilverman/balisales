import { Button, Modal, TextField } from "@mui/material";
import { Col, Row } from "react-bootstrap";

// import silver_eye from "../../../Data/Images/silver_eye.png";

import "./LoginModal.scss";

import { GoogleLoginButton, InstagramLoginButton, FacebookLoginButton, YahooLoginButton, TwitterLoginButton, MicrosoftLoginButton, AppleLoginButton } from "react-social-login-buttons";
import { useState } from "react";

const LoginModal = ({openLoginModal, setOpenLoginModal, newAccount, setNewAccount, signInWithEmail, 
    signInWithGoogle, signInWithFacebook, signInWithTwitter, signInWithYahoo}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repassword, setRepassword] = useState("");
    const [showAllOptions, setShowAllOptions] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showRepassword, setShowRepassword] = useState(false);
    const [validate, setValidate] = useState({email: true, password: true, repassword: true, error: ""})
    
    const handleEmailValidate = () => {
        if (!email) {
            setValidate(cur => {return{...cur, email: false}})
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            setValidate(cur => {return{...cur, email: false}})
        }else {
            setValidate(cur => {return{...cur, email: true}})
            return true;
        }
        return false;
    }

    const handlePasswordValidate = () => {
        if (!password) {
            setValidate(cur => {return{...cur, password: false}})
        } else {
            setValidate(cur => {return{...cur, password: true}})
            return true;
        }

        return false;
    }

    const handleRepasswordValidate =() => {
        if (!repassword || repassword !== password) {
            setValidate(cur => {return{...cur, repassword: false, error: repassword !== password && "please make sure you retype your password correctly."}})
        } else {
            setValidate(cur => {return{...cur, repassword: true}})
            return true;
        }

        return false;
    }

    const handleEmailChange = (e) => {
        const newVal = e.target.value;
        if (!newVal) {
            setValidate(cur => {return{...cur, email: false}})
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(newVal)) {
            setValidate(cur => {return{...cur, email: false}})
        }else {
            setValidate(cur => {return{...cur, email: true}})
        }
        setEmail(newVal)
    }

    const handlePasswordChange = (e) => {
        const newVal = e.target.value;
        if (!newVal) {
            setValidate(cur => {return{...cur, password: false}})
        } else {
            setValidate(cur => {return{...cur, password: true}})
        }
        setPassword(newVal)
    }

    const handleRepasswordChange = (e) => {
        const newVal = e.target.value;
        if (!newVal) {
            setValidate(cur => {return{...cur, repassword: false}})
        } else {
            setValidate(cur => {return{...cur, repassword: true}})
        }
        setRepassword(newVal)
    }

    const handleContinueButton = () => {
        const emailValid = handleEmailValidate();
        const passValid = handlePasswordValidate();
        const repassValid = newAccount ? handleRepasswordValidate() : true;
        return emailValid && passValid && repassValid && signInWithEmail(email, password, newAccount, setValidate);
    }


    return (
        <Modal open={openLoginModal} onClick={() => setOpenLoginModal(false)}>
            <Row className="login-modal">
                <Col xs={8} className="login-background-edit"  onClick={(e) => e.stopPropagation()}>
                    <Row>
                        <Col className="center">
                            <Button id="select-modal-exit-button" color="error" onClick={() => setOpenLoginModal(false)}>
                                X
                            </Button>
                            <h1>
                                {/* <Row>
                                    <Col xs={4}>
                                        <img src={silver_eye} width="100%" height="100%" />
                                    </Col>
                                    <Col style={{textAlign: 'left'}}> */}
                                        Balisong Sales
                                    {/* </Col>
                                </Row> */}
                            </h1>

                        </Col>
                    </Row>
                    {(!newAccount===true) ?
                    <Row>
                        <Col className="center">
                            <h6>Please Login to Continue</h6>
                        </Col>
                    </Row> :
                    <Row>
                        <Col className="center">
                            <h6>Please Sign up to Continue</h6>
                        </Col>
                    </Row> 
                    }
                    <Row>
                        <Col className="horizontal-center">
                            <TextField className="modal-input" error={!validate.email} label={"Email"} color="" type="url" onChange={handleEmailChange} value={email} />
                        </Col>
                    </Row>
                    <Row>
                        <Col className="horizontal-center relative">
                            <TextField className="modal-input password" error={!validate.password} label={"Password"} color="" type={showPassword ? "" : "password"} onChange={handlePasswordChange} value={password} />
                            <span className="password-eye">
                                <i class="material-icons"  onClick={() => setShowPassword(cur => !cur)}>{(showPassword) ? "visibility_on" : "visibility_off"}</i>
                            </span>
                        </Col>
                    </Row>
                    {newAccount===true &&
                    <Row>
                        <Col className="horizontal-center relative">
                            <TextField className="modal-input password" error={!validate.repassword} label={"Retype Password"} color="" type={showRepassword ? "" : "password"} onChange={handleRepasswordChange} value={repassword} />

                            <span className="password-eye">
                                <i class="material-icons"  onClick={() => setShowRepassword(cur => !cur)}>{(showRepassword) ? "visibility_on" : "visibility_off"}</i>
                            </span>
                        </Col>
                    </Row>}
                    {validate.error &&
                    <Row>
                        <Col style={{color:"red"}} className="center terms-conditions-txt">
                            <b>{validate.error}</b>
                        </Col>
                    </Row>}

                    {newAccount===true &&
                    <Row>
                        <Col className="center terms-conditions-txt">
                            By signing up, I accept the <a className="general-link">Terms of Service</a> and acknowledge the <a className="general-link">Privacy Policy</a>.
                        </Col>
                    </Row>}
                
                    <Row>
                        <Col className="horizontal-center">
                            <Button disabled={!validate.email || !validate.password || (newAccount && !validate.repassword)} className="continue-button" onClick={handleContinueButton}>Contine</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="horizontal-center">
                            Or Continue with:
                        </Col>
                    </Row>
                    <Row onClick={() => {signInWithGoogle();setOpenLoginModal(false)}}>
                        <Col>
                            <GoogleLoginButton />
                        </Col>
                    </Row>
                    <Row onClick={() => {signInWithYahoo();setOpenLoginModal(false)}}>
                        <Col>
                            <YahooLoginButton />
                        </Col>
                    </Row>
                    <Row  onClick={() => {signInWithTwitter();setOpenLoginModal(false)}}>
                        <Col>
                            <TwitterLoginButton />
                        </Col>
                    </Row>
                    {!showAllOptions ?
                        <Button className="continue-button" onClick={() => setShowAllOptions(cur => !cur)}>show more login options</Button>
                    : <>

                        <Row>
                            <Col>
                                <InstagramLoginButton />
                            </Col>
                        </Row>
                        <Row onClick={signInWithFacebook}>
                            <Col>
                                <FacebookLoginButton />
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <MicrosoftLoginButton />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <AppleLoginButton />
                            </Col>
                        </Row>
                    </>}
                    <Row>
                        <Col className="horizontal-center">
                            <a className="general-link" onClick={() => {setNewAccount(cur => !cur)}}>{(!newAccount) ? "Create an account" : "Already have an account? Log in"}</a>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Modal>
    );
}

export default LoginModal;