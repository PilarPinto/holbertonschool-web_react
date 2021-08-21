import {
	FETCH_NOTIFICATIONS_SUCCESS,
	MARK_AS_READ,
	SET_TYPE_FILTER,
} from '../actions/notificationActionTypes';
import { initialState, notificationReducer } from './notificationReducer';

describe('notifcationReducer', () => {
	it('Default state', () => {
		const state = notificationReducer(initialState, {});
		expect(state).toEqual(initialState);
	});

	it('FETCH_NOTIFICATIONS_SUCCESS', () => {
		const action = {
			type: FETCH_NOTIFICATIONS_SUCCESS,
			data: [
				{
					id: 1,
					type: 'default',
					value: 'New course available',
				},
				{
					id: 2,
					type: 'urgent',
					value: 'New resume available',
				},
				{
					id: 3,
					type: 'urgent',
					value: 'New data available',
				},
			],
		};

		const state = notificationReducer(initialState, action);
		expect(state).toEqual({
			filter: 'DEFAULT',
			notifications: [
				{
					id: 1,
					isRead: false,
					type: 'default',
					value: 'New course available',
				},
				{
					id: 2,
					isRead: false,
					type: 'urgent',
					value: 'New resume available',
				},
				{
					id: 3,
					isRead: false,
					type: 'urgent',
					value: 'New data available',
				},
			],
		});
	});

	it('MARK_AS_READ', () => {
		const action = {
			type: MARK_AS_READ,
			index: 2,
		};

		const state = {
			filter: 'DEFAULT',
			notifications: [
				{
					id: 1,
					isRead: false,
					type: 'default',
					value: 'New course available',
				},
				{
					id: 2,
					isRead: false,
					type: 'urgent',
					value: 'New resume available',
				},
				{
					id: 3,
					isRead: false,
					type: 'urgent',
					value: 'New data available',
				},
			],
		};
		const res = notificationReducer(state, action);
		expect(res).toEqual({
			filter: 'DEFAULT',
			notifications: [
				{
					id: 1,
					isRead: false,
					type: 'default',
					value: 'New course available',
				},
				{
					id: 2,
					isRead: true,
					type: 'urgent',
					value: 'New resume available',
				},
				{
					id: 3,
					isRead: false,
					type: 'urgent',
					value: 'New data available',
				},
			],
		});
	});

	it('SET_TYPE_FILTER', () => {
		const action = {
			type: SET_TYPE_FILTER,
			filter: 'URGENT',
		};

		const state = {
			filter: 'DEFAULT',
			notifications: [
				{
					id: 1,
					isRead: false,
					type: 'default',
					value: 'New course available',
				},
				{
					id: 2,
					isRead: false,
					type: 'urgent',
					value: 'New resume available',
				},
				{
					id: 3,
					isRead: false,
					type: 'urgent',
					value: 'New data available',
				},
			],
		};

		const res = notificationReducer(state, action);
		expect(res).toEqual({
			filter: 'URGENT',
			notifications: [
				{
					id: 1,
					isRead: false,
					type: 'default',
					value: 'New course available',
				},
				{
					id: 2,
					isRead: false,
					type: 'urgent',
					value: 'New resume available',
				},
				{
					id: 3,
					isRead: false,
					type: 'urgent',
					value: 'New data available',
				},
			],
		});
	});
});
