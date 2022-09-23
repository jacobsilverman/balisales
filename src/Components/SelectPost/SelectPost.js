import { Fragment, useState } from 'react';

import './SelectPost.scss';

import { Col, Row } from 'react-bootstrap';

function SelectPost({posts}) {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    const user = posts.find((ele) => ele.id === params.id);

    const [displayImage, setDisplayImage] = useState(0);

    return (
        <Fragment>
            <Row>
                <Col xs={11} sm={11} md={5} className="image-container" style={{backgroundImage: `url(${user?.urls[displayImage]})`}}>
                    <button onClick={() => setDisplayImage((displayImage-1) < 0 ? user.numberOfImages-1 : (displayImage-1))}>previous</button>
                    <button onClick={() => setDisplayImage((displayImage+1)%user.numberOfImages)}>next</button>
                </Col>
                
                <Col xs={12} sm={12} md={6} className="info-container">
                    <Row>
                        <Col xs={2} className="info-label">
                            title:&nbsp;
                        </Col>
                        <Col xs={2} className="info-value">
                            {user.title}
                        </Col>
                        <Col xs={2} className="info-label">
                            price:&nbsp;
                        </Col>
                        <Col xs={2} className="info-value">
                            {user.price}
                        </Col>
                        <Col xs={2} className="info-label">
                            condition:&nbsp;
                        </Col>
                        <Col xs={2} className="info-value">
                            {user.condition}
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={2} className="info-label">
                            brand:&nbsp;
                        </Col>
                        <Col xs={2} className="info-value">
                            {user.brand}
                        </Col>
                        <Col xs={2} className="info-label">
                            type:&nbsp;
                        </Col>
                        <Col xs={2} className="info-value">
                            {user.type}
                        </Col>
                        <Col xs={2} className="info-label">
                            username:&nbsp;
                        </Col>
                        <Col xs={2} className="info-value">
                            {user.author.name}
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={2} className="info-label">
                            id:&nbsp;
                        </Col>
                        <Col xs={2} className="info-value">
                            {user.id}
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Fragment>
    );
}

export default SelectPost;