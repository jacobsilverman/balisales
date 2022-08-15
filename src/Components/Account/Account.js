
import { auth } from '../../firebase-config';
import { Row } from 'react-bootstrap';

import Post from '../Body/Post';

function Account({posts}) {
	const filterPosts = posts?.filter((ele) => {
		return ele.author.id === auth.currentUser?.uid;
	});

	return (
		<Row>
			{filterPosts?.map((item) => { return <Post item={item} key={item.id} />})}
		</Row>
	);
	
}

export default Account;