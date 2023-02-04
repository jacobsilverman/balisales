import { useEffect, useMemo, useState } from 'react';

import { Col } from 'react-bootstrap';

import Spinner from '../../../Data/Constants/Spinner';

import Post from './Post';

import { getAllPosts } from '../../../Data/Services/Home.js';

const Posts = ({min, max, brand, type, sort, time, blade, status}) => {
    const [posts, setPosts] = useState([]);

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
        const sortedByTime = [...data].sort((a, b) => {
            if (time === "new") return (a.timeStamp <= b.timeStamp) ? 1 : -1;
            else return (b.timeStamp < a.timeStamp) ? 1 : -1;
        })

        if (sort === 'all') return sortedByTime;

        return sortedByTime.sort((prev, next) => {
            if (sort === 'max') return (prev.price <= next.price) ? 1 : -1;
            return (prev.price >= next.price) ? 1 : -1;
        });
    };
    
    const validFilter = (post) => {
        return post?.price >= min 
            && post?.price <= max 
            && (post.brand === brand || brand === 'all') 
            && (post.type === type || type === 'all')
            && (post.blade === blade || blade === 'all')
            && (post.status === status || status === 'all');
    };


    const divideData = useMemo(() => {
        if (posts.length === 0) {
            return (<Spinner />);
        }

        let allValidPostsSorted = sortData(posts.filter((post) => validFilter(post)));

        return (
            <div className="grid-container-posts">
                {allValidPostsSorted.map((item) => {
                    const displayUrl =  `url(${item?.urls[0]})`;
                    const queryParam = 'id='+item?.id;
                    return <Post 
                        displayUrl={displayUrl} 
                        item={item} 
                        queryParam={queryParam}
                        key={item.id} />
                })}
            </div>
        );
    }, [min, max, brand, type, sort, time, blade, status, posts])


    return (
        <Col xs={12} className="remove-padding">
            {divideData}
        </Col>
    );
}

export default Posts;