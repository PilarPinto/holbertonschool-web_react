import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Login from './Login';
import { StyleSheetTestUtils } from 'aphrodite';

beforeAll(() => {
	StyleSheetTestUtils.suppressStyleInjection();
});
afterAll(() => {
	StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

const wrapper = shallow(<Login />);

it('Verifies rendering without crashing', () => {
	shallow(<Login />);
});

it('Verifies rendering 2 input tags', () => {
	expect(wrapper.find('input').length).equal(2);
});

it('Verifies rendering 2 label tags', () => {
	expect(wrapper.find('label').length).equal(2);
});
