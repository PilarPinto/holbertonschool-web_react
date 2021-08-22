import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';
import { selectCourse, unSelectCourse } from './courseActionCreators';

describe('Action creators', () => {
	it('selectCourse', () => {
		const action = selectCourse(1);
		expect(action).toEqual({ type: SELECT_COURSE, index: 1 });
	});

	it('unSelectCourse', () => {
		const action = unSelectCourse(1);
		expect(action).toEqual({ type: UNSELECT_COURSE, index: 1 });
	});
});
