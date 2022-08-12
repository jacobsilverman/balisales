import React, { useState } from 'react';

// import MockData from '../../Data/Mocks/Posts.json';
// import BuildMocks from '../../Data/Mocks/BuildMocks.js'

import Post from './Post';
import Filter from './Filter';

import { Button, Col, Container, Row } from 'react-bootstrap';

import './Body.css';

function Body({ Data }) {
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(10000000000000);
    const [brand, setBrand] = useState('select');
    const [type, setType] = useState('select');
    const [filter, setFilter] = useState(true); // whether the filter is open or not
    const [sort, setSort] = useState('default');
    const [windowScroll, setWindowScroll] = useState(0); 

    const sortData = (data) => {
        if (sort === 'default') return Data;
        return [...data].sort((prev, next) => {
            console.log(prev.price, next.price);
            if (sort === 'max') return (prev.price <= next.price) ? 1 : -1;
            return (prev.price >= next.price) ? 1 : -1;
        })
    }

    let MockData = sortData(Data);

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

    document.addEventListener('scroll', () => {
        setWindowScroll(window.pageYOffset > 99);
    });



    const data = parseData();


    const topFix = (windowScroll) ? 'fixed-top' : '';
    const openFilterButton = (<Button className={topFix} onClick={() => {setFilter(true)}}>FILTER</Button>);
    const displayFilter = (
        <Col xs={3} sm={2} className={'filter-container fixed-left ' + topFix}>
            <Filter setBrand={setBrand} setMax={setMax} setMin={setMin} setType={setType} setFilter={setFilter} setSort={setSort} />
        </Col>
        );

    return (
        <Container className='body-container'>
            <Row className='right'>
                {(filter && displayFilter) || openFilterButton}
                <Col xs={filter ? 9 : 12} sm={filter ? 10 : 12} className='padding'>
                    {data?.map((array, k) => {
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
                </Col>
            </Row>
        </Container>
    );
}

export default Body;