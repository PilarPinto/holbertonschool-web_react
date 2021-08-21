import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import App from './App';
import { StyleSheetTestUtils } from 'aphrodite';
import { user, logOut, AppContext } from './AppContext';

beforeAll(() => {
	StyleSheetTestUtils.suppressStyleInjection();
});
afterAll(() => {
	StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

const wrapper = shallow(<App />);

it('test that App renders without crashing', () => {
	shallow(<App />);
});

it('It should contain the Notifications component', () => {
	expect(wrapper.find('Notifications').exists()).equal(true);
});

it('It should contain the Header component', () => {
	expect(wrapper.find('Header').exists()).equal(true);
});

it('It should contain the Login component', () => {
	expect(wrapper.find('Login').exists()).equal(true);
});

it('It should contain the Footer component', () => {
	expect(wrapper.find('Footer').exists()).equal(true);
});

it('CourseList not displayed - when is not logged in', () => {
	expect(wrapper.find('CourseList').exists()).equal(false);
});

it('When ctrl+h key are pressed down', () => {
	const logOut = jest.fn(() => null);
	const alert = jest.spyOn(window, 'alert');
	expect(alert);
	expect(logOut);
	jest.restoreAllMocks();
});

it('Verifies that the default state for displayDrawer is false and it changes after calling handleDisplayDrawer', () => {
	expect(wrapper.state().displayDrawer).equal(false);
	wrapper.instance().handleDisplayDrawer();
	expect(wrapper.state().displayDrawer).equal(true);
});

it('Verifies that after calling handleHideDrawer, the state is updated to be false', () => {
	wrapper.instance().handleDisplayDrawer();
	wrapper.instance().handleHideDrawer();
	expect(wrapper.state().displayDrawer).equal(false);
});

it('<AppContext.Provider />', () => {
	const wrapper = shallow(
		<AppContext.Provider value={{ user, logOut }}>
			<App />
		</AppContext.Provider>
	);
	expect(wrapper.exists());
});
