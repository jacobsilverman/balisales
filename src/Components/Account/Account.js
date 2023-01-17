
import {Fragment,  useEffect, useState } from 'react';

import Grid from '@mui/material/Grid';
import { Col, Container, Row } from 'react-bootstrap';
import { ClipLoader } from 'react-spinners';

import Post from '../Body/Post';
import './Account.scss';

import { deleteUserPost, getUserInfo } from '../../Data/Services/userInfo';

import { getStorage, ref, getDownloadURL, deleteObject } from "firebase/storage";
import { doc, deleteDoc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase-config';

function Account() {
	const [filterPosts, setFilterPosts] = useState([]);

	useEffect(() => {
		getUserposts();
	}, []);

	const getUserposts = async () => {
		getUserInfo().then(async (info)  => {
			if (!info?.posts) {
				return null;
			}
			const allUserPost = info.posts.map(async (id) => {
				const postDoc = doc(db, "posts", id);
				const val = await getDoc(postDoc).then(async (doc) => {
					let parsedDoc = {...doc.data(), id: doc.id, urls: []};
					for (var i = 0; i<parsedDoc.numberOfImages; i++) {
						const storage = await getStorage();
						const listRef = ref(storage, `/PostImages/${id}/image-${i}`);
						await getDownloadURL(listRef)
						  .then((url) => {
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
				<Row>
					<Col xs={12} className="center">
						<ClipLoader size={150} />
					</Col>
				</Row>
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
            result.map((arr, index) => {
                return <Grid container spacing={0} key={index} style={{padding:'0px'}}>
                    {arr.map((item) => {
                        return <Post item={item} key={item.id} accountView={true} deletePost={deletePost} />
                    })}
                </Grid>
            }) ||
			<Row>
				<Col xs={12} className="center">
					<ClipLoader />
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