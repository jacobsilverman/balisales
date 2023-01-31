import { useEffect, useMemo, useState } from 'react';

import { Col } from 'react-bootstrap';

import Spinner from '../../../Data/Constants/Spinner';

import Grid from '@mui/material/Grid';
import Post from './Post';

import { getAllPosts } from '../../../Data/Services/Home.js';

const Posts = ({min, max, brand, type, sort, viewCount, blade, status}) => {
    const [posts, setPosts] = useState([]);

    const viewCountHeight = 120/viewCount;
    const showViewCount = isNaN(12/viewCount);

    useEffect(() => {
        let ignore = false;
        if (!ignore) {
          getAllPosts().then((allPosts) => {
            setPosts(allPosts);
          }).catch(() => {
            console.log("error getting posts");
          });
        };
        return () => { ignore = true };
    }, []);

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


    const divideData = useMemo(() => {
        if (posts.length === 0) {
            return (<Spinner />);
        }

        let allValidPostsSorted = sortData(posts.filter((post) => validFilter(post)));

        return (
            <Grid container className="grid-container-posts">
                {allValidPostsSorted.map((item) => {
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
    }, [min, max, brand, type, sort, viewCount, blade, status, posts])


    return (
        <Col xs={12} className="remove-padding">
            {divideData}
        </Col>
    );
}

export default Posts;