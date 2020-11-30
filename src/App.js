import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from './components/HomePage/Homepage';
import PostPage from './components/PostPage/Postpage';
import PostsPage from './components/PostsPage/PostsPage';
import Navbar from './components/Navbar/Navbar';

const App = () => {
	return (
		<div>
			<Navbar />
			<Switch>
				<Route path='/' exact component={Homepage} />
				<Route path='/post/:id' exact component={PostPage} />
				<Route path='/posts' exact component={PostsPage} />
			</Switch>
		</div>
	);
};

export default App;
