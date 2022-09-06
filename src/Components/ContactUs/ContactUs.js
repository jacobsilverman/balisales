import { useState } from 'react';

import { Container, Col, Row } from 'react-bootstrap';
import './ContactUs.scss';
import { Button } from '@mui/material';

function ContactUs() {
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');
    const email = `mailto:admin@balisongsales.com?subject=${title}&body=${message}`;

    const assignText = (event, setter) => {
        setter(event.target.value);
    };
    
    const resetForm = () => {
        setTitle('');
        setMessage('');
    }

    return (
        <Container className="contact-container">
            <Row>
                <Col className="center">
                    Please feel free to send us a message for any reason
                </Col>
            </Row>
            <Row>
                <Col className="center">
                    <textarea maxlength="2000" rows="1" cols="60" name="contact us" autofocus="true" placeholder="title" onChange={(event) => assignText(event, setTitle)} />
                </Col>
            </Row>
            <Row>
                <Col className="center">
                    <textarea maxlength="2000" rows="5" cols="60" name="contact us" placeholder="message" onChange={(event) => assignText(event, setMessage)} />
                </Col>
            </Row>
            <Row>
                <Col className="center">
                    <Button>
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