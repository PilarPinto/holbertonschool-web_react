import { Map } from 'immutable';
import { courseReducer } from './courseReducer';
import { FETCH_COURSE_SUCCESS } from '../actions/uiActionTypes';
import coursesNormalizer from '../schema/courses';

describe('courseReducer', () => {
	it('Default state return an empty array', () => {
		const state = courseReducer(Map([]), []);
		expect(state).toEqual(Map([]));
	});

	it('FETCH_COURSE_SUCCESS', () => {
		const action = {
			type: FETCH_COURSE_SUCCESS,
			data: [
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
			],
		};

		const data = coursesNormalizer([
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
		const state = courseReducer(Map([]), action);
		expect(state.toJS()).toEqual(data);
	});

	it('SELECT_COURSE', () => {
		const action = {
			type: 'SELECT_COURSE',
			index: 2,
		};

		const state = Map(
			coursesNormalizer([
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
			])
		);

		const data = coursesNormalizer([
			{
				id: 1,
				name: 'ES6',
				isSelected: false,
				credit: 60,
			},
			{
				id: 2,
				name: 'Webpack',
				isSelected: true,
				credit: 20,
			},
			{
				id: 3,
				name: 'React',
				isSelected: false,
				credit: 40,
			},
		]);

		const res = courseReducer(state, action);
		expect(res.toJS()).toEqual(data);
	});

	it('UNSELECT_COURSE', () => {
		const action = {
			type: 'UNSELECT_COURSE',
			index: 2,
		};
		const state = Map(
			coursesNormalizer([
				{
					id: 1,
					name: 'ES6',
					isSelected: false,
					credit: 60,
				},
				{
					id: 2,
					name: 'Webpack',
					isSelected: true,
					credit: 20,
				},
				{
					id: 3,
					name: 'React',
					isSelected: false,
					credit: 40,
				},
			])
		);

		const data = coursesNormalizer([
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

		const res = courseReducer(state, action);
		expect(res.toJS()).toEqual(data);
	});
});
