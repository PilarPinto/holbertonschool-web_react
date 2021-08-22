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
				{value ? (
					<li
						className={charColor}
						data-notification-type={type}
						onClick={() => markAsRead(id)}
					>
						{value}
					</li>
				) : (
					<li
						className={charColor}
						data-notification-type={type}
						dangerouslySetInnerHTML={html}
						onClick={() => markAsRead(id)}
					></li>
				)}
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
		cursor: 'pointer',
		[screenSizes.medium]: options,
	},

	urgent: {
		color: 'red',
		cursor: 'pointer',
		[screenSizes.medium]: options,
	},
});

NotificationItem.defaultProps = {
	type: 'default',
	value: '',
	html: {},
	markAsRead: () => {},
	id: NaN,
};

NotificationItem.propTypes = {
	html: PropTypes.shape({ _html: PropTypes.string }),
	type: PropTypes.string.isRequired,
	value: PropTypes.string,
	markAsRead: PropTypes.func,
	id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default React.memo(NotificationItem);
