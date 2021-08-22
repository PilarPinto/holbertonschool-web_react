import * as notificationsData from '../../../../notifications.json';
import { normalize, schema } from 'normalizr';

const user = new schema.Entity('users');

const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });

const notification = new schema.Entity('notifications', {
	author: user,
	context: message,
});

const normalizedData = normalize(notificationsData.default, [notification]);

const getAllNotificationsByUser = (userId) => {
	const { users, messages, notifications } = normalizedData.entities;
	const lst = [];
	for (const i in notifications) {
		if (notifications[i].author === users[userId].id) {
			const context = notifications[i].context;
			lst.push(messages[context]);
		}
	}
	return lst;
};

const notificationsNormalizer = (data) => {
	const normalizedData = normalize(data, [notification]);
	return normalizedData.entities;
};

export { getAllNotificationsByUser, normalizedData, notificationsNormalizer };
