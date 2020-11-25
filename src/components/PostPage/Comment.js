import React from 'react';

const Comment = ({ comment, num }) => {
	console.log(comment);
	return (
		<div>
			<div>Hi I'm number {Number(num) + 1} and I say</div>
			<div>{comment.text}</div>
		</div>
	);
};

export default Comment;
