const getCourses = (state) => {
	const courses = state.courses;

	if (courses) return courses.valueSeq();

	return courses;
};

export { getCourses };
