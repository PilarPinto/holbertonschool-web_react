import React from 'react';
import { StyleSheet, css } from 'aphrodite';

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
		this.handleChangeEmail = this.handleChangeEmail.bind(this);
		this.handleChangePassword = this.handleChangePassword.bind(this);
		this.state = {
			email: '',
			password: '',
			enabledSubmit: false,
		};
	}

	handleLoginSubmit(e) {
		e.preventDefault();
		const { email, password } = this.state;
		this.props.logIn(email, password);
	}

	handleChangeEmail(e) {
		if (!e.target.value.trim() || !this.state.password.trim()) {
			this.setState({ enabledSubmit: false });
		} else {
			this.setState({ enabledSubmit: true });
		}
		this.setState({ email: e.target.value });
	}

	handleChangePassword(e) {
		if (!this.state.email.trim() || !e.target.value.trim()) {
			this.setState({ enabledSubmit: false });
		} else {
			this.setState({ enabledSubmit: true });
		}
		this.setState({ password: e.target.value });
	}

	render() {
		return (
			<>
				<main className={css(styles.appBody)}>
					<p>Login to access the full dashboard</p>
					<form onSubmit={this.handleLoginSubmit}>
						<label>
							Email:
							<input
								type='email'
								name='email'
								id='email'
								value={this.state.email}
								onChange={this.handleChangeEmail}
							/>
						</label>

						<label>
							Password:
							<input
								type='password'
								name='password'
								id='password'
								value={this.state.password}
								onChange={this.handleChangePassword}
							/>
						</label>

						<input
							type='submit'
							id='sendBtn'
							disabled={!this.state.enabledSubmit}
						/>
					</form>
				</main>
			</>
		);
	}
}

const screenSizes = {
	medium: '@media screen and (max-width: 900px)',
};

const styles = StyleSheet.create({
	appBody: {
		padding: '16px 14px',
		':nth-child(1n) > form label': {
			paddingRight: '10px',
		},
		':nth-child(1n) > form label input': {
			marginLeft: '10px',
		},
		':nth-child(1n) > form input:nth-child(3)': {
			cursor: 'pointer',
		},
		[screenSizes.medium]: {
			padding: '0',
			':nth-child(1n) > form label': {
				display: 'flex',
				padding: '1px',
			},
			':nth-child(1n) > form label input': {
				border: 'none',
				margin: '0',
			},
			':nth-child(1n) > form input:nth-child(3)': {
				margin: '1px',
			},
		},
	},
});

export default Login;
