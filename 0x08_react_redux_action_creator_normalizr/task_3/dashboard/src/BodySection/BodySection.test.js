import React from 'react';
import { shallow } from 'enzyme';
import BodySection from './BodySection';
import { StyleSheetTestUtils } from 'aphrodite';

beforeAll(() => {
	StyleSheetTestUtils.suppressStyleInjection();
});
afterAll(() => {
	StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

const wrapper = shallow(
	<BodySection title='test title'>
		<p>test children node</p>
	</BodySection>
);

it('Renders without crashing', () => {
	shallow(<BodySection />);
});

it('Render correctly the children and one h2 element', () => {
	expect(wrapper.find('div#bodySection').exists()).toEqual(true);
	expect(wrapper.find('h2').length).toEqual(1);
	expect(wrapper.find('h2').text()).toEqual('test title');
	expect(wrapper.find('p').length).toEqual(1);
	expect(wrapper.find('p').text()).toEqual('test children node');
});
