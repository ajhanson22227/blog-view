import React from 'react';

const Comment = ({ comment, num }) => {
	return (
		<div className='comment'>
			<div>{comment.text}</div>
		</div>
	);
};

export default Comment;
