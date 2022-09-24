import { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

import { addComment, createDiscussion, deleteComment, getDiscussions } from '../../Data/Services/Discussion.js';

import './Discuss.scss';
const uid = localStorage.getItem("uid");

var Discuss = () => {
    const [newDiscussion, setNewDiscussion] = useState("");
    const [discussions, setDiscussions] = useState([]);
    const [currentComment, setCurrentComment] = useState("");

    useEffect(() => {
        (
            async () => {
                getDiscussions().then((result) => {
                    console.log(result);
                    setDiscussions(result.map(item => item));
                    return result;
                })
            }
        )()
    }, []);

    return (
        <Container className="discuss-container">
            <Row>
                <div className="card-group">
                    <Card>
                        <div className="card-header">
                            <h3>Goal:</h3>
                        </div>
                        <div className="card-body">
                            <h4>As an ongoing project there are many different routes to facilitate the needs of the users on this site. Here the community can help determine which pathes to prioritize and which improvements are obselete.</h4>
                        </div>
                        <div className="card-footer">
                            <h5>
                                Please feel free to add a discussion, or comment on previous ones
                            </h5>
                        </div>
                    </Card>
                    <Card>
                        <div className="card-header center">
                            <h3>Create Discussion</h3>
                        </div>
                        <div className="card-body center">
                            <textarea rows="4" style={{width: "100%", height: "100%"}} onChange={(e) => setNewDiscussion(e.target.value)} />
                        </div>
                        <div className="card-footer center">
                            <button className="btn btn-primary" onClick={() => createDiscussion(newDiscussion)}>submit</button>
                        </div>
                    </Card>
                </div>
            </Row>
            <Row>
                <div className="card-columns"  style={{marginTop:"20px"}}>
                    {discussions.map((item, index) => {
                        return (
                            <Card key={index} className="w-50" style={{margin:"20px"}}>
                                <div  className="card-header">
                                    {item?.displayName}
                                </div>
                                <div className="card-text center">
                                    {item?.body}
                                </div>
                                <div className="card-footer">
                                    <Row>
                                        {item?.comments?.map((ele, index) => {
                                            return (
                                                <Row>
                                                    <Col xs={2}>{ele.displayName}:</Col>
                                                    <Col xs={8}>{ele.comment}</Col>
                                                    {ele.uid === uid  && <Col xs={2}><button className="btn btn-danger" style={{fontSize: "10px"}} onClick={() => deleteComment(item, index)}>delete</button></Col>}
                                                </Row>
                                            )
                                        })}
                                    </Row>
                                    <Row>  
                                        <Col xs={8}>
                                            <input onChange={(e) => setCurrentComment(e.target.value)} />
                                        </Col>
                                        <Col className="offset-2" xs={2}>
                                            <button className="btn btn-primary" style={{fontSize: "10px"}} onClick={() => {console.log(item, currentComment);addComment(item, currentComment)}}>Comment</button>
                                        </Col>
                                    </Row>
                                </div>
                            </Card>
                        )
                    })}
                </div>
            </Row>
        </Container>
    );
}

export default Discuss;