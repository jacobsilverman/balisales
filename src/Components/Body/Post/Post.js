import React, { useMemo, useState } from 'react';

import './Post.scss';

import { Link } from 'react-router-dom';
 
import { Modal } from '@mui/material';
import { Button, Col, Row } from 'react-bootstrap';


function Post({item, viewCount, accountView, deletePost}) {
    const [openModal, setOpenModal] = useState(false);

    const queryParam = 'item='+JSON.stringify(item);

    const priceCls = `price color-${useMemo(() => {return (item.type==='wts')?'red':(item.type==='wtb')?'green':''}, [item.type])}`;
    const showViewCount = isNaN(12/viewCount);

    return (
        <>
        <Modal open={openModal}>
            <Row className="delete-modal">
                <Col xs={2} className="background center">
                    <div className="modal-title">Do you want to delete this post?</div>
                    <Row>
                        <Col>
                            <Button onClick={() => {deletePost(item.id);setOpenModal(false)}}>yes</Button>
                        </Col>
                        <Col>
                            <Button onClick={() => setOpenModal(false)}>no</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Modal>
        <Col className="post-container" style={{backgroundImage: `url(${item?.url})`}} id={item.id} xs={showViewCount ? 12 : 12/viewCount} sm={showViewCount ? 12 : 12/viewCount} md={showViewCount ? 4 : 12/viewCount}>
            <div className="fake-background">
                <Link className="link" to={{pathname: '/singlePost', search: queryParam}}>
                    <Row> 
                        <Col xs={10} className="title-text">
                            {item.title.toUpperCase()}
                        </Col>
                        <Col xs={2}>
                            {accountView && <div className="color-red delete-post" onClick={(e) => {e.preventDefault();e.stopPropagation();setOpenModal(true);}}>x</div>}
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
                            ${item.price}
                        </Col>
                    </Row>
                </Link>
            </div>
        </Col> 
        </>
    );
}

export default Post;