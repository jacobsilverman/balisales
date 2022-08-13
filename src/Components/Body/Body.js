import React, { Fragment, useState } from 'react';

// import MockData from '../../Data/Mocks/Posts.json';
// import BuildMocks from '../../Data/Mocks/BuildMocks.js'

import Post from './Post';
import Filter from './Filter';
import Header from '../Header';

import { Button, Col, Container, Row } from 'react-bootstrap';

import './Body.css';

function Body({ Data }) {
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
        if (sort === 'default') return Data;
        return [...data].sort((prev, next) => {
            if (sort === 'max') return (prev.price <= next.price) ? 1 : -1;
            return (prev.price >= next.price) ? 1 : -1;
        })
    }

    let MockData = sortData(Data);

    const parseData = () => {
        var partition = [];
        var parsedData = [];
        for (var i=0; i<=MockData.length; i++){
            if (partition.length === 12 || i === MockData.length) {
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
            && (brand === post.brand || brand === 'default') 
            && (post.type === type || type === 'default');
    };

    document.addEventListener('scroll', () => {
        setWindowScroll(window.pageYOffset > 99);
    });

    const data = parseData();

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
        <Fragment>
            <Header />
            <Container className='body-container'>
                <Row className='right'>
                    {(filter && displayFilter) || openFilterButton}
                    <Col xs={filter ? 9 : 12} sm={filter ? 10 : 12} className='padding'>
                        {data?.map((array, k) => {
                            return (
                                <Row key={k}>
                                    {array.map((item) => {
                                        return (
                                            <Post item={item} viewCount={viewCount} key={item.key} />
                                        )
                                    })}
                                </Row>
                            )
                        })}
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
}

export default Body;