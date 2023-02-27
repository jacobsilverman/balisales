import { useMemo } from 'react';

import { Col } from 'react-bootstrap';

import Spinner from '../../../Data/Constants/Spinner';

import Post from './Post';

const Posts = ({min, max, brand, posts, type, sort, time, blade, status}) => {
    const sortData = (data) => {
        const sortedByTime = [...data].sort((a, b) => {
            if (time === "New") return (a.timeStamp <= b.timeStamp) ? 1 : -1;
            else return (b.timeStamp < a.timeStamp) ? 1 : -1;
        })

        if (sort === 'All') return sortedByTime;

        return sortedByTime.sort((prev, next) => {
            if (sort === 'Maximum') return (prev.price <= next.price) ? 1 : -1;
            return (prev.price >= next.price) ? 1 : -1;
        });
    };
    
    const validFilter = (post) => {
        return post?.price >= +min 
            && post?.price <= +max 
            && (post?.brand?.toLowerCase() === brand?.toLowerCase() || brand === 'All') 
            && (post?.type?.toLowerCase() === type?.toLowerCase() || type === 'All')
            && (post?.blade?.toLowerCase() === blade?.toLowerCase() || blade === 'All')
            && (post?.status?.toLowerCase() === status?.toLowerCase() || status === 'All');
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