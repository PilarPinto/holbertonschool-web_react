import { uiReducer, initialState } from './uiReducer';
import { DISPLAY_NOTIFICATION_DRAWER } from '../actions/uiActionTypes';

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
});
