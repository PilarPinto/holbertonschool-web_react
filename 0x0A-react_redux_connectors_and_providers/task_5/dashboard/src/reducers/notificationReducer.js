import { Map } from 'immutable';
import {
	FETCH_NOTIFICATIONS_SUCCESS,
	MARK_AS_READ,
	SET_TYPE_FILTER,
	SET_LOADING_STATE,
} from '../actions/notificationActionTypes';
import { notificationsNormalizer } from '../schema/notifications';

export const initialState = Map({
	notifications: {},
	filter: 'DEFAULT',
	loading: false,
});

export const notificationReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_NOTIFICATIONS_SUCCESS:
			const normalizedData = notificationsNormalizer(action.data);
			for (const [k, v] of Object.entries(normalizedData.notifications)) {
				v.isRead = false;
			}
			return state.mergeDeep(normalizedData);
		case MARK_AS_READ:
			return state.setIn(
				['notifications', String(action.index), 'isRead'],
				true
			);
		case SET_TYPE_FILTER:
			return state.set('filter', action.filter);
		case SET_LOADING_STATE:
			return state.set('loading', action.loading);
		default:
			return state;
	}
};
