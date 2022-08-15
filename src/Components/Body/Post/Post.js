import React, { useMemo } from 'react';

import './Post.scss';

import { Link } from 'react-router-dom';

import { Col, Row } from 'react-bootstrap';

function Post({item, viewCount}) {
    // const data = Object.entries(item);
    // const queryParam = data?.reduce((acc, [prop, value]) => {
    //     return acc + `${prop}=${value}${(prop!=='key')?'&':''}`;
    // }, '');

    const queryParam = 'item='+JSON.stringify(item);

    const backgroundCls = `post-container ${item.brand}`;
    const priceCls = `price color-${useMemo(() => {return (item.type==='wts')?'red':(item.type==='wtb')?'green':''}, [item.type])}`;

    const showViewCount = isNaN(12/viewCount);

    return (
        <Col className={backgroundCls} xs={showViewCount ? 12 : 12/viewCount} sm={showViewCount ? 12 : 12/viewCount} md={showViewCount ? 4 : 12/viewCount} onClick={()=>{return <Link to={{pathname: '/singlePost', search: queryParam}}></Link>}}>
            <div className='fake-background'>
                <Link className="link" to={{pathname: '/singlePost', search: queryParam}}>
                    <Row> 
                        <Col xs={11} className="title-text">
                            {item.title.toUpperCase()}
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
    );
}

export default Post;