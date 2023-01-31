
import { useEffect, useState } from 'react';

import Grid from '@mui/material/Grid';
import { Col, Row } from 'react-bootstrap';
import Spinner from '../../Data/Constants/Spinner.js';

import Post from '../Body/Posts/Post';
import './Account.scss';

import { deleteUserPost, getUserPosts } from '../../Data/Services/userInfo';

import { getStorage, ref, deleteObject } from "firebase/storage";
import { doc, deleteDoc } from 'firebase/firestore';
import { db } from '../../firebase-config';

function Account({user, accountView}) {
	const [filterPosts, setFilterPosts] = useState([]);
	const [openEditModal, setOpenEditModal] = useState(false);

	useEffect(() => {
        getUserPosts(user).then((result) => {
			result.sort((a, b) => {
				return b.timeStamp - a.timeStamp;
			});
            setFilterPosts(result);
        }).catch(() => {
            console.error("cant get user posts");
        });
	}, []);
	
    const deletePost = async (item) => {
		const storage = getStorage();
        const postDoc = doc(db, "posts", item.id);
		await deleteDoc(postDoc);
		deleteUserPost(item.id);
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
		if (filterPosts.length === 0) {
			return (
				<Spinner />
			);
		} 

		return (
            filterPosts.length > 0 && 
			<Grid container style={{padding:'0px'}} className="grid-container-posts">
				{filterPosts.map((item) => {
					const displayUrl =  `url(${item?.urls[0]})`;
					const queryParam = 'id='+item?.id;
					return <Post 
						displayUrl={displayUrl}
						item={item}
						key={item.id}
						queryParam={queryParam}
						accountView={accountView}
						deletePost={deletePost}
						openEditModal={openEditModal}
						setOpenEditModal={setOpenEditModal} />
						
				})}
			</Grid>
			|| <Row>
				<Col xs={12} className="center">
					No Posts Available
				</Col>
			</Row>
        );
    }

	return setAccountData();
}

export default Account;