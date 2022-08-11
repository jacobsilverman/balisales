import React from 'react';

import './Post.css';

import { Link } from 'react-router-dom';

import { Col } from 'react-bootstrap';

function Post({item, title, price, username, condition}) {
    const data = Object.entries(item);
    const queryParam = data?.reduce((acc, [prop, value]) => {
        return acc + `${prop}=${value}${(prop!=='key')?'&':''}`;
    }, '');

    const background = `post-container ${item.brand}`;

    return (
        <Col xs={3} className={background}>
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
            <Link to={{pathname: '/singlePost', search: queryParam}}>
                view
            </Link>
        </Col> 
    );
}

export default Post;