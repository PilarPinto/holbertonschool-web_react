import React from "react";
import Login from "./Login";
import { shallow } from 'enzyme';

describe("Testing the behavior of App component", () => {
	    it("App renders without crashing", () => {
		            const wrapper = shallow(<Login />);
		            expect(wrapper.exists()).toEqual(true);
		        });
	    it("App renders App-body", () => {
		            const wrapper = shallow(<Login />);
		            wrapper.update();
		            expect(wrapper.children()).toHaveLength(6);
		        });

	    it("Login renders App-body", () => {
		 	    const wrapper = shallow(<Login />);
			    wrapper.update();
			    expect(wrapper.find("input")).toHaveLength(2);
			});
	    it("Login renders App-body", () => {
			    const wrapper = shallow(<Login />);
			    wrapper.update();
			    expect(wrapper.find("label")).toHaveLength(2);
			});
});