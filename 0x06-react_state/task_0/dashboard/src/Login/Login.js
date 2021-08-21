import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const Login = () => {
	return (
		<>
			<main className={css(styles.appBody)}>
				<p>Login to access the full dashboard</p>
				<label>
					Email:
					<input type='email'></input>
				</label>
				<label>
					Password:
					<input type='password'></input>
				</label>
				<button type='button'>OK</button>
			</main>
		</>
	);
};

const screenSizes = {
	medium: '@media screen and (max-width: 900px)',
};

const styles = StyleSheet.create({
	appBody: {
		padding: '16px 14px',
		':nth-child(1n) > label': {
			paddingRight: '10px',
		},
		':nth-child(1n) > label input': {
			marginLeft: '10px',
		},
		':nth-child(1n) > button': {
			borderRadius: '5px',
			background: 'none',
			cursor: 'pointer',
		},
		[screenSizes.medium]: {
			padding: '0',
			':nth-child(1n) > label': {
				display: 'flex',
				padding: '1px',
			},
			':nth-child(1n) > label input': {
				border: 'none',
				margin: '0',
			},
			':nth-child(1n) > button': {
				margin: '1px',
				background: 'none',
			},
		},
	},
});

export default Login;
