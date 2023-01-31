import React, { useMemo, useState } from 'react';

import Spinner from '../../Data/Constants/Spinner';

import { Button, Col, Container, Row } from 'react-bootstrap';

import Grid from '@mui/material/Grid';

import './Body.scss';
import Filter from './Filter';
import Post from './Post';
import MenuItem from '@mui/material/MenuItem';

import { isMobile } from '../../Data/Constants';

function Body({ posts }) {
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(10000);
    const [brand, setBrand] = useState('default');
    const [type, setType] = useState('default');
    const [displayFilter, setDisplayFilter] = useState(false); // whether the filter is open or not
    const [sort, setSort] = useState('default');
    const [viewCount, setViewCount] = useState(3);
    const [blade, setBlade] = useState('default');
    const [status, setStatus] = useState('default');

    const viewCountHeight = 120/viewCount;
    const showViewCount = isNaN(12/viewCount);

    // const [windowScroll, setWindowScroll] = useState(0); 

    // useEffect(() => {
    //     document.addEventListener('scroll', () => {
    //         setWindowScroll(window.pageYOffset > 99);
    //     });
    // }, [])

    const resetFilter = () => {
        setMin(0);
        setMax(10000);
        setBrand('default');
        setBlade('default');
        setType('default');
        setSort('default');
        setStatus('default');
        setViewCount(3);
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

    const getOptions = (options, option) => {
        return options.map((name) => {
            return <MenuItem key={option+"-"+name} value={name}>{name}</MenuItem>;
        });
    };

    var divideData = useMemo(() => {
        if (posts.length === 0) {
            return (<Spinner />);
        }

        let allPosts = sortData(posts.filter((post) => validFilter(post)));

        return (
            <Grid container className="grid-container-posts">
                {allPosts.map((item) => {
                    const displayUrl =  `url(${item?.urls[0]})`;
                    const queryParam = 'id='+item?.id;
                    return <Post 
                        displayUrl={displayUrl} 
                        item={item} 
                        queryParam={queryParam}
                        viewCount={viewCount} 
                        viewCountHeight={viewCountHeight} 
                        showViewCount={showViewCount}
                        key={item.id} />
                })}
            </Grid>
        );
    }, [min, max, brand, type, displayFilter, sort, viewCount, blade, status, posts])

    // const topFix = (windowScroll) ? 'fixed-top filter-container' : 'filter-container';
    // const topMargin = (windowScroll && displayFilter) ? 'remove-padding post-margin' : 'remove-padding';
    const topFix = 'filter-container';
    const topMargin = 'remove-padding';
    const openFilterButton = (<span className="filter-button-container"><Button className={'filter-button ' + topFix} onClick={() => {setDisplayFilter(true)}}><b>FILTER</b></Button></span>);
    const filter = (
        <Col xs={12} className={topFix}>
            <Filter 
                getOptions={getOptions}
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
                {(displayFilter && filter) || (!isMobile && openFilterButton)}
                <Col xs={12} className={topMargin}>
                    {divideData}
                </Col>
            </Row>
        </Container>
    )
}

export default Body;