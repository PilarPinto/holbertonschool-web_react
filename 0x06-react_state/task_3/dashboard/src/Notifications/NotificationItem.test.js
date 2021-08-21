import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';
import { StyleSheetTestUtils } from 'aphrodite';

beforeAll(() => {
	StyleSheetTestUtils.suppressStyleInjection();
});
afterAll(() => {
	StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

const wrapper = shallow(<NotificationItem />);

it('test that NotificationItem renders without crashing', () => {
	shallow(<NotificationItem />);
});

it('renders the correct html for type and value props', () => {
	const wrapper = shallow(<NotificationItem type='default' value='test' />);
	const li = wrapper.find('li');
	expect(li.exists()).toEqual(true);
	expect(li.text()).toEqual('test');
	expect(li.prop('data-notification-type')).toEqual('default');
});

it('renders the correct html for html prop', () => {
	const text = 'Here is the list of notifications';
	const wrapper = shallow(
		<NotificationItem html={{ __html: '<u>test</u>' }} />
	);
	const li = wrapper.find('li');
	expect(li.exists()).toEqual(true);
	expect(li.hasClass(/default*/)).toEqual(true);
});

describe('markAsRead', () => {
	const wrapper = shallow(
		<NotificationItem type='default' value='test' id={1} />
	);
	it('spy on it', () => {
		const instance = wrapper.instance();
		instance.markAsRead = jest.fn();
		const firstItem = wrapper.find('li').first();
		firstItem.simulate('click');
		instance.markAsRead(1);
		expect(instance.markAsRead).toHaveBeenCalledWith(1);
		jest.restoreAllMocks();
	});
});
