import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Header from './Header';
import { StyleSheetTestUtils } from 'aphrodite';
import { user, logOut, AppContext } from '../App/AppContext';

beforeAll(() => {
	StyleSheetTestUtils.suppressStyleInjection();
});
afterAll(() => {
	StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

const wrapper = shallow(
	<AppContext.Provider value={{ user, logOut }}>
		<Header />
	</AppContext.Provider>
);

it('Verifies rendering without crashing', () => {
	expect(wrapper.exists()).equal(true);
});

/* it('Verifies rendering img tag', () => {
	expect(wrapper.find('img').exists()).equal(true);
});

it('Verifies rendering h1 tag', () => {
	expect(wrapper.find('h1').exists()).equal(true);
}); */
