import React from 'react';
import './FeedPost.css';
import { Link } from 'react-router-dom';

const FeedPost = (props) => {
	return (
		<div className='feedpost'>
			<div className='feedpost-center'>{props.post.title}</div>
			<div className='feedpost-center'>{props.post.text}</div>
			<div className='feedpost-info'>
				<div className='feedpost-center'>
					<Link to={`/post/${props.post._id}`}>
						{props.post.comments} comments
					</Link>
				</div>
				<div className='feedpost-center'>{props.post.date}</div>
			</div>
		</div>
	);
};

export default FeedPost;
