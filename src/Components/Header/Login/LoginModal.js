import { Button, Modal, TextField } from "@mui/material";
import { Col, Row } from "react-bootstrap";

import silver_eye from "../../../Data/Images/silver_eye.png";

import "./LoginModal.scss";

import { GoogleLoginButton, InstagramLoginButton, FacebookLoginButton, YahooLoginButton, TwitterLoginButton, MicrosoftLoginButton, AppleLoginButton } from "react-social-login-buttons";
import { useState } from "react";

const LoginModal = ({openLoginModal, setOpenLoginModal, newAccount, setNewAccount, signInWithEmail, 
    signInWithGoogle, signInWithFacebook, signInWithTwitter, signInWithYahoo}) => {
    const [email, setEmail] = useState("");
    const [showAllOptions, setShowAllOptions] = useState(false);
    const [validate, setValidate] = useState({email: true})
    
    const handleEmailChange = (e) => {
        const newVal = e.target.value;
        if (!newVal) {
            setValidate({email: false})
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(newVal)) {
            setValidate({email: false})
        }else {
            setValidate({email: true})
        }
        setEmail(newVal)
    }

    const handleEmailValidate = () => {
        if (!email) {
            setValidate({email: false})
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            setValidate({email: false})
        }else {
            setValidate({email: true})
            return true;
        }
        return false;
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
                            <TextField className="email-input" error={!validate.email} label={"Email"} color="" type="url" onChange={handleEmailChange} value={email} />
                        </Col>
                    </Row>
                    {newAccount===true && <Row>
                        <Col className="center terms-conditions-txt">
                            By signing up, I accept the <a className="general-link">Terms of Service</a> and acknowledge the <a className="general-link">Privacy Policy</a>.
                        </Col>
                    </Row>}
                    <Row>
                        <Col className="horizontal-center">
                            <Button disabled={!validate.email} className="continue-button" onClick={() => {handleEmailValidate() && signInWithEmail(email)}}>Contine</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="horizontal-center">
                            Or Continue with:
                        </Col>
                    </Row>
                    <Row onClick={signInWithGoogle}>
                        <Col>
                            <GoogleLoginButton />
                        </Col>
                    </Row>
                    <Row onClick={signInWithYahoo}>
                        <Col>
                            <YahooLoginButton />
                        </Col>
                    </Row>
                    <Row  onClick={signInWithTwitter}>
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