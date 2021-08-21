import React from 'react';
import logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';
import { AppContext } from '../App/AppContext';

class Header extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { user, logOut } = this.context;
		return (
			<>
				<header className={css(styles.appHeader)}>
					<img
						className={css(styles.logoStyle)}
						src={logo}
						alt='logo'
					></img>
					<div>
						<h1>School dashboard</h1>
						{user.isLoggedIn && (
							<p
								id='logoutSection'
								className={css(styles.logoutSection)}
							>
								Welcome <b>{user.email}</b>{' '}
								<span onClick={logOut}>(logout)</span>
							</p>
						)}
					</div>
				</header>
			</>
		);
	}
}

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

	logoutSection: {
		color: 'black',
		':nth-child(1n) > b': {
			color: '#ce314b',
		},
		':nth-child(1n) > span': {
			cursor: 'pointer',
			':hover': {
				fontWeight: 'bold',
			},
		},
	},
});

Header.contextType = AppContext;

export default Header;
