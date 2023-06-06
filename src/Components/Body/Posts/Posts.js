import { useMemo } from 'react';

import { Col } from 'react-bootstrap';

import Spinner from '../../../Data/Constants/Spinner';

import Post from './Post';

const Posts = ({min, max, brand, condition, posts, type, sort, blade, status, setOpenSelectModal}) => {
    const sortData = (data) => {
        const sortedByTime = [...data].sort((a, b) => {
            if (sort === "Old") return (b.timeStamp < a.timeStamp) ? 1 : -1;
            else return (a.timeStamp <= b.timeStamp) ? 1 : -1;
        })

        if (sort === 'All') return sortedByTime;

        return sortedByTime.sort((prev, next) => {
            if (sort === 'Maximum') return (prev.price <= next.price) ? 1 : -1;
            return (prev.price >= next.price) ? 1 : -1;
        });
    };
    
    const validFilter = (post) => {
        const stripCondition = (condition === "10") ? +condition : +condition[0];
        return post?.price >= +min 
            && post?.price <= +max 
            && (post?.condition >= stripCondition || condition === 'All') 
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
                    return <Post 
                        displayUrl={displayUrl} 
                        item={item} 
                        key={item.id}
                        setOpenSelectModal={setOpenSelectModal} />
                })}
            </div>
        );
    }, [min, max, brand, condition, type, sort, blade, status, posts])


    return (
        <Col xs={12} className="remove-padding">
            {divideData}
        </Col>
    );
}

export default Posts;