import React from 'react';
import BodySection from './BodySection';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

class BodySectionWithMarginBottom extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div
				className={css(styles.bodySectionWithMargin)}
				id='bodySectionWithMargin'
			>
				<BodySection {...this.props} />
			</div>
		);
	}
}

const styles = StyleSheet.create({
	bodySectionWithMargin: {
		marginBottom: '40px',
	},
});

BodySectionWithMarginBottom.defaultProps = {
	title: '',
};

BodySectionWithMarginBottom.propTypes = {
	title: PropTypes.string,
};

export default BodySectionWithMarginBottom;
