import React from 'react';

import './Post.css';

import { Col } from 'react-bootstrap';

function Post({title, price, username, condition}) {
    return (
        <Col xs={3} className='post-container'>
            <div>
                title: {title}
            </div>
            <div>
                price: {price}
            </div>
            <div>
                username: {username}
            </div>
            <div>
                condition: {condition}
            </div>
        </Col>
    );
}

export default Post;