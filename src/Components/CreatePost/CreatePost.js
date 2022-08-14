import { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { addDoc, collection } from 'firebase/firestore';
import { auth, db } from '../../firebase-config';

function CreatePost() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const postsCollectionRef = collection(db, "posts");
    const createPost = async () => {
        await addDoc(postsCollectionRef, {
            title,
            description,
            author: {name: auth.currentUser.displayName, id: auth.currentUser.uid }
        });
    }

    return (
        <Container>
            <Row>
                <Col>
                    <h3>Create Post</h3>
                </Col>
            </Row>
            <Row>
                <Col>
                    <label>Title: </label>
                    <input onChange={(event) => setTitle(event.target.value)} />
                </Col>
                <Col>
                    <label>Description: </label>
                    <input onChange={(event) => setDescription(event.target.value)} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button onClick={createPost}>Submit</Button>
                </Col>
            </Row>
        </Container>
        );
}

export default CreatePost;