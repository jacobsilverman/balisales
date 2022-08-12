import React, { useMemo } from 'react';

import './Post.css';

import { Link } from 'react-router-dom';

import { Col, Row } from 'react-bootstrap';

function Post({item, title, price}) {
    // const data = Object.entries(item);
    // const queryParam = data?.reduce((acc, [prop, value]) => {
    //     return acc + `${prop}=${value}${(prop!=='key')?'&':''}`;
    // }, '');
    const queryParam = 'item='+JSON.stringify(item);

    const backgroundCls = `post-container ${item.brand}`;
    const priceCls = `price color-${useMemo(() => {return (item.type==='wts')?'red':(item.type==='wtb')?'green':''}, [item.type])}`;

    return (
        <Col xs={12} sm={12} md={3} className={backgroundCls} onClick={()=>{return <Link to={{pathname: '/singlePost', search: queryParam}}></Link>}}>
            <Link className="link" to={{pathname: '/singlePost', search: queryParam}}>
                <Row> 
                    <Col xs={11} className="title-text">
                        {title.toUpperCase()}
                    </Col>
                </Row>
                <Row> 
                    <Col className={priceCls}>
                        ${price}
                    </Col>
                </Row>
            </Link>
        </Col> 
    );
}

export default Post;