import {
	LOGIN,
	LOGOUT,
	DISPLAY_NOTIFICATION_DRAWER,
	HIDE_NOTIFICATION_DRAWER,
	LOGIN_SUCCESS,
	LOGIN_FAILURE,
} from './uiActionTypes';

export const login = (email, password) => ({
	type: LOGIN,
	user: {
		email,
		password,
	},
});

export const boundLogin = (email, password) => dispatch(login(email, password));

export const logout = () => ({
	type: LOGOUT,
});

export const boundLogout = () => dispatch(logout());

export const displayNotificationDrawer = () => ({
	type: DISPLAY_NOTIFICATION_DRAWER,
});

export const boundDisplayNotificationDrawer = () =>
	dispatch(displayNotificationDrawer());

export const hideNotificationDrawer = () => ({
	type: HIDE_NOTIFICATION_DRAWER,
});

export const boundHideNotificationDrawer = () =>
	dispatch(hideNotificationDrawer());

export const loginSuccess = () => ({
	type: LOGIN_SUCCESS,
});

export const loginFailure = () => ({
	type: LOGIN_FAILURE,
});

export const loginRequest = async (email, password) => {
	return (dispatch) => {
		dispatch(login(email, password));
		try {
			const response = await fetch(
				'http://localhost:3000/login-success.json'
			);
			const result = await response.json();
			return dispatch(loginSuccess);
		} catch (error) {
			return dispatch(loginFailure);
		}
	};
};
