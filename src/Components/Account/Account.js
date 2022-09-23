
import { useEffect, useState } from 'react';

import { auth } from '../../firebase-config';
import { Container, Row } from 'react-bootstrap';

import Post from '../Body/Post';
import './Account.scss';

import { getStorage, ref, deleteObject } from "firebase/storage";
import { doc, deleteDoc } from 'firebase/firestore';
import { db } from '../../firebase-config';

function Account({ posts }) {
	const [filterPosts, setFilterPosts] = useState([]);

	useEffect(() => {
		setFilterPosts(
			posts?.filter((ele) => {
				return ele?.author?.id === auth?.currentUser?.uid;
			})
		);
	}, [posts]);
	
    const deletePost = async (item) => {
		const storage = getStorage();
        const postDoc = doc(db, "posts", item.id);
		await deleteDoc(postDoc);
		for (var i = 0; i < item.numberOfImages; i++) {
			const pictureRef = ref(storage, `PostImages/${item.id}/image-${i}`);
			await deleteObject(pictureRef);
		}

		setFilterPosts(
			filterPosts?.filter((ele) => {
				return ele.id !== item.id;
			})
		)
    }

	const setAccountData = () => {
		return filterPosts.length > 0 ? filterPosts?.map((item) => { return <Post item={item} key={item.id} accountView={true} deletePost={deletePost} />}) : "no posts available";
	}

	return (
		<Container>
			<Row className="account-container center">
				{setAccountData()}
			</Row>
		</Container>
	);
	
}

export default Account;