import React from 'react';
import logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';

const Header = () => {
	return (
		<>
			<header className={css(styles.appHeader)}>
				<img
					className={css(styles.logoStyle)}
					src={logo}
					alt='logo'
				></img>
				<h1>School dashboard</h1>
			</header>
		</>
	);
};

const screenSizes = {
	medium: '@media screen and (max-width: 900px)',
};

const styles = StyleSheet.create({
	appHeader: {
		display: 'flex',
		alignItems: 'center',
		backgroundColor: 'white',
		color: '#ce314b',
		borderBottom: '3px solid #ce314b',
		width: '100%',
		[screenSizes.medium]: {
			':nth-child(1n) > h1': {
				margin: '0',
				fontSize: '30px',
			},
		},
	},

	logoStyle: {
		width: '150px',
		height: '150px',
		[screenSizes.medium]: {
			width: '250px',
			height: '250px',
		},
	},
});

export default Header;
