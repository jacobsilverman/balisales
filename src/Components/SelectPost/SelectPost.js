import './SelectPost.css';

import { Col, Row } from 'react-bootstrap';

function SelectPost() {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    const user = JSON.parse(params.item);

    const allInfo = Object.entries(user).map(([prop, value], key) => {
        console.log(prop, value);
        return (
            <Row key={key}>
                <Col xs={6}>{prop}:&nbsp;</Col>
                <Col xs={6}>{value}</Col>
            </Row>
        );
    });

    const imageCls = `image-container ${user.brand}`;

    return (
        <>
            <Row>
                <Col xs={6} className={imageCls} />
            </Row>
            <Row>
                <Col xs={6} className="info-container">
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
                            {user.username}
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6} className="info-label">
                            key:&nbsp;
                        </Col>
                        <Col xs={6} className="info-value">
                            {user.key}
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    );
}

export default SelectPost;