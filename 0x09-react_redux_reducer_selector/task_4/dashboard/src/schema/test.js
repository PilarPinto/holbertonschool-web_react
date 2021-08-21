// const data = {
// 	filter: 'DEFAULT',
// 	notifications: [
// 		{
// 			id: 1,
// 			isRead: false,
// 			type: 'default',
// 			value: 'New course available',
// 		},
// 		{
// 			id: 2,
// 			isRead: false,
// 			type: 'urgent',
// 			value: 'New resume available',
// 		},
// 		{
// 			id: 3,
// 			isRead: false,
// 			type: 'urgent',
// 			value: 'New data available',
// 		},
// 	],
// };

// const x = () => ({
// 	...data,
// 	notifications: data.notifications.map((each) => ({ ...each, test: true })),
// });

// console.log(x());

import { Map } from 'immutable';
import coursesNormalizer from './courses.js';

const data = [
	{
		id: 1,
		name: 'ES6',
		credit: 60,
	},
	{
		id: 2,
		name: 'Webpack',
		credit: 20,
	},
	{
		id: 3,
		name: 'React',
		credit: 40,
	},
];

const normalizedData = coursesNormalizer(data);
// for (const i in normalizedData) {
// 	[normalizedData[i]].map((each) => {
// 		each.isSelected = false;
// 	});
// }
// Object.entries(normalizedData).map(([k, v]) => {
// 	v.isSelected = false;
// });
for (const [k, v] of Object.entries(normalizedData)) {
	v.isSelected = false;
}
const state = Map([]);
console.log(state.merge(normalizedData).toJS());
const x = Object.entries(state.toJS()).map(([k, v]) => {
	if (v.id === 2) state.toJS().setIn([2, 'isSelected'], true);
	return v;
});
console.log(x);
console.log(state.setIn([3, 'isSelected'], true).toJS());
