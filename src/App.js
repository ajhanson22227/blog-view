import React, { useEffect, useState } from 'react';
import Post from './components/Post';

//	***RETURNS CORRECT DATA***
function usePosts() {
	const [posts, setPosts] = useState(null);

	useEffect(() => {
		fetch(`http://localhost:3000/api/posts`)
			.then(function (response) {
				return response.json();
			})
			.then(function (response) {
				setPosts(response);
			});
	}, []);
	return posts;
}

const App = () => {
	const posts = usePosts();

	const handleClick = (e) => {
		console.log(posts);
	};

	return (
		<div>
			Helo Borld
			<button onClick={() => console.log('bing')}>unit</button>
			<button onClick={handleClick}>show</button>
		</div>
	);
};

export default App;
