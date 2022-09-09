import React, { Fragment, useMemo, useState } from 'react';

import './Post.scss';

import { Link } from 'react-router-dom';
 
import { Modal } from '@mui/material';
import { Button, Col, Row } from 'react-bootstrap';


function Post({item, viewCount, accountView, deletePost}) {
    const [openModal, setOpenModal] = useState(false);

    const queryParam = 'id='+item.id;

    const priceCls = `price-container color-${useMemo(() => {return (item.type==='wts')?'red':(item.type==='wtb')?'green':'black'}, [item.type])}`;
    const showViewCount = isNaN(12/viewCount);

    return (
        <Fragment>
            <Modal open={openModal}>
                <Row className="delete-modal">
                    <Col xs={5} sm={5} md={2} className="background center">
                        <Row>
                            <Col className="modal-title">Do you want to delete this post?</Col>
                        </Row>
                        <Row>
                            <Col xs={6}>
                                <Button onClick={() => {deletePost(item.id);setOpenModal(false)}}>yes</Button>
                            </Col>
                            <Col xs={6}>
                                <Button onClick={() => setOpenModal(false)}>no</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Modal>
            <Col className="post-container" style={{backgroundImage: `url(${item?.url})`}} id={item.id} xs={showViewCount ? 5 : 12/viewCount} sm={showViewCount ? 5 : 12/viewCount} md={showViewCount ? 3 : 12/viewCount}>
                <div className="fake-background">
                    <Link className="link" to={{pathname: '/singlePost', search: queryParam}}>
                        <Row> 
                            <Col xs={10} className="title-text">
                                {item.title.toUpperCase()}
                            </Col>
                            <Col xs={2}>
                                {accountView && <div className="color-red delete-post" onClick={(e) => {e.preventDefault();setOpenModal(true);}}>x</div>}
                            </Col>
                        </Row>
                        <Row className="hidden-text show-onhover left-align">
                            <Col >
                                seller: {item.author.name}
                            </Col>
                        </Row>
                        <Row className="hidden-text show-onhover left-align">
                            <Col >
                                codition: {item.condition}
                            </Col>
                        </Row>
                        <Row> 
                            <Col className={priceCls}>
                                <span className="price">${item.price}</span>
                            </Col>
                        </Row>
                    </Link>
                </div>
            </Col> 
        </Fragment>
    );
}

export default Post;