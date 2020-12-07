import React from 'react';
import { useHistory } from 'react-router-dom';

const Login = (props) => {
	let history = useHistory();
	const handleSubmit = (event) => {
		event.preventDefault();

		const login = async (data) => {
			await fetch('http://localhost:3000/api/user/login', {
				method: 'post',
				body: JSON.stringify(data),
				headers: {
					'Content-Type': 'application/json',
				},
			})
				.then((response) => {
					if (!response.ok) throw Error(response.statusText);
					else return response.json();
				})
				.then((response) => {
					localStorage.setItem('user', JSON.stringify(response.user));
					props.setUser(response.user);
					history.push('/');
				})
				.catch((error) => {
					console.log(error);
				});
		};

		const userInfo = {
			username: event.target[0].value,
			password: event.target[1].value,
		};
		login(userInfo);
	};

	return (
		<div className='form-container'>
			<form onSubmit={handleSubmit}>
				<label>
					Username:
					<br />
					<input type='text' name='username' />
				</label>
				<br />
				<label>
					Password:
					<br />
					<input type='text' name='password' />
				</label>
				<br />
				<input type='submit' value='Submit' />
			</form>
		</div>
	);
};

export default Login;
