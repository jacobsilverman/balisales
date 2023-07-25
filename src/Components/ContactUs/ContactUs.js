import { useState } from 'react';

import { Container, Col, Row } from 'react-bootstrap';
import './ContactUs.scss';
import { Button, TextField } from '@mui/material';
import { TextareaAutosize } from '@mui/base';
import { useTranslation } from 'react-i18next';

import hands from "../../Data/Images/hands.jpg";

import { createContactUs } from '../../Data/Services/Contact';

function ContactUs() {
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');
    const email = `mailto:admin@balisongsales.com?subject=${title}&body=${message}`;

    const { t } = useTranslation();

    const assignText = (event, setter) => {
        setter(event.target.value);
    };

    const submitContactUsMessage = () => {
        createContactUs(title, message).then((res) => {
            alert("You have succesfully sent a message to our data base.\nThank you for contacting us!");
            console.log(res);
        }).catch((err) => {
            console.log(err);
        });
    }

    return (
        <>
            <Container className="contact-header-container">
                <Row>
                    <Col className="contact-header">
                        <h2>{t("Contact Us")}</h2>
                    </Col>
                </Row>
            </Container>
            <Container className="contact-container" style={{backgroundImage: `url(${hands})`, position: 'relative'}}>
                {/* <Card className="contact-card"> */}
                    <Row id="contact-header">
                        <Col className="center">
                            <h3  style={{marginTop: "70px"}}>{t("Please feel free to send us a message for any reason")}</h3>
                        </Col>
                    </Row>
                    <Row id="contact-title-input">
                        <Col className="center" xs={10} md={6}>
                            <TextField fullWidth style={{backgroundColor: "rgba(255,255,255,.2)"}}  label={t("Title")} color="" onChange={(event) => assignText(event, setTitle)}/>
                            {/* <textarea maxLength="2000" rows="1" cols="60" name="contact us" autoFocus={true} placeholder="title" onChange={(event) => assignText(event, setTitle)} /> */}
                            {/* <TextField fullWidth label="Title" size="60" onChange={(event) => assignText(event, setTitle)} /> */}
                        </Col>
                    </Row>
                    <Row  id="contact-description-input">
                        <Col className="center" xs={10} md={6}>
                            <TextareaAutosize style={{width: "100%", backgroundColor: "rgba(255,255,255,.2)", outline: "none"}} minRows={5} placeholder={t("Description")} label={t("Description")} onChange={(event) => assignText(event, setMessage)} />
                            {/* <textarea maxLength="2000" rows="5" cols="60" name="contact us" placeholder="message" onChange={(event) => assignText(event, setMessage)} /> */}
                            {/* <TextareaAutosize fullWidth minRows="5" label="Message" onChange={(event) => assignText(event, setMessage)} /> */}
                        </Col>
                    </Row>
                    <Row>
                        <Col className="center">
                            <Button variant="contained">
                                <a href={email} onClick={submitContactUsMessage} style={{color:"white"}}>
                                    {t("Submit")}
                                </a>
                            </Button>
                        </Col>
                    </Row>
                {/* </Card> */}
            </Container>
        </>
    );
}

export default ContactUs;