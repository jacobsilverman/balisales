
import { useEffect, useState } from 'react';

import { auth } from '../../firebase-config';
import { Container, Col, Row } from 'react-bootstrap';

import Post from '../Body/Post';
import './Account.scss';

import { doc, deleteDoc } from 'firebase/firestore';
import { db } from '../../firebase-config';

function Account({posts}) {
	const [filterPosts, setFilterPosts] = useState(
		posts?.filter((ele) => {
			return ele.author.id === auth.currentUser?.uid;
		})
	);
	
    const deletePost = async (id) => {
        const postDoc = doc(db, "posts", id);
        await deleteDoc(postDoc);
		setFilterPosts(
			filterPosts?.filter((ele) => {
				return ele.id !== id;
			})
		)
    }

	useEffect(() => {
		console.log(filterPosts);
	}, [filterPosts])

	return (
		<Container>
			<Row className="account-container center">
				<Col>
					{filterPosts.length > 0 ? filterPosts?.map((item) => { return <Post item={item} key={item.id} accountView={true} deletePost={deletePost} />}) : "no posts available"}
				</Col>
			</Row>
		</Container>
	);
	
}

export default Account;