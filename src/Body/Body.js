import React from 'react';

import MockData from '../Data/Mocks/Posts.json';

import Post from './Post';

import { Col, Container, Row } from 'react-bootstrap';

function Body() {


    const allPosts = () => {
        const result = [];

        for (var key in MockData) {
            var item = MockData[key];
            result.push(
                <Post
                    title={item.title} 
                    price={item.price} 
                    username={item.username} 
                    condition={item.condition} />
            );
        }
        
        return result;
    }

    console.log(allPosts());

    return (
        <Container>
            <Row>
                {allPosts().map((item, key) => <Col key={key} xs={1}>{item}</Col>)}
            </Row>
        </Container>
    );
}

export default Body;