import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import { StyleSheet, css } from 'aphrodite';
import { user, AppContext } from './AppContext';

export const listNotificationsState = [
	{ id: 1, value: 'New course available', type: 'default' },
	{ id: 2, value: 'New resume available', type: 'urgent' },
	{
		id: 3,
		html: {
			__html: `${getLatestNotification()}`,
		},
		type: 'urgent',
	},
];

export const mapStateToProps = (state) => ({
	isLoggedIn: state.get('isUserLoggedIn'),
});

class App extends React.Component {
	constructor(props) {
		super(props);
		this.handleLogout = this.handleLogout.bind(this);
		this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
		this.handleHideDrawer = this.handleHideDrawer.bind(this);
		this.logIn = this.logIn.bind(this);
		this.logOut = this.logOut.bind(this);
		this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
		this.state = {
			displayDrawer: false,
			user,
			logOut: this.logOut,
			listNotifications: listNotificationsState,
		};
	}

	componentDidMount() {
		window.addEventListener('keydown', this.handleLogout);
	}

	componentWillUnmount() {
		window.removeEventListener('keydown', this.handleLogout);
	}

	handleLogout(e) {
		if (e.ctrlKey && e.key === 'h') {
			e.preventDefault();
			return alert('Logging you out');
			this.props.logOut();
		}
	}

	handleDisplayDrawer() {
		this.setState({ displayDrawer: true });
	}

	handleHideDrawer() {
		this.setState({ displayDrawer: false });
	}

	logIn(email, password) {
		this.setState({
			user: {
				email,
				password,
				isLoggedIn: true,
			},
		});
	}

	logOut() {
		this.setState({ user });
	}

	markNotificationAsRead(id) {
		this.setState({
			listNotifications: this.state.listNotifications.filter(
				(notification) => {
					return id !== notification.id;
				}
			),
		});
	}

	render() {
		const { user, displayDrawer, logOut, listNotifications } = this.state;

		const listCourses = [
			{ id: 1, name: 'ES6', credit: 60 },
			{ id: 2, name: 'Webpack', credit: 20 },
			{ id: 3, name: 'React', credit: 40 },
		];

		const isLogged = user.isLoggedIn ? (
			<BodySectionWithMarginBottom title={'Course list'}>
				<CourseList listCourses={listCourses} />
			</BodySectionWithMarginBottom>
		) : (
			<BodySectionWithMarginBottom title={'Log in to continue'}>
				<Login logIn={this.logIn} />
			</BodySectionWithMarginBottom>
		);
		return (
			<AppContext.Provider value={{ user, logOut }}>
				<Notifications
					listNotifications={listNotifications}
					displayDrawer={displayDrawer}
					handleDisplayDrawer={this.handleDisplayDrawer}
					handleHideDrawer={this.handleHideDrawer}
					markNotificationAsRead={this.markNotificationAsRead}
				/>
				<div className={css(styles.font)}>
					<Header />
					<div className={css(styles.bodySection)}>
						{isLogged}
						<BodySection title={'News from the School'}>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Quisque et neque ex. Praesent
								condimentum posuere ex, ut semper orci tempus a.
								Suspendisse sed lorem a ante lobortis tristique
								sed quis sapien. Pellentesque eleifend nisi
								neque, sed pellentesque est pellentesque eget.
								Suspendisse elementum gravida arcu, at
								scelerisque arcu euismod ultricies.
							</p>
						</BodySection>
					</div>
					<div className={css(styles.appFooter)}>
						<Footer />
					</div>
				</div>
			</AppContext.Provider>
		);
	}
}

const screenSizes = {
	medium: '@media screen and (max-width: 900px)',
};

const styles = StyleSheet.create({
	font: {
		fontFamily: 'sans-serif',
	},

	bodySection: {
		paddingLeft: '20px',
		[screenSizes.medium]: {
			margin: '5px 20px 15px',
			padding: '16px',
		},
	},

	appFooter: {
		position: 'fixed',
		textAlign: 'center',
		fontStyle: 'italic',
		borderTop: '3px solid #ce314b',
		bottom: '0',
		minWidth: '98.7%',
		[screenSizes.medium]: {
			position: 'inherit',
		},
	},
});

App.defaultProps = {
	isLoggedIn: false,
	logOut: () => null,
};

App.propTypes = {
	isLoggedIn: PropTypes.bool,
	logOut: PropTypes.func,
};

export default connect(mapStateToProps)(App);
