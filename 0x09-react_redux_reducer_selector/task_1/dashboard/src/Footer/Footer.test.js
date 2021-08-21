import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Footer from './Footer';
import { user, logOut, AppContext } from '../App/AppContext';

const wrapper = shallow(<Footer />);

it('Verifies rendering without crashing', () => {
	shallow(<Footer />);
});

// it('Verifies that the components at the very least render the text “Copyright”', () => {
// 	expect(wrapper.last().text().split(' ')[0]).equal('Copyright');
// });

it('Logout within the context', () => {
	const wrapper = shallow(
		<AppContext.Provider value={{ user, logOut }}>
			<Footer />
		</AppContext.Provider>
	);
	expect(wrapper.find('footer a').exists()).equal(false);
});
