import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Header from './Header';
import { StyleSheetTestUtils } from 'aphrodite';

beforeAll(() => {
	StyleSheetTestUtils.suppressStyleInjection();
});
afterAll(() => {
	StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

const wrapper = shallow(<Header />);

it('Verifies rendering without crashing', () => {
	shallow(<Header />);
});

it('Verifies rendering img tag', () => {
	expect(wrapper.find('img').exists()).equal(true);
});

it('Verifies rendering h1 tag', () => {
	expect(wrapper.find('h1').exists()).equal(true);
});
