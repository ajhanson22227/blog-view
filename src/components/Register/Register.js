import React from 'react';
import './Register.css';

const Register = (props) => {
	const createUser = async (data) => {
		await fetch('http://localhost:3000/api/user/register', {
			method: 'POST',
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
				localStorage.setItem('auth-token', response.token);
				localStorage.setItem('user', JSON.stringify(response.user));
				props.setUser(response);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const handlesubmit = (event) => {
		event.preventDefault();
		const newUser = {
			first_name: event.target[0].value,
			last_name: event.target[1].value,
			username: event.target[2].value,
			password: event.target[3].value,
		};
		createUser(newUser);
	};

	return (
		<div className='form-container'>
			<form onSubmit={handlesubmit}>
				<label>
					First Name:
					<br />
					<input type='text' name='first_name' />
				</label>
				<br />
				<label>
					Last Name:
					<br />
					<input type='text' name='last_name' />
				</label>
				<br />
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

export default Register;
