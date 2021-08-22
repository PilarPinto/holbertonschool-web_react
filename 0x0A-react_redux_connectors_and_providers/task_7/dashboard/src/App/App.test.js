import React from 'react';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';
import { StyleSheetTestUtils } from 'aphrodite';
import App, { mapStateToProps } from './App';

describe('App component', () => {
	beforeAll(() => {
		StyleSheetTestUtils.suppressStyleInjection();
	});
	afterAll(() => {
		StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
	});

	it('test that App renders without crashing', () => {
		const wrapper = shallow(<App />);

		expect(wrapper.exists()).toEqual(true);
	});

	// it('It should contain the Notifications component', () => {
	// 	expect(wrapper.find('Notifications').exists()).toEqual(true);
	// });

	// it('It should contain the Header component', () => {
	// 	expect(wrapper.find('Header').exists()).toEqual(true);
	// });

	// it('It should contain the Login component', () => {
	// 	expect(wrapper.find('Login').exists()).toEqual(true);
	// });

	// it('It should contain the Footer component', () => {
	// 	expect(wrapper.find('Footer').exists()).toEqual(true);
	// });

	// it('CourseList not displayed - when is not logged in', () => {
	// 	expect(wrapper.find('CourseList').exists()).toEqual(false);
	// });
});

describe('App component redux', () => {
	it('mapStateToProps', () => {
		let state = fromJS({
			isUserLoggedIn: true,
			isNotificationDrawerVisible: true,
		});

		const result = mapStateToProps(state);

		const expectedResult = {
			isLoggedIn: true,
			displayDrawer: true,
		};

		expect(result).toEqual(expectedResult);
	});
});
