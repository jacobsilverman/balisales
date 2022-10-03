
import { useEffect, useState } from 'react';

import { auth } from '../../firebase-config';
import { Container, Row } from 'react-bootstrap';

import Post from '../Body/Post';
import './Account.scss';

import { deleteUserPost, getUserInfo } from '../../Data/Services/userInfo';

import { getStorage, ref, getDownloadURL, deleteObject } from "firebase/storage";
import { doc, deleteDoc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase-config';

function Account({ posts }) {
	const [filterPosts, setFilterPosts] = useState([]);

	useEffect(() => {
		getUserposts();
	}, []);

	const getUserposts = async () => {
		getUserInfo().then(async (info)  => {
			const allUserPost = info.posts.map(async (id) => {
				const postDoc = doc(db, "posts", id);
				const val = await getDoc(postDoc).then(async (doc) => {
					let parsedDoc = {...doc.data(), id: doc.id, urls: []};
					for (var i = 0; i<doc.data().numberOfImages; i++) {
						const storage = await getStorage();
						const listRef = ref(storage, `/PostImages/${id}/image-${i}`);
						await getDownloadURL(listRef)
						  .then((url) => {
							console.log("url: ", url);
							parsedDoc.urls.push(url);
						  })
						  .catch((error) => {
							console.error(error);
						  });
					};
					return parsedDoc;
				})
				return val;
			});
			Promise.all(allUserPost).then((result) => {
				setFilterPosts(result);
			});
		})
	}
	
    const deletePost = async (item) => {
		const storage = getStorage();
        const postDoc = doc(db, "posts", item.id);
		await deleteDoc(postDoc);
		deleteUserPost();
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