import React from "react";
import Notifications from "./Notifications";
import { shallow } from 'enzyme';

describe("Testing the behavior of Notification component", () => {
    it("Notifications renders without crashing", () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.exists());
    });
    it("Notifications renders close icon", () => {
        const wrapper = shallow(<Notifications />);
        wrapper.update();
        expect(wrapper.find(".close-button")).toHaveLength(1);
    });
    it("Notifications renders list", () => {
        const wrapper = shallow(<Notifications />);
        wrapper.update();
        expect(wrapper.find("li")).toHaveLength(3);
    });
    it("Notifications renders the item and first item", () => {
        const wrapper = shallow(<Notifications />);
        wrapper.update();
        const listItems = wrapper.find("NotificationItem");
        expect(listItems).toBeDefined();
        expect(listItems.first().html()).toEqual(
            '<li data-notification-type="default">New course available</li>'
        );
    });
});