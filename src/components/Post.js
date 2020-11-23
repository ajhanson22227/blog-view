import React from 'react';
import './post.css';

const Post = (props) => {
	return (
		<div className='post'>
			<div className='post-center'>{props.post.title}</div>
			<div className='post-center'>{props.post.text}</div>
			<div className='post-info'>
				<div className='post-center'>
					<a href={`/posts/${props.post._id}`}>
						{props.post.comments.length} comments
					</a>
				</div>
				<div className='post-center'>{props.post.date}</div>
			</div>
		</div>
	);
};

export default Post;
