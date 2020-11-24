import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from './components/HomePage/Homepage';
import PostPage from './components/PostPage/Postpage';

const App = () => {
	return (
		<Switch>
			<Route path='/' exact component={Homepage} />
			<Route path='/post/:id' exact component={PostPage} />
		</Switch>
	);
};

export default App;
