import React, { useEffect, useState } from 'react';

import Post from './Post';
import Filter from './Filter';

import { ClipLoader } from 'react-spinners';

import { Button, Col, Container, Row } from 'react-bootstrap';

import Grid from '@mui/material/Grid';

import './Body.scss';

function Body({ posts }) {
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(10000);
    const [brand, setBrand] = useState('default');
    const [type, setType] = useState('default');
    const [displayFilter, setDisplayFilter] = useState(false); // whether the filter is open or not
    const [sort, setSort] = useState('default');
    const [viewCount, setViewCount] = useState('default');
    const [blade, setBlade] = useState('default');
    const [status, setStatus] = useState('default');
    const [windowScroll, setWindowScroll] = useState(0); 

    useEffect(() => {
        document.addEventListener('scroll', () => {
            setWindowScroll(window.pageYOffset > 99);
        });
    }, [])

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
        });
    };
    
    const validFilter = (post) => {
        return post?.price >= min 
            && post?.price <= max 
            && (post.brand === brand || brand === 'default') 
            && (post.type === type || type === 'default')
            && (post.blade === blade || blade === 'default')
            && (post.status === status || status === 'default');
    };

    var divideData = () => {
        if (posts.length === 0) {
            return (
                <Row >
                    <Col xs={12} className="center">
                        <ClipLoader size={150} />
                    </Col> 
                </Row>
            );
        }
        let allPosts = sortData(posts);
        let result = [];
        let partition = [];
        for (let i=0; i< allPosts.length; i++){
            validFilter(allPosts[i]) && partition.push(allPosts[i]);
            if ((i+1)%3===0 || i === allPosts.length-1) {
                result.push(partition);
                partition = [];
            }
            
        };
        return (
            <Grid container className="grid-container-posts">
                {result.map((arr) => {
                    return arr.map((item) => {
                        return <Post item={item} viewCount={viewCount} key={item.id} />
                    })
                })}
            </Grid>
        );
    }

    const topFix = (windowScroll) ? 'fixed-top filter-container' : 'filter-container';
    const topMargin = (windowScroll && displayFilter) ? 'remove-padding post-margin' : 'remove-padding';
    const openFilterButton = (<span className="filter-button-container"><Button className={'filter-button ' + topFix} onClick={() => {setDisplayFilter(true)}}><b>FILTER</b></Button></span>);
    const filter = (
        <Col xs={12} className={topFix}>
            <Filter 
                brand={brand} setBrand={setBrand} 
                type={type} setMax={setMax} 
                min={min} setMin={setMin} 
                max={max} setType={setType} 
                setDisplayFilter={setDisplayFilter} 
                resetFilter={resetFilter}
                sort={sort} setSort={setSort} 
                viewCount={viewCount} setViewCount={setViewCount}
                blade={blade} setBlade={setBlade}
                status={status} setStatus={setStatus} />
        </Col>
    );

    return (
        <Container className='body-container'>
            <Row>
                {(displayFilter && filter) || openFilterButton}
                <Col xs={12} className={topMargin}>
                    {divideData()}
                </Col>
            </Row>
        </Container>
    );
}

export default Body;