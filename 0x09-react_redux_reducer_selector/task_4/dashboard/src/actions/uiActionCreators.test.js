import {
	LOGIN,
	LOGOUT,
	DISPLAY_NOTIFICATION_DRAWER,
	HIDE_NOTIFICATION_DRAWER,
} from './uiActionTypes';
import {
	login,
	logout,
	displayNotificationDrawer,
	hideNotificationDrawer,
} from './uiActionCreators';

describe('UI Action Creators', () => {
	it('login action', () => {
		const action = login('email@email.com', 'password');
		expect(action).toEqual({
			type: LOGIN,
			user: { email: 'email@email.com', password: 'password' },
		});
	});

	it('logout action', () => {
		const action = logout();
		expect(action).toEqual({ type: LOGOUT });
	});

	it('displayNotificationDrawer action', () => {
		const action = displayNotificationDrawer();
		expect(action).toEqual({ type: DISPLAY_NOTIFICATION_DRAWER });
	});

	it('hideNotificationDrawer action', () => {
		const action = hideNotificationDrawer();
		expect(action).toEqual({ type: HIDE_NOTIFICATION_DRAWER });
	});
});
