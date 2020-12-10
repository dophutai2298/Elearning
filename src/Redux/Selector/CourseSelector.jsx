export const selectCourse = (state) => {
  const { courses, searchCourse } = state.course;
  return courses.filter(
    (course) => course.tenKhoaHoc.indexOf(searchCourse) !== -1
  );
};

// export const selectCourseCategory = (state) => {
//   const { courseCategory, searchCourse } = state.course;
//   return courseCategory.filter(
//     (course) => course.tenKhoaHoc.indexOf(searchCourse) !== -1
//   );
// };
