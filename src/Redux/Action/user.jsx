import { createAction } from ".";
import { courseService } from "../../Services";
import {
  FETCH_CATEGORY,
  FETCH_COURSE,
  FETCH_COURSE_BY_CATEGORY,
  FETCH_COURSE_DETAIL,
  SEARCH_COURSE,
  SELECTED_COURSE,
  SELECTED_COURSE_CATEGORY,
} from "./type";

export const fetchCourses = () => {
  return (dispatch) => {
    courseService
      .fetchCourses()
      .then((res) => {
        // this.props=dispatch(tham so tren truyen vao)
        dispatch(createAction(FETCH_COURSE, res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const fetchDetail = (id) => {
  return (dispatch) => {
    courseService
      .fetchDetail(id)
      .then((res) => {
        dispatch(createAction(FETCH_COURSE_DETAIL, res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const fetchCategory = () => {
  return (dispatch) => {
    courseService
      .fetchCategory()
      .then((res) => {
        dispatch(createAction(FETCH_CATEGORY, res.data));
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const fetchCoursesByCategory = (id) => {
  return (dispatch) => {
    courseService
      .fetchCoursesByCategory(id)
      .then((res) => {
        dispatch(createAction(FETCH_COURSE_BY_CATEGORY, res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const searchCourse = (course) => {
  return {
    type: SEARCH_COURSE,
    payload: course,
  };
};

export const selectedCourse = (course) => {
  return {
    type: SELECTED_COURSE,
    payload: course,
  };
};

// export const selectedCourseCategory = (course) => {
//   return {
//     type: SELECTED_COURSE_CATEGORY,
//     payload: course,
//   };
// };
