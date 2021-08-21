import { Map } from 'immutable';
import coursesNormalizer from '../schema/courses';
import { FETCH_COURSE_SUCCESS } from '../actions/uiActionTypes';

export const courseReducer = (state = Map([]), action) => {
	switch (action.type) {
		case FETCH_COURSE_SUCCESS:
			const normalizedData = coursesNormalizer(action.data);
			for (const [k, v] of Object.entries(normalizedData)) {
				v.isSelected = false;
			}
			return state.merge(normalizedData);
		case 'SELECT_COURSE':
			return state.setIn([String(action.index), 'isSelected'], true);
		case 'UNSELECT_COURSE':
			return state.setIn([String(action.index), 'isSelected'], false);
		default:
			return state;
	}
};
