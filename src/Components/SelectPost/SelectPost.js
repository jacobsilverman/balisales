import { Fragment, useEffect, useState } from 'react';

import { getPost } from '../../Data/Services/PostInfo.js';

import './SelectPost.scss';

import { Col, Row } from 'react-bootstrap';

import Button from '@mui/material/Button';

function SelectPost() {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    const [createdDate, setCreatedData] = useState(0);

    const [displayImage, setDisplayImage] = useState(0);
    const [displayPost, setDisplayPost] = useState({});

    useEffect(() => {
        getPost(params.id).then((data) => {
            setDisplayPost(data);
            setCreatedData(new Date(data?.timeStamp).toUTCString());
        });
    }, []);

    return (
        <Fragment>
            <Row>
                {displayPost?.urls && <Col xs={11} sm={11} md={5} className="image-container" style={{backgroundImage: `url(${displayPost?.urls[displayImage]})`}}>
                    {displayPost?.numberOfImages > 1 && <Row>
                        <Col xs={6} className="left">
                            <Button variant="contained" onClick={() => setDisplayImage((displayImage-1) < 0 ? displayPost?.numberOfImages-1 : (displayImage-1))}>Previous</Button>
                        </Col>
                        <Col xs={6} className="right">
                            <Button variant="contained" onClick={() => setDisplayImage((displayImage+1)%displayPost?.numberOfImages)}>Next</Button>
                        </Col>
                    </Row>}
                </Col>}
                <Col xs={12} sm={12} md={6} className="info-container">
                    <Row>
                        <Col xs={2} className="info-label">
                            title:&nbsp;
                        </Col>
                        <Col xs={2} className="info-value">
                            {displayPost?.title}
                        </Col>
                        <Col xs={2} className="info-label">
                            price:&nbsp;
                        </Col>
                        <Col xs={2} className="info-value">
                            {displayPost?.price}
                        </Col>
                        <Col xs={2} className="info-label">
                            condition:&nbsp;
                        </Col>
                        <Col xs={2} className="info-value">
                            {displayPost?.condition}
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={2} className="info-label">
                            brand:&nbsp;
                        </Col>
                        <Col xs={2} className="info-value">
                            {displayPost?.brand}
                        </Col>
                        <Col xs={2} className="info-label">
                            type:&nbsp;
                        </Col>
                        <Col xs={2} className="info-value">
                            {displayPost?.type}
                        </Col>
                        <Col xs={2} className="info-label">
                            username:&nbsp;
                        </Col>
                        <Col xs={2} className="info-value">
                            {displayPost?.author?.name}
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={2} className="info-label">
                            created:&nbsp;
                        </Col>
                        <Col xs={10} className="info-value">
                            {createdDate}
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={2} className="info-label">
                            id:&nbsp;
                        </Col>
                        <Col xs={2} className="info-value">
                            {displayPost?.id}
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Fragment>
    );
}

export default SelectPost;