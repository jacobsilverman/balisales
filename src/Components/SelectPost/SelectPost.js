import { Fragment, useEffect, useState } from 'react';


import { getProfilePicture } from '../../Data/Services/userInfo.js';
import { getPost } from '../../Data/Services/PostInfo.js';
import defaultProfile from '../../Data/Images/default-profile.jpg';

import Spinner from '../../Data/Constants/Spinner';

import './SelectPost.scss';

import { Col, Row } from 'react-bootstrap';

import Button from '@mui/material/Button';

import { Link } from 'react-router-dom';

function SelectPost() {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    const [createdDate, setCreatedData] = useState(null);

    const [displayImage, setDisplayImage] = useState(0);
    const [displayPost, setDisplayPost] = useState({});

    const [profilePic, setProfilePic] = useState();

    useEffect(() => {
        getPost(params.id).then((data) => {
            var dateCreated = new Date(data?.timeStamp).toLocaleDateString();

            setDisplayPost(data);
            setCreatedData(dateCreated);
        });
    }, []);

    useEffect(() => {
        getProfilePicture(displayPost?.author?.id).then((result) => {
            setProfilePic(result);
        }).catch(() => {
            setProfilePic(defaultProfile);
        });
    }, [displayPost]);


    const displaySelectedPost = (
        <Fragment>
            <Col xs={12} className="display-title center" >
                <h1>{displayPost?.title}</h1>
            </Col>
            {displayPost?.urls && <Col xs={11} sm={11} md={7} style={{backgroundImage: `url(${displayPost?.urls[displayImage]})`}} className="image-container align-items-end">
                <Link className="link-wrapper" to={{pathname: '/profile', search: "id=" + displayPost?.author?.id}}>
                    <div className="display-name">{displayPost?.author?.name}</div>
                    <div className="account-profile center" style={{backgroundImage: `url(${profilePic})`}} />
                </Link>
            </Col>}

            {displayPost?.numberOfImages > 1 && <Row>
                <Col xs={6} className="previous-image">
                    <Button variant="contained" onClick={() => setDisplayImage(cur => (cur-1) < 0 ? displayPost?.numberOfImages-1 : (cur-1))}>Previous</Button>
                </Col>
                <Col xs={6} className="next-image">
                    <Button variant="contained" onClick={() => setDisplayImage(cur => (cur+1)%displayPost?.numberOfImages)}>Next</Button>
                </Col>
            </Row>}

            
            <Row style={{justifyContent:"center"}}>
                <Col xs={12} sm={12} className="info-container">
                    <div style={{display: "flex", justifyContent: "space-evenly"}}>
                        <div className="content-wrapper">
                            <div className="desciption-title">
                                Created
                            </div>
                            {createdDate}
                        </div>
                        <div className="content-wrapper">
                            <div className="desciption-title">
                                {displayPost?.type}
                            </div>
                            {displayPost?.price}
                        </div>
                        <div className="content-wrapper">
                            <div className="desciption-title">
                                {displayPost?.condition}
                            </div>
                            {displayPost?.brand}
                        </div>
                    </div>
                    <Row className="content-wrapper">
                        <div className="desciption-title">
                            description
                        </div>
                        <Col xs={12}>
                            {displayPost?.description}
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Fragment>
    );


    return (!createdDate || !displayPost || !profilePic )
    ? (<Spinner />)
    : displaySelectedPost;
}

export default SelectPost;