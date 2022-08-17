
import { auth } from '../../firebase-config';
import { Container, Row } from 'react-bootstrap';

import Post from '../Body/Post';
import './Account.scss';

function Account({posts}) {
	const filterPosts = posts?.filter((ele) => {
		return ele.author.id === auth.currentUser?.uid;
	});

	return (
		<Container>
			<Row className="account-container">
				{filterPosts?.map((item) => { return <Post item={item} key={item.id} />})}
			</Row>
		</Container>
	);
	
}

export default Account;