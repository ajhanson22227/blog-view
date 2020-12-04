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
