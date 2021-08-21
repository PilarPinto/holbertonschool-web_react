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

it('Verifies rendering 3 input tags, including the send button', () => {
	expect(wrapper.find('input').length).equal(3);
});

it('Verifies rendering 2 label tags', () => {
	expect(wrapper.find('label').length).equal(2);
});

it('Verifies that the button is disabled by default', () => {
	expect(wrapper.find('#sendBtn').prop('disabled')).equal(true);
});

it('Verifies that after changing the value of the two inputs, the button is enabled', () => {
	wrapper.find('#email').simulate('change', {
		target: { name: 'email', value: 'email@email.com' },
	});
	wrapper.find('#password').simulate('change', {
		target: { name: 'password', value: 'password' },
	});
	expect(wrapper.find('#sendBtn').prop('disabled')).equal(false);
});
