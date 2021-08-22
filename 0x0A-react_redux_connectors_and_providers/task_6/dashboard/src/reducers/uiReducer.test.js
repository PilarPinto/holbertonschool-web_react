import { uiReducer, initialState } from './uiReducer';
import { DISPLAY_NOTIFICATION_DRAWER, LOGIN } from '../actions/uiActionTypes';

describe('Reducer test', () => {
	it('InititalState and no action passed', () => {
		const state = uiReducer(initialState, {});
		expect(state).toEqual(initialState);
	});

	it('InitialState when SELECT_COURSE is passed', () => {
		const state = uiReducer(initialState, { type: 'SELECT_COURSE' });
		expect(state).toEqual(initialState);
	});

	it('InitialState updated when passing DISPLAY_NOTIFICATION_DRAWER', () => {
		const state = uiReducer(initialState, {
			type: DISPLAY_NOTIFICATION_DRAWER,
		});
		expect(state.toJS()).toEqual({
			...initialState.toJS(),
			isNotificationDrawerVisible: true,
		});
	});

	it('InitialState when LOGIN is passed', () => {
		const user = {
			email: 'email@email.com',
			password: '123456',
		};
		const state = uiReducer(initialState, {
			type: LOGIN,
			user,
		});

		expect(state.toJS()).toEqual({
			...initialState.toJS(),
			user,
		});
	});
});
