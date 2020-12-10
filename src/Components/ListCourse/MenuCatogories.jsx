import React, { Component } from "react";
import { connect } from "react-redux";
// import { createAction } from "../../Redux/Action";
// import { FETCH_CATEGORY } from "../../Redux/Action/type";
// import { courseService } from "../../Services";
import {
  fetchCategory,
  fetchCoursesByCategory,
  getIdCategory,
} from "../../Redux/Action/user";

class MenuCatogories extends Component {
  renderCategory() {
    const { courseCategory } = this.props;
    return courseCategory.map((item, index) => {
      return (
        <li key={index}>
          <button
            className="btn"
            onClick={() => {
              this.props.dispatch(fetchCoursesByCategory(item.maDanhMuc));
            }}
          >
            <span>{item.tenDanhMuc}</span>
          </button>
        </li>
      );
    });
  }

  render() {
    return (
      <section className="menu__nav">
        <div className="container">
          <ul>{this.renderCategory()}</ul>
        </div>
      </section>
    );
  }
  componentDidMount() {
    //Lấy dữ liệu từ axios
    this.props.dispatch(fetchCategory());
    // this.props.dispatch(
    //   fetchCoursesByCategory(this.props.courseCategory.maKhoaHoc)
    // );
    // console.log(this.props.dispatch(fetchCategory()));
    // courseService
    //   .fetchCategory()
    //   .then((res) => {
    //     this.props.dispatch(createAction(FETCH_CATEGORY, res.data));
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }
}

const mapStateToProps = (state) => ({
  courseCategory: state.course.courseCategory,
});

// const mapDispatchToProps = (dispatch) => {
//   return {
//     getIdCategory: (id) => dispatch(getIdCategory(id)),
//   };
// };

export default connect(mapStateToProps)(MenuCatogories);
