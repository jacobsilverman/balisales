import React, { Fragment, useMemo, useState } from 'react';

import { priceColors } from '../../../Data/Constants';

import './Post.scss';

import { Link } from 'react-router-dom';
 
import { Col, Row } from 'react-bootstrap';

import DeleteModal from './DeleteModal/DeleteModal.js';
import EditModal from './EditModal/EditModal.js';

function Post({item, viewCount, accountView, deletePost}) {
    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const [openEditModal, setOpenEditModal] = useState(false);

    const queryParam = 'id='+item.id;

    const priceCls = `price-container color-${useMemo(() => {return priceColors(item.type)}, [item.type])}`;
    const showViewCount = isNaN(12/viewCount);

    return (
        <Fragment>
            <DeleteModal deletePost={deletePost} item={item} openDeleteModal={openDeleteModal} setOpenDeleteModal={setOpenDeleteModal} />
            <EditModal item={item} openEditModal={openEditModal} setOpenEditModal={setOpenEditModal} />
            <Col className="post-container" style={{backgroundImage: `url(${item.urls[0]})`}} id={item.id} xs={showViewCount ? 5 : 12/viewCount} sm={showViewCount ? 5 : 12/viewCount} md={showViewCount ? 3 : 12/viewCount}>
                <div className="fake-background">
                    <Link className="link" to={{pathname: '/singlePost', search: queryParam}}>
                        <Row> 
                            <Col className="title-text">
                                {item.title.toUpperCase()}
                            </Col>
                            <Col className="delete-container">
                                {accountView && <span className="delete" onClick={(e) => {e.preventDefault();setOpenDeleteModal(true);}}>x</span>}
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