import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Footer from './Footer';

const wrapper = shallow(<Footer />);

it('Verifies rendering without crashing', () => {
	shallow(<Footer />);
});

it('Verifies that the components at the very least render the text “Copyright”', () => {
	expect(wrapper.last().text().split(' ')[0]).equal('Copyright');
});
