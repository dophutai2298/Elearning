import {
  FETCH_CATEGORY,
  FETCH_COURSE,
  FETCH_COURSE_BY_CATEGORY,
  FETCH_COURSE_DETAIL,
  SEARCH_COURSE,
  SELECTED_COURSE,
} from "../Action/type";

let initialState = {
  courses: [],
  courseDetail: null,
  courseCategory: [],
  courseByCategory: null,
  selectedCourse: {},
  searchCourse: "",
};

const CourseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSE: {
      state.courses = action.payload;
      return { ...state };
    }
    case FETCH_COURSE_DETAIL: {
      state.courseDetail = action.payload;
      return { ...state };
    }
    case FETCH_CATEGORY: {
      state.courseCategory = action.payload;
      return { ...state };
    }
    case FETCH_COURSE_BY_CATEGORY: {
      state.courseByCategory = action.payload;
      return { ...state };
    }
    case SEARCH_COURSE: {
      return { ...state, searchCourse: action.payload };
    }
    case SELECTED_COURSE: {
      const course = { ...action.payload };
      return { ...state, selectedCourse: course };
    }
    // case SELECTED_COURSE_CATEGORY: {
    //   const course = { ...action.payload };
    //   return { ...state, selectedCourse: course };
    // }
    default:
      return state;
  }
};

export default CourseReducer;
