import React, { useState } from 'react';

// import MockData from '../../Data/Mocks/Posts.json';
// import BuildMocks from '../../Data/Mocks/BuildMocks.js'

import Post from './Post';
import Filter from './Filter';

import { Button, Col, Container, Row } from 'react-bootstrap';

import './Body.scss';

function Body({ posts }) {
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(10000000000000);
    const [brand, setBrand] = useState('default');
    const [type, setType] = useState('default');
    const [filter, setFilter] = useState(true); // whether the filter is open or not
    const [sort, setSort] = useState('default');
    const [viewCount, setViewCount] = useState('default');
    const [windowScroll, setWindowScroll] = useState(0); 

    const resetFilter = () => {
        setMin(0);
        setMax(10000000000000);
        setBrand('default');
        setType('default');
        setSort('default');
        setViewCount('default');
    };

    const sortData = (data) => {
        if (sort === 'default') return data;
        return [...data].sort((prev, next) => {
            if (sort === 'max') return (prev.price <= next.price) ? 1 : -1;
            return (prev.price >= next.price) ? 1 : -1;
        })
    }

    let allPosts = sortData(posts);

    const parseData = () => {
        var partition = [];
        var parsedData = [];
        for (var i=0; i<=allPosts.length; i++){
            if (partition.length === viewCount || i === allPosts.length) {
                parsedData.push(partition);
                partition = [];
            }
            validFilter(allPosts[i]) && partition.push(allPosts[i]);
        }

        return parsedData;
    };

    const validFilter = (post) => {
        return post?.price >= min 
            && post?.price <= max 
            && (brand === post.brand || brand === 'default') 
            && (post.type === type || type === 'default');
    };

    document.addEventListener('scroll', () => {
        setWindowScroll(window.pageYOffset > 99);
    });

    const topFix = (windowScroll) ? 'fixed-top' : '';
    const openFilterButton = (<Button className={topFix} onClick={() => {setFilter(true)}}>FILTER</Button>);
    const displayFilter = (
        <Col xs={3} sm={2} className={'filter-container ' + topFix}>
            <Filter 
                brand={brand} setBrand={setBrand} 
                type={type} setMax={setMax} 
                min={min} setMin={setMin} 
                max={max} setType={setType} 
                setFilter={setFilter} 
                resetFilter={resetFilter}
                sort={sort} setSort={setSort} 
                viewCount={viewCount} setViewCount={setViewCount} />
        </Col>
    );

    return (
        <Container className='body-container'>
            <Row className='right'>
                {(filter && displayFilter) || openFilterButton}
                <Col xs={filter ? 9 : 12} sm={filter ? 10 : 12} className='padding'>
                    {parseData()?.map((array, k) => {
                        return (
                            <Row key={k}>
                                {array.map((item) => {
                                    return (
                                        <Post item={item} viewCount={viewCount} key={item.id} />
                                    )
                                })}
                            </Row>
                        );
                    })}
                </Col>
            </Row>
        </Container>
    );
}

export default Body;