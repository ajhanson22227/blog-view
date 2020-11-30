import React, { useState, useEffect } from 'react';
import FeedPost from '../HomePage/FeedPost';

const PostsPage = () => {
	const posts = usePosts();
	const postList = usePostList(posts);
	return <div className='container'>{postList}</div>;
};

function usePosts() {
	const [posts, setPosts] = useState(null);
	useEffect(() => {
		async function fetchPosts() {
			const response = await fetch('http://localhost:3000/api/posts');
			const data = await response.json();
			setPosts(data);
		}
		fetchPosts();
	}, []);
	return posts;
}
function usePostList(posts) {
	let postarray = [];
	for (let i in posts) {
		postarray.push(<FeedPost key={i} post={posts[i]} />);
	}
	return postarray;
}

export default PostsPage;

/*
const Post = (props) => {
	const { _id, title, text, date, comments } = props.post;
	const commentList = useCommentList(_id);

	return (
		<div>
			<div className='post'>
				<div className='post-title'>{title}</div>
				<div className='post-text'>{text}</div>
				<div className='post-text'>{date}</div>
				<div className='post-text'>{comments} comments</div>
			</div>
			<div className='comment-container'>{commentList}</div>
		</div>
	);
};

function useCommentList(postID) {
	const [comments, setComments] = useState(null);
	let commentList = [];

	useEffect(() => {
		async function fetchComments() {
			const response = await fetch(
				`http://localhost:3000/api/comment/${postID}`,
			);
			const data = await response.json();
			setComments(data);
		}
		fetchComments();
	}, [postID]);
	for (let i in comments) {
		commentList.push(
			<Comment key={i} comment={comments[i]} num={i} />,
		);
	}
	return commentList;
}

export default Post;

*/
