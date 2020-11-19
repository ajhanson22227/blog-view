import React from 'react';

const Post = (props) => {
	return (
		<div>
			<div>{props.post.title}</div>
			<div>{props.post.text}</div>
		</div>
	);
};

export default Post;
