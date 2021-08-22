import { fromJS } from 'immutable';
import {
	filterTypeSelected,
	getNotifications,
	getUnreadNotifciations,
} from './notificationSelector';
import {
	notificationReducer,
	initialState,
} from '../reducers/notificationReducer';
import { notificationsNormalizer } from '../schema/notifications';

describe('notifcationSelector', () => {
	it('filterTypeSelected', () => {
		const state = notificationReducer(initialState, {});
		const filter = filterTypeSelected(state);
		expect(filter).toEqual(initialState.toJS().filter);
	});

	it('getNotifications', () => {
		const state = notificationReducer(initialState, {});
		const notifications = getNotifications(state);
		expect(notifications).toEqual(initialState.toJS().notifications);
	});

	it('getUnreadNotifications', () => {
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
		};

		const data = notificationsNormalizer([
			{
				id: 2,
				isRead: true,
				type: 'urgent',
				value: 'New resume available',
			},
		]);

		state.notifications = notificationsNormalizer(
			state.notifications
		).notifications;

		const res = notificationReducer(fromJS(state), {});
		const unreadNotifications = getUnreadNotifciations(res);
		expect(unreadNotifications.toJS()).toEqual(data.notifications);
	});
});
