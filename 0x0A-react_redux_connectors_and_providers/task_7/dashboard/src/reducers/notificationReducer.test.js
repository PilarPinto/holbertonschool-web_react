import { Map } from 'immutable';
import {
	FETCH_NOTIFICATIONS_SUCCESS,
	MARK_AS_READ,
	SET_TYPE_FILTER,
} from '../actions/notificationActionTypes';
import { initialState, notificationReducer } from './notificationReducer';
import { notificationsNormalizer } from '../schema/notifications';

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

		const data = notificationsNormalizer([
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
		]);

		const state = notificationReducer(initialState, action);
		expect(state.toJS()).toEqual({ filter: 'DEFAULT', ...data });
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

		state.notifications = notificationsNormalizer(
			state.notifications
		).notifications;

		const data = notificationsNormalizer([
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
		]);

		const res = notificationReducer(Map(state), action);
		expect(res.toJS()).toEqual({ filter: 'DEFAULT', ...data });
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

		state.notifications = notificationsNormalizer(
			state.notifications
		).notifications;

		const data = notificationsNormalizer([
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
		]);

		const res = notificationReducer(Map(state), action);
		expect(res.toJS()).toEqual({ filter: 'URGENT', ...data });
	});
});
