import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getFullYear, getFooterCopy } from '../utils/utils';

export const mapStateToProps = (state) => ({
	user: state.ui.get('user'),
});

const Footer = ({ user }) => {
	return (
		<footer>
			<p>
				Copyright {getFullYear()} - {getFooterCopy(true)}
			</p>
			{user && <a href='#'>Contact us</a>}
		</footer>
	);
};

Footer.defaultProps = {
	user: null,
};

Footer.propTypes = {
	user: PropTypes.object,
};

export default connect(mapStateToProps, null)(Footer);
