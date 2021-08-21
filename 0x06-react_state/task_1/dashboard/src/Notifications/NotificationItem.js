import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

class NotificationItem extends React.PureComponent {
	constructor(props) {
		super(props);
	}

	render() {
		const { type, html, value, markAsRead, id } = this.props;
		const charColor = css(
			type === 'default' ? styles.default : styles.urgent
		);
		return (
			<>
				<li
					className={charColor}
					data-notification-type={type}
					dangerouslySetInnerHTML={html}
					onClick={() => markAsRead(id)}
				>
					{value}
				</li>
			</>
		);
	}
}

const screenSizes = {
	medium: '@media screen and (max-width: 900px)',
};

const options = {
	fontSize: '20px',
	listStyle: 'none',
	borderBottom: '1px solid black',
	padding: '10px 8px',
	width: '100%',
	marginLeft: '-34px',
};

const styles = StyleSheet.create({
	default: {
		color: 'darkblue',
		[screenSizes.medium]: options,
	},

	urgent: {
		color: 'red',
		[screenSizes.medium]: options,
	},
});

NotificationItem.defaultProps = {
	type: 'default',
	markAsRead: () => {},
	id: NaN,
};

NotificationItem.propTypes = {
	html: PropTypes.shape({ _html: PropTypes.string }),
	type: PropTypes.string.isRequired,
	value: PropTypes.string,
	markAsRead: PropTypes.func,
	id: PropTypes.number,
};

export default NotificationItem;
