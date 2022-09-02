import React, { useState } from 'react';

// import MockData from '../../Data/Mocks/Posts.json';
// import BuildMocks from '../../Data/Mocks/BuildMocks.js'

import Post from './Post';
import Filter from './Filter';

import { Button, Col, Container, Row } from 'react-bootstrap';

import './Body.scss';

function Body({ posts }) {
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(10000);
    const [brand, setBrand] = useState('default');
    const [type, setType] = useState('default');
    const [displayFilter, setDisplayFilter] = useState(false); // whether the filter is open or not
    const [sort, setSort] = useState('default');
    const [viewCount, setViewCount] = useState('default');
    const [windowScroll, setWindowScroll] = useState(0); 

    const resetFilter = () => {
        setMin(0);
        setMax(10000);
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
    const topMargin = (windowScroll && displayFilter) ? 'padding post-margin' : 'padding';
    const openFilterButton = (<span className="filter-button-containter"><Button className={'filter-button ' + topFix} onClick={() => {setDisplayFilter(true)}}><b>FILTER</b></Button></span>);
    const filter = (
        <Row className='filter-container'>
            <Col xs={12} className={topFix}>
                <Filter 
                    brand={brand} setBrand={setBrand} 
                    type={type} setMax={setMax} 
                    min={min} setMin={setMin} 
                    max={max} setType={setType} 
                    setDisplayFilter={setDisplayFilter} 
                    resetFilter={resetFilter}
                    sort={sort} setSort={setSort} 
                    viewCount={viewCount} setViewCount={setViewCount} />
            </Col>
        </Row>
    );

    return (
        <Container className='body-container'>
            <Row>
                {(displayFilter && filter) || openFilterButton}
                <Col xs={12} className={topMargin}>
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