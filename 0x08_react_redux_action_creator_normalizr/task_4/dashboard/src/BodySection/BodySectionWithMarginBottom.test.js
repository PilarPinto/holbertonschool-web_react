import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import { StyleSheetTestUtils } from 'aphrodite';

beforeAll(() => {
	StyleSheetTestUtils.suppressStyleInjection();
});
afterAll(() => {
	StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

const wrapper = shallow(
	<BodySectionWithMarginBottom title='test title'>
		<p>test children node</p>
	</BodySectionWithMarginBottom>
);

it('Renders without crashing', () => {
	shallow(<BodySectionWithMarginBottom />);
});

it('Finds bodySectionWithMargin class', () => {
	expect(wrapper.find('div#bodySectionWithMargin').exists()).equal(true);
});

describe('BodySection', () => {
	const BodySection = wrapper.find('BodySection');

	it('Finds BodySection as a child and its props', () => {
		expect(BodySection.exists()).equal(true);
		expect(BodySection.props().title).equal('test title');
	});

	it('BodySection content', () => {
		const BodySectionContent = BodySection.dive();
		expect(BodySectionContent.find('h2').length).equal(1);
		expect(BodySectionContent.find('h2').text()).equal('test title');
		expect(BodySectionContent.find('p').length).equal(1);
		expect(BodySectionContent.find('p').text()).equal('test children node');
	});
});
