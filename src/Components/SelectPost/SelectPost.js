import './SelectPost.css';

import { Col, Row } from 'react-bootstrap';

function SelectPost() {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    console.log(params);

    const allInfo = Object.entries(params).map(([prop, value], key) => {
        return (
            <div key={key}>
                <span>{prop}:&nbsp;</span>
                <span>{value}</span>
            </div>
        );
    });

    const image = `select-container ${params.brand}`;

    return (
        <Row>
            <Col className={image} />
            <Col className="info-container">{allInfo}</Col>
        </Row>
    );
}

export default SelectPost;