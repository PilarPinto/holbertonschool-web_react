import * as notificationsData from '../../../../notifications.json';

const getAllNotificationsByUser = (userId) => {
	return notificationsData.default
		.filter(({ author: { id } }) => id === userId)
		.map(({ context }) => context);
};

export default getAllNotificationsByUser;
