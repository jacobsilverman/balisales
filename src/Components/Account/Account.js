
import {Fragment,  useEffect, useState } from 'react';

import Grid from '@mui/material/Grid';
import { Col, Row } from 'react-bootstrap';
import Spinner from '../../Data/Constants/Spinner.js';

import Post from '../Body/Post';
import './Account.scss';

import { deleteUserPost, getUserPosts } from '../../Data/Services/userInfo';

import { getStorage, ref, deleteObject } from "firebase/storage";
import { doc, deleteDoc } from 'firebase/firestore';
import { db } from '../../firebase-config';

function Account({user, accountView}) {
	const [filterPosts, setFilterPosts] = useState([]);

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

		let result = [];
        let partition = [];
        for (let i=0; i< filterPosts.length; i++){
            partition.push(filterPosts[i]);
            if ((i+1)%3===0 || i === filterPosts.length-1) {
                result.push(partition);
                partition = [];
            }
        };

		return (
            result.length > 0 && 
			<Grid container style={{padding:'0px'}} className="grid-container-posts">
				{result.map((arr) => {
					return arr.map((item) => {
							return <Post item={item} key={item.id} accountView={accountView} deletePost={deletePost} />
						})
					})}
			</Grid>
			 ||<Row>
				<Col xs={12} className="center">
					No Posts Available
				</Col>
			</Row>
        );
    }

	return (
		<Fragment>
			{setAccountData()}
		</Fragment>
	);
	
}

export default Account;