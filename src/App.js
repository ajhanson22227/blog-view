import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from './components/HomePage/Homepage';
import PostPage from './components/PostPage/Postpage';
import PostsPage from './components/PostsPage/PostsPage';
import Navbar from './components/Navbar/Navbar';

const App = () => {
	const [user, setUser] = useState(localStorage.getItem('user'));
	console.log(user);
	return (
		<div>
			<Navbar user={user} setUser={setUser} />
			<Switch>
				<Route path='/' exact component={() => <Homepage />} />
				<Route
					path='/post/:id'
					exact
					component={() => <PostPage user={user} />}
				/>
				<Route path='/posts' exact component={() => <PostsPage />} />
			</Switch>
		</div>
	);
};

export default App;
