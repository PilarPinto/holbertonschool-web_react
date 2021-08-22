import { Map } from 'immutable';
import coursesNormalizer from '../schema/courses';
import {
	SELECT_COURSE,
	UNSELECT_COURSE,
	FETCH_COURSE_SUCCESS,
} from '../actions/courseActionTypes';

export const initialState = Map([]);

export const courseReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_COURSE_SUCCESS:
			const normalizedData = coursesNormalizer(action.data);
			for (const [k, v] of Object.entries(normalizedData)) {
				v.isSelected = false;
			}
			return state.merge(normalizedData);
		case SELECT_COURSE:
			return state.setIn([String(action.index), 'isSelected'], true);
		case UNSELECT_COURSE:
			return state.setIn([String(action.index), 'isSelected'], false);
		default:
			return state;
	}
};
