export const filterTypeSelected = (state) => state.get('filter');

export const getNotifications = (state) => state.get('notifications');

export const getUnreadNotifciations = (state) =>
	state
		.get('notifications')
		.filter((notification) => notification.get('isRead') === true);
