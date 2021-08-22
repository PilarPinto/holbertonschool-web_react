export const filterTypeSelected = (state) => state.get('filter');

export const getNotifications = (state) => state.get('notifications');

export const getUnreadNotifications = (state) => {
	const notifications = state.notifications.get('messages');

	if (notifications)
		return notifications.filter((value) => value.get('isRead') === false);

	return notifications;
};
