import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import { getLatestNotification } from '../utils/utils';
import { StyleSheetTestUtils } from 'aphrodite';

beforeAll(() => {
	StyleSheetTestUtils.suppressStyleInjection();
});
afterAll(() => {
	StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('When displayDrawer is true and listNotifications contains elements', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(
			<Notifications
				displayDrawer={true}
				listNotifications={[
					{ id: 1, type: 'default', value: 'New course available' },
					{ id: 2, type: 'urgent', value: 'New resume available' },
					{
						id: 3,
						type: 'urgent',
						html: { __html: getLatestNotification() },
					},
				]}
			/>
		);
	});

	it('test that Notifications renders without crashing', () => {
		shallow(<Notifications />);
	});

	it('verify that Notifications renders the text Here is the list of notifications', () => {
		expect(wrapper.find('p').text()).toEqual(
			'Here is the list of notifications'
		);
	});

	it('Renders it correctly and with the right number of NotificationItem', () => {
		expect(wrapper.find('NotificationItem').length).toEqual(3);
	});

	it('Check that the menu item is being displayed', () => {
		expect(wrapper.find('div#menuItem').exists()).toEqual(true);
	});

	it('Check that Notifications is being displayed', () => {
		expect(wrapper.find('div#Notifications').exists()).toEqual(true);
	});
});

describe('when displayDrawer is false', () => {
	const wrapper = shallow(<Notifications />);

	it('Check that the menu item is being displayed', () => {
		expect(wrapper.find('div#menuItem').exists()).toEqual(true);
	});

	it('Check that Notifications is not being displayed', () => {
		expect(wrapper.find('div#Notifications').exists()).toEqual(false);
	});
});

describe('when listNotifications is empty', () => {
	const wrapper = shallow(
		<Notifications displayDrawer={true} listNotifications={[]} />
	);

	it('Renders correclty', () => {
		const notificationItem = wrapper.find('NotificationItem');
		expect(notificationItem.exists()).toEqual(false);
		expect(notificationItem.length).toEqual(0);
	});

	it('No new notification for now is displayed instead of Here is the list of notifications', () => {
		expect(wrapper.find('p').text()).toEqual('No notifications for now');
	});
});

describe('MarkAsRead', () => {
	const wrapper = shallow(<Notifications displayDrawer />);
	it('mockup the console.log', () => {
		console.log = jest.fn();
		const instance = wrapper.instance();
		const id = 1;
		instance.markAsRead(id);
		expect(console.log).toHaveBeenCalledWith(
			`Notification ${id} has been marked as read`
		);
		jest.restoreAllMocks();
	});
});

describe('Updating the props of the component', () => {
	const listNotifications = [
		{ id: 1, value: 'New course available', type: 'default' },
	];
	const wrapper = shallow(
		<Notifications
			displayDrawer={true}
			listNotifications={listNotifications}
		/>
	);
	it("It doesn't rerender with the same list", () => {
		const shouldComponentUpdate = jest.spyOn(
			Notifications.prototype,
			'shouldComponentUpdate'
		);

		wrapper.setProps({ listNotifications: listNotifications });
		expect(shouldComponentUpdate).toHaveBeenCalled();
		expect(shouldComponentUpdate).toHaveLastReturnedWith(false);
		jest.restoreAllMocks();
	});

	it('It does rerender with a longer list', () => {
		const longerListNotifications = [
			{ id: 1, value: 'New course available', type: 'default' },
			{ id: 2, value: 'New resume available', type: 'urgent' },
			{
				id: 3,
				html: {
					__html: `${getLatestNotification()}`,
				},
				type: 'urgent',
			},
		];

		const shouldComponentUpdate = jest.spyOn(
			Notifications.prototype,
			'shouldComponentUpdate'
		);

		wrapper.setProps({ listNotifications: longerListNotifications });
		expect(shouldComponentUpdate).toHaveBeenCalled();
		expect(shouldComponentUpdate).toHaveLastReturnedWith(true);
		jest.restoreAllMocks();
	});
});

describe('handleDisplayDrawer and handleHideDrawer', () => {
	const handleDisplayDrawer = jest.fn();
	const handleHideDrawer = jest.fn();
	const wrapper = shallow(
		<Notifications
			displayDrawer
			handleDisplayDrawer={handleDisplayDrawer}
			handleHideDrawer={handleHideDrawer}
		/>
	);

	it('Verifies that clicking on the menu item calls handleDisplayDrawer', () => {
		wrapper.find('#menuItem').simulate('click');
		expect(handleDisplayDrawer).toHaveBeenCalled();
		jest.restoreAllMocks();
	});

	it('Verifies that clicking on on the button calls handleHideDrawer', () => {
		wrapper.find('#closeBtn').simulate('click');
		expect(handleHideDrawer).toHaveBeenCalled();
		jest.restoreAllMocks();
	});
});
