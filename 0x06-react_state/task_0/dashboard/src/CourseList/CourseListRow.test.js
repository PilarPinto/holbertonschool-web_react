import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import CourseListRow from './CourseListRow';
import { StyleSheetTestUtils } from 'aphrodite';

beforeAll(() => {
	StyleSheetTestUtils.suppressStyleInjection();
});
afterAll(() => {
	StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

it('Header is true', () => {
	const notSecondText = shallow(
		<CourseListRow
			isHeader={true}
			textFirstCell='First'
			textSecondCell={null}
		/>
	);
	const tr1 = notSecondText.find('tr').children();
	expect(tr1.find('th'));
	expect(tr1.length).equal(1);
	expect(tr1.prop('colSpan')).equal(2);

	const withSecondText = shallow(
		<CourseListRow
			isHeader={true}
			textFirstCell='First'
			textSecondCell='Second'
		/>
	);

	const tr2 = withSecondText.find('tr').children();
	expect(tr2.length).equal(2);
	expect(tr2.at(0).hasClass(/trTitle*/)).equal(true);
	expect(tr2.at(1).hasClass(/trTitle*/)).equal(true);
});

it('Header is false', () => {
	const wrapper = shallow(
		<CourseListRow
			isHeader={false}
			textFirstCell='First'
			textSecondCell='Second'
		/>
	);

	const tr = wrapper.find('tr').children();
	expect(tr.at(0).html()).equal('<td>First</td>');
	expect(tr.at(1).html()).equal('<td>Second</td>');
});
