import React, { useState } from 'react';

// import MockData from '../../Data/Mocks/Posts.json';
import BuildMocks from '../../Data/Mocks/BuildMocks.js'

import Post from './Post';
import Filter from './Filter';

import { Col, Container, Row } from 'react-bootstrap';

import './Body.css';

function Body() {
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(10000000000000);
    const [brand, setBrand] = useState('select');
    const [type, setType] = useState('select');
    const MockData = BuildMocks();

    const parseData = () => {
        var partition = [];
        var parsedData = [];
        for (var i=0; i<=MockData.length; i++){
            if (partition.length === 3 || i === MockData.length) {
                parsedData.push(partition);
                partition = [];
            }
            validFilter(MockData[i]) && partition.push(MockData[i]);
        }

        return parsedData;
    };

    const validFilter = (post) => {
        return post?.price >= min 
            && post?.price <= max 
            && (brand === post.brand || brand === 'select') 
            && (post.type === type || type === 'select');
    };

    const data = parseData();

    return (
        <Container className='body-container'>
            <Row>
                <Col xs={3} sm={2} className='filter-container'>
                    <Filter setBrand={setBrand} setMax={setMax} setMin={setMin} setType={setType} />
                </Col>
                <Col xs={9} sm={10}>
                    <Row>
                        {data.map((array, k) => {
                            return (
                                <Row key={k}>
                                    {array.map((item) => {
                                        return (
                                            <Post
                                                item={item}
                                                key={item.key}
                                                title={item.title} 
                                                price={item.price} 
                                                username={item.username} 
                                                condition={item.condition} />
                                        )
                                    })}
                                </Row>
                            )
                        })}
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default Body;