import React from 'react';
import CourseListRow from './CourseListRow';
import PropTypes from 'prop-types';
import CourseShape from './CourseShape';
import { StyleSheet, css } from 'aphrodite';

const CourseList = ({ listCourses }) => {
	return (
		/* Had to done the main tag because of css styles */
		<main className={css(styles.mainMargin)}>
			<table id='CourseList' className={css(styles.CourseList)}>
				<thead>
					<CourseListRow
						textFirstCell='Available courses'
						isHeader={true}
					/>
					<CourseListRow
						textFirstCell='Course name'
						textSecondCell='Credit'
						isHeader={true}
					/>
				</thead>
				<tbody>
					{!listCourses.length ? (
						<CourseListRow
							textFirstCell='No course available yet'
							isHeader={false}
						/>
					) : (
						listCourses.map((eachCourse) => (
							<CourseListRow
								key={eachCourse.id}
								textFirstCell={eachCourse.name}
								textSecondCell={eachCourse.credit}
								isHeader={false}
							/>
						))
					)}
				</tbody>
			</table>
		</main>
	);
};

const styles = StyleSheet.create({
	mainMargin: {
		margin: '30px 60px',
	},

	CourseList: {
		width: '100%',
		border: '1px solid rgba(214, 199, 199, 0.6)',
		':nth-child(1n) > thead': {
			fontWeight: 'bolder',
		},
	},
});

CourseList.defaultProps = {
	listCourses: [],
};

CourseList.propTypes = {
	listCourses: PropTypes.arrayOf(CourseShape),
};

export default CourseList;
