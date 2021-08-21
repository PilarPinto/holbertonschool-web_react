import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import CourseList from './CourseList';
import { StyleSheetTestUtils } from 'aphrodite';

beforeAll(() => {
	StyleSheetTestUtils.suppressStyleInjection();
});
afterAll(() => {
	StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('With CourseList Empty', () => {
	const wrapper = shallow(<CourseList />);

	it('Verifies rendering without crashing', () => {
		shallow(<CourseList />);
	});

	it('Third row', () => {
		expect(wrapper.find('CourseListRow').at(2).html()).equal(
			'<tr><td>No course available yet</td><td></td></tr>'
		);
	});
});

describe('With CourseList containing elements', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(
			<CourseList
				listCourses={[
					{ id: 1, name: 'ES6', credit: 60 },
					{ id: 2, name: 'Webpack', credit: 20 },
					{ id: 3, name: 'React', credit: 40 },
				]}
			/>
		);
	});

	it('Checks all row exist', () => {
		expect(wrapper.find('CourseListRow')).to.have.lengthOf(5);
	});

	it('Third row', () => {
		expect(wrapper.find('CourseListRow').at(2).html()).equal(
			'<tr><td>ES6</td><td>60</td></tr>'
		);
	});

	it('Fourth row', () => {
		expect(wrapper.find('CourseListRow').at(3).html()).equal(
			'<tr><td>Webpack</td><td>20</td></tr>'
		);
	});

	it('Fifth row', () => {
		expect(wrapper.find('CourseListRow').at(4).html()).equal(
			'<tr><td>React</td><td>40</td></tr>'
		);
	});
});
