import React from 'react';
import './FeedPost.css';
import { Link } from 'react-router-dom';

const FeedPost = (props) => {
	return (
		<Link to={`/post/${props.post._id}`}>
			<span className='feedpost' style={{ display: 'block' }}>
				<div className='feedpost-center'>{props.post.title}</div>
				<div className='feedpost-center'>{props.post.text}</div>
				<div className='feedpost-info'>
					<div className='feedpost-center'>
						{props.post.comments} comments
					</div>
					<div className='feedpost-center'>{props.post.date}</div>
				</div>
			</span>
		</Link>
	);
};

export default FeedPost;
