import {
	MARK_AS_READ,
	SET_TYPE_FILTER,
	SET_LOADING_STATE,
	FETCH_NOTIFICATIONS_SUCCESS,
} from './notificationActionTypes';

export const markAsAread = (index) => ({
	type: MARK_AS_READ,
	index,
});

export const boundMarkAsAread = (index) => dispatch(markAsAread(index));

export const setNotificationFilter = (filter) => ({
	type: SET_TYPE_FILTER,
	filter,
});

export const boundSetNotificationFilter = (filter) =>
	dispatch(setNotificationFilter(filter));

export const setLoadingState = (loading) => ({
	type: SET_LOADING_STATE,
	loading,
});

export const setNotifications = (data) => ({
	type: FETCH_NOTIFICATIONS_SUCCESS,
	data,
});

export const fetchNotifications = () => {
	return (dispatch) => {
		dispatch(setLoadingState(true));
		return fetch('./notifications.json')
			.then((res) => res.json())
			.then((json) => dispatch(setNotifications(json)))
			.catch((error) => console.log(error.message))
			.finally(() => dispatch(setLoadingState(false)));
	};
};
