import React, { Component } from "react";
import Course from "./Course";
import { connect } from "react-redux";
import { fetchCourses, fetchCoursesByCategory } from "../../Redux/Action/user";
import CourseByCategory from "./CourseByCategory";
import Search from "./Search";
import { selectCourse } from "../../Redux/Selector/CourseSelector";
// import { courseService } from "../../Services";
// import { FETCH_COURSE } from "../../Redux/Action/type";
// import { createAction } from "../../Redux/Action";

class ListCourse extends Component {
  render() {
    //Mới đầu vào kiểm tra nếu chưa có thì render tất cả khóa học
    if (!this.props.courseByCategory) {
      return (
        <section className="list">
          <div className="container">
            <div className="list__search">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                />
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fas fa-search" />
                  </span>
                </div>
              </div>
            </div>
            <div className="list__course">
              <div className="row">
                {this.props.courseList.map((item, index) => (
                  <Course key={index} item={item} />
                ))}
              </div>
            </div>
          </div>
        </section>
      );
    }
    return (
      <section className="list">
        <div className="container">
          <Search />
          <div className="list__course">
            <div className="row">
              {this.props.courseByCategory.map((item, index) => (
                <Course key={index} item={item} />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
  componentDidMount() {
    //Chuyển đổi dữ liệu. Để truyền data lên 2 đường Sever và Store,
    //Fix ko nhận đc data khi server trả về lúc chuyển component
    //Vừa đưa lên store, vừa tiến hành call API
    // this.props.dispatch(fetchCourses)
    this.props.dispatch(fetchCourses());
    // courseService.fetchCourses()
    // .then((res) => {
    // this.props.dispatch(createAction(FETCH_COURSE,res.data))
    // })
    // .catch((err) => {
    //   console.log(err);
    // });
  }
}

const mapStateToProps = (state) => ({
  // // courseList: state.course.courses,
  courseList: selectCourse(state),
  // courseByCategory: selectCourse(state),
  courseByCategory: state.course.courseByCategory,
});

export default connect(mapStateToProps)(ListCourse);
