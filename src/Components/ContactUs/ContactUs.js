import { useState } from 'react';

import { Container, Col, Row } from 'react-bootstrap';
import './ContactUs.scss';
import { Button, TextField } from '@mui/material';
import { TextareaAutosize } from '@mui/base';

function ContactUs() {
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');
    const email = `mailto:admin@balisongsales.com?subject=${title}&body=${message}`;

    const assignText = (event, setter) => {
        setter(event.target.value);
    };

    return (
        <Container className="contact-container">
            <Row>
                <Col className="center">
                    <h5>Please feel free to send us a message for any reason</h5>
                </Col>
            </Row>
            <Row>
                <Col className="center">
                    <TextField fullWidth label="title" color="" onChange={(event) => assignText(event, setTitle)}/>
                
                    {/* <textarea maxLength="2000" rows="1" cols="60" name="contact us" autoFocus={true} placeholder="title" onChange={(event) => assignText(event, setTitle)} /> */}
                    {/* <TextField fullWidth label="Title" size="60" onChange={(event) => assignText(event, setTitle)} /> */}
                </Col>
            </Row>
            <Row>
                <Col className="center">
                    <TextareaAutosize style={{width: "100%"}} minRows={5} placeholder="Description" label="description" onChange={(event) => assignText(event, setMessage)} />
                    {/* <textarea maxLength="2000" rows="5" cols="60" name="contact us" placeholder="message" onChange={(event) => assignText(event, setMessage)} /> */}
                    {/* <TextareaAutosize fullWidth minRows="5" label="Message" onChange={(event) => assignText(event, setMessage)} /> */}
                </Col>
            </Row>
            <Row>
                <Col className="center">
                    <Button variant="outlined">
                        <a href={email}>
                            Submit
                        </a>
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}

export default ContactUs;