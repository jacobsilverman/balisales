import React, { Fragment, useMemo, useState } from 'react';

import { priceColors } from '../../../Data/Constants';

import './Post.scss';

import { Link } from 'react-router-dom';
 
import { Col, Row } from 'react-bootstrap';
import Grid from '@mui/material/Grid';


import DeleteModal from './DeleteModal/DeleteModal.js';
import EditModal from './EditModal/EditModal.js';
// import AccountModal from '../../AccountModal';

function Post({item, viewCount, accountView, deletePost}) {
    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const [openEditModal, setOpenEditModal] = useState(false);
    // const [openAccountModal, setOpenAccountModal] = useState(false);

    const queryParam = 'id='+item?.id;

    const priceCls = `price-container hidden-text color-${useMemo(() => {return priceColors(item?.type)}, [item?.type])}`;
    const showViewCount = isNaN(12/viewCount);

    return (
        <Fragment>
            <DeleteModal deletePost={deletePost} item={item} openDeleteModal={openDeleteModal} setOpenDeleteModal={setOpenDeleteModal} />
            <EditModal item={item} openEditModal={openEditModal} setOpenEditModal={setOpenEditModal} />
            {/* <AccountModal item={item} openAccountModal={openAccountModal} setOpenAccountModal={setOpenAccountModal} /> */}
            <Grid item className="post-container" style={{backgroundImage: `url(${item?.urls[0]})`}} id={item?.id} xs={showViewCount ? 4 : 12/viewCount}>
                <div className="fake-background">
                    <Link className="link" to={{pathname: '/singlePost', search: queryParam}}>
                        <Row> 
                            <Col className="title-text hidden-text">
                                {item?.title?.toUpperCase()}
                            </Col>
                            <Col className="delete-container" style={{opacity: "1", visibility: "visible"}}>
                                {accountView && <span className="delete link-danger" onClick={(e) => {e.preventDefault();setOpenDeleteModal(true);}}>x</span>}
                                {!accountView && item?.numberOfImages>1 && <svg style={{width:"3vw",height:"3vw",color:"black"}} viewBox="0 0 24 24"><path fill="currentColor" d="M21 16V6H7V16H21M21 4C21.53 4 22.04 4.21 22.41 4.59C22.79 4.96 23 5.47 23 6V16C23 16.53 22.79 17.04 22.41 17.41C22.04 17.79 21.53 18 21 18H7C5.89 18 5 17.1 5 16V6C5 4.89 5.89 4 7 4H21M3 20H18V22H3C2.47 22 1.96 21.79 1.59 21.41C1.21 21.04 1 20.53 1 20V9H3V20Z" /></svg>}
                            </Col>
                        </Row>
                        {/* <Row className="hidden-text">
                            <Col onClick={(e) => {e.preventDefault();setOpenAccountModal(true)}}>
                                seller: {item.author.name}
                            </Col>
                        </Row> */}
                        <Row> 
                            <Col className={priceCls}>
                                <span className="price">${item?.price}</span>
                            </Col>
                            <Col className="edit-container">
                                {accountView && <span className="edit" onClick={(e) => {e.preventDefault();setOpenEditModal(true);}}><i className="material-icons">edit_document</i></span>}
                            </Col>
                        </Row>
                    </Link>
                </div>
            </Grid> 
        </Fragment>
    );
}

export default Post;