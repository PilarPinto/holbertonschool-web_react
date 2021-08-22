import { fromJS } from 'immutable';
import { getCourses } from './courseSelector';

describe('courseSelector', () => {
	it('selector', () => {
		const state = {
			courses: fromJS([
				{
					id: 1,
					name: 'ES6',
					isSelected: false,
					credit: 60,
				},
				{
					id: 2,
					name: 'Webpack',
					isSelected: false,
					credit: 20,
				},
				{
					id: 3,
					name: 'React',
					isSelected: false,
					credit: 40,
				},
			]),
		};

		expect(getCourses(state).toJS()).toEqual([
			{
				id: 1,
				name: 'ES6',
				isSelected: false,
				credit: 60,
			},
			{
				id: 2,
				name: 'Webpack',
				isSelected: false,
				credit: 20,
			},
			{
				id: 3,
				name: 'React',
				isSelected: false,
				credit: 40,
			},
		]);
	});
});
