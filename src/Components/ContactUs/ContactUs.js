import { useState } from 'react';

import { Container, Col, Row } from 'react-bootstrap';
import './ContactUs.scss';
import { Button, TextField } from '@mui/material';
import { TextareaAutosize } from '@mui/base';
import { useTranslation } from 'react-i18next';

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
        <Container className="contact-container">
            <Row id="contact-header">
                <Col className="center">
                    <h5>{t("Please feel free to send us a message for any reason")}</h5>
                </Col>
            </Row>
            <Row id="contact-title-input">
                <Col className="center" xs={12} md={6}>
                    <TextField fullWidth  label={t("Title")} color="" onChange={(event) => assignText(event, setTitle)}/>
                    {/* <textarea maxLength="2000" rows="1" cols="60" name="contact us" autoFocus={true} placeholder="title" onChange={(event) => assignText(event, setTitle)} /> */}
                    {/* <TextField fullWidth label="Title" size="60" onChange={(event) => assignText(event, setTitle)} /> */}
                </Col>
            </Row>
            <Row  id="contact-description-input">
                <Col className="center" xs={12} md={6}>
                    <TextareaAutosize style={{width: "100%"}} minRows={5} placeholder={t("Description")} label={t("Description")} onChange={(event) => assignText(event, setMessage)} />
                    {/* <textarea maxLength="2000" rows="5" cols="60" name="contact us" placeholder="message" onChange={(event) => assignText(event, setMessage)} /> */}
                    {/* <TextareaAutosize fullWidth minRows="5" label="Message" onChange={(event) => assignText(event, setMessage)} /> */}
                </Col>
            </Row>
            <Row>
                <Col className="center">
                    <Button variant="outlined">
                        <a href={email} onClick={submitContactUsMessage}>
                            {t("Submit")}
                        </a>
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}

export default ContactUs;