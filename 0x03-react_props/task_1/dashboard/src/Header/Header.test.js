import React from "react";
import Header from "./Header";
import { shallow } from 'enzyme';

describe("Testing the behavior of Header component", () => {
	    it("Header renders without crashing", () => {
		            const wrapper = shallow(<Header/>);
		            expect(wrapper.exists()).toEqual(true);
		        });
	    it("App renders App-header", () => {
		            const wrapper = shallow(<Header/>);
		            wrapper.update();
		            expect(wrapper.find(".App-header")).toHaveLength(1);
		        });
            it("Header have an image", () => {
			    const wrapper = shallow(<Header/>);
			    wrapper.update();
			    expect(wrapper.find("img")).toHaveLength(1);
			});
	    it("Header have an h1", () => {
			    const wrapper = shallow(<Header/>);
			    wrapper.update();
			    expect(wrapper.find("h1")).toHaveLength(1);
			});		
});
