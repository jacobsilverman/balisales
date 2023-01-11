import { Fragment, useEffect, useState } from 'react';


import { getProfilePicture } from '../../Data/Services/userInfo.js';
import { getPost } from '../../Data/Services/PostInfo.js';
import defaultProfile from '../../Data/Images/default-profile.jpg';

import './SelectPost.scss';

import { Col, Row } from 'react-bootstrap';

import Button from '@mui/material/Button';

import { Link } from 'react-router-dom';

function SelectPost() {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    const [createdDate, setCreatedData] = useState(0);

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


    return (
        <Fragment>
            <Col xs={12} className="display-title center" >
                <h1>{displayPost?.title}</h1>
            </Col>

            {displayPost?.urls && <Col xs={11} sm={11} md={5} className="image-container align-items-end" style={{backgroundImage: `url(${displayPost?.urls[displayImage]})`}}>
                <Link className="link-wrapper" to={{pathname: '/profile', search: "id=" + displayPost?.author?.id}}>
                    <div className="display-name">{displayPost?.author?.name}</div>
                    <div className="account-profile center" style={{backgroundImage: `url(${profilePic})`}} />
                </Link>
                {displayPost?.numberOfImages > 1 && <Row>
                    <Col xs={6} className="previous-image">
                        <Button variant="contained" onClick={() => setDisplayImage(cur => (cur-1) < 0 ? displayPost?.numberOfImages-1 : (cur-1))}>Previous</Button>
                    </Col>
                    <Col xs={6} className="next-image">
                        <Button variant="contained" onClick={() => setDisplayImage(cur => (cur+1)%displayPost?.numberOfImages)}>Next</Button>
                    </Col>
                </Row>}
            </Col>}

            <Col xs={12} className="center">
                {createdDate}
            </Col>
            
            <Row>
                <Col xs={12} sm={12} className="info-container">
                    <Row>
                        <Col xs={3}  className="info-label">
                            <h2>{displayPost?.type}:&nbsp;</h2>
                        </Col>
                        <Col xs={3} className="info-value">
                            <h2>
                                $333{displayPost?.price}
                            </h2>
                        </Col>
                        <Col xs={3} className="info-label">
                            <h3>{displayPost?.condition}:</h3>
                        </Col>
                        <Col xs={3} className="info-value">
                            <h3>{displayPost?.brand}</h3>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Fragment>
    );
}

export default SelectPost;