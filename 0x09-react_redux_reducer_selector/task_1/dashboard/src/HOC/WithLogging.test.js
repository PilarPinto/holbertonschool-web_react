import React from 'react';
import { mount } from 'enzyme';
import WithLogging from './WithLogging';
import Login from '../Login/Login';
import { StyleSheetTestUtils } from 'aphrodite';

describe('WithLogging HOC', () => {
	beforeAll(() => {
		StyleSheetTestUtils.suppressStyleInjection();
	});

	afterAll(() => {
		StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
	});
	it('When wrappedComponent.name is "Component" (pure html)', () => {
		const WrappedComponent = WithLogging(() => <p />);
		console.log = jest.fn();
		const wrapper = mount(<WrappedComponent />);
		expect(console.log).toHaveBeenCalled();
		expect(console.log).toHaveBeenCalledWith(
			'Component Component is mounted'
		);

		wrapper.unmount();
		expect(console.log).toHaveBeenCalled();
		expect(console.log).toHaveBeenCalledWith(
			'Component Component is going to unmount'
		);
	});

	it('When wrappedComponent.name is the Login Component', () => {
		const WrappedComponent = WithLogging(Login);
		console.log = jest.fn();
		const wrapper = mount(<WrappedComponent />);
		expect(console.log).toHaveBeenCalled();
		expect(console.log).toHaveBeenCalledWith('Component Login is mounted');

		wrapper.unmount();
		expect(console.log).toHaveBeenCalled();
		expect(console.log).toHaveBeenCalledWith(
			'Component Login is going to unmount'
		);
	});
});
