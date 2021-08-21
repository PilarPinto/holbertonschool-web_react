import React from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils';
import { AppContext } from '../App/AppContext';

const Footer = () => {
	return (
		<AppContext.Consumer>
			{(value) => (
				<footer>
					<p>
						Copyright {getFullYear()} - {getFooterCopy(true)}
					</p>
					{value.user.isLoggedIn && <a href='#'>Contact us</a>}
				</footer>
			)}
		</AppContext.Consumer>
	);
};

export default Footer;
