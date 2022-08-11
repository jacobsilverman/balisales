import React from 'react';

import MockData from '../../Data/Mocks/Posts.json';

import Post from './Post';
import Filter from './Filter';

import { Col, Container, Row } from 'react-bootstrap';

import './Body.css';

function Body() {

    const displayData = () => {
        var partition = [];
        var parsedData = [];
        for (var i=0; i<=MockData.length; i++){
            if (i%3 === 0 && i !== 0) {
                parsedData.push(partition);
                partition = [];
            }
            partition.push(MockData[i]);
        }

        return parsedData.map((array, k) => {
            return (
                <Row key={k}>
                    {array.map((item) => {
                        return <Post
                            key={item.key} 
                            title={item.title} 
                            price={item.price} 
                            username={item.username} 
                            condition={item.condition} />
                    })}

                </Row>
            )
        });
    }


    return (
        <Container className='body-container'>
            <Row>
                <Col xs={1}>
                    <Filter />
                </Col>
                <Col xs={11}>
                    <Row>
                        {displayData()}
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default Body;