import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
	let tr;

	const [checkBox, setCheckBox] = useState(false);

	const handleCheckBox = () => {
		setCheckBox(!checkBox);
	};

	const headerBgColor = { backgroundColor: '#deb5b545' };
	const rowBgColor = { backgroundColor: '#f5f5f5ab' };

	isHeader
		? !textSecondCell
			? (tr = (
					<tr>
						<th
							colSpan={2}
							style={headerBgColor}
							className={css(styles.trTh)}
						>
							{textFirstCell}
						</th>
					</tr>
			  ))
			: (tr = (
					<tr style={rowBgColor}>
						<th className={css(styles.trTitle, styles.trTh)}>
							{textFirstCell}
						</th>
						<th className={css(styles.trTitle, styles.trTh)}>
							{textSecondCell}
						</th>
					</tr>
			  ))
		: (tr = (
				<tr className={checkBox && css(styles.rowChecked)}>
					<td>
						<input type='checkbox' onClick={handleCheckBox}></input>
						{textFirstCell}
					</td>
					<td>{textSecondCell}</td>
				</tr>
		  ));

	return tr;
};

const styles = StyleSheet.create({
	trTitle: {
		textAlign: 'left',
	},

	trTh: {
		borderBottom: '2px solid rgba(214, 199, 199, 0.7)',
	},

	rowChecked: {
		backgroundColor: '#e6e4e4',
	},
});

CourseListRow.defaultProps = {
	isHeader: false,
	textSecondCell: null,
};

CourseListRow.propTypes = {
	isHeader: PropTypes.bool,
	textFirstCell: PropTypes.string.isRequired,
	textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default CourseListRow;
