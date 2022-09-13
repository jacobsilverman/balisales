import React, { Fragment, useMemo, useState } from 'react';

import { priceColors } from '../../../Data/Constants';

import './Post.scss';

import { Link } from 'react-router-dom';
 
import { Modal } from '@mui/material';
import { Button, Col, Row } from 'react-bootstrap';


function Post({item, viewCount, accountView, deletePost, editPost}) {
    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const [openEditModal, setOpenEditModal] = useState(false);

    const queryParam = 'id='+item.id;

    const priceCls = `price-container color-${useMemo(() => {return priceColors(item.type)}, [item.type])}`;
    const showViewCount = isNaN(12/viewCount);

    const deleteModal = (
        <Modal open={openDeleteModal}>
            <Row className="delete-modal">
                <Col xs={5} sm={5} md={2} className="background center">
                    <Row>
                        <Col className="modal-title">Do you want to delete this post?</Col>
                    </Row>
                    <Row>
                        <Col xs={6}>
                            <Button onClick={() => {deletePost(item.id);setOpenDeleteModal(false)}}>yes</Button>
                        </Col>
                        <Col xs={6}>
                            <Button onClick={() => setOpenDeleteModal(false)}>no</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Modal>
    );

    const editModal = (
        <Modal open={openEditModal}>
            <Row className="delete-modal">
                <Col xs={5} sm={5} md={2} className="background center">
                    <Row>
                        <Col className="modal-title">Do you want to edit this post?</Col>
                    </Row>
                    <Row>
                        <Col xs={6}>
                            <Button onClick={() => {editPost();setOpenEditModal(false)}}>yes</Button>
                        </Col>
                        <Col xs={6}>
                            <Button onClick={() => setOpenEditModal(false)}>no</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Modal>
    );

    return (
        <Fragment>
            {deleteModal}
            {editModal}
            <Col className="post-container" style={{backgroundImage: `url(${item?.url})`}} id={item.id} xs={showViewCount ? 5 : 12/viewCount} sm={showViewCount ? 5 : 12/viewCount} md={showViewCount ? 3 : 12/viewCount}>
                <div className="fake-background">
                    <Link className="link" to={{pathname: '/singlePost', search: queryParam}}>
                        <Row> 
                            <Col xs={10} className="title-text">
                                {item.title.toUpperCase()}
                            </Col>
                            <Col xs={2}>
                                {accountView && <div className="color-red delete-post" onClick={(e) => {e.preventDefault();setOpenDeleteModal(true);}}>x</div>}
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
                            <Col className="edit-container">
                                {accountView && <span className="edit" onClick={(e) => {e.preventDefault();setOpenEditModal(true);}}><i className="material-icons">edit_document</i></span>}
                            </Col>
                        </Row>
                    </Link>
                </div>
            </Col> 
        </Fragment>
    );
}

export default Post;