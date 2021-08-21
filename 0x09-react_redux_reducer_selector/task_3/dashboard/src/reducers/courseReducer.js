import { FETCH_COURSE_SUCCESS } from '../actions/uiActionTypes';

export const courseReducer = (state = [], action) => {
	switch (action.type) {
		case FETCH_COURSE_SUCCESS:
			return action.data.map((each) => ({
				...each,
				isSelected: false,
			}));
		case 'SELECT_COURSE':
			return state.map((each) => {
				if (each.id === action.index) each.isSelected = true;
				return each;
			});
		case 'UNSELECT_COURSE':
			return state.map((each) => {
				if (each.id === action.index) each.isSelected = false;
				return each;
			});
		default:
			return state;
	}
};
