import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { fetchCoursesByCategory } from "../../Redux/Action/user";
// import { connect } from "react-redux";

class CourseByCategory extends Component {
  render() {
    const { courseCategory } = this.props;
    return (
      <div className="col-sm-3 my-2">
        <div className="card">
          <h4 className="card-title">{courseCategory.tenKhoaHoc}</h4>
          <img
            className="card-img-top"
            style={{ height: "200px" }}
            src={courseCategory.hinhAnh}
            alt="Course IMG"
          />
          <div className="card-body">
            <div className="card__value">
              <div className="card__value--star">
                <span>
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </span>
              </div>
              <div className="card__value--price">
                <p>{courseCategory.ngayTao}</p>
              </div>
            </div>
            <a href="./detail.html">
              <div className="card__button">
                <NavLink
                  exact
                  to={`/detail/${this.props.courseCategory.maKhoaHoc}`}
                >
                  <button className="btnView">View More</button>
                </NavLink>
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.props.dispatch(
      fetchCoursesByCategory(this.props.courseCategory.maDanhMuc)
    );
  }
}

// const mapStateToProps = (state) => ({
//   courseList: state.course.courses,
//   courseByCategory: state.course.courseByCategory,
// });
export default CourseByCategory;
// export default connect()(CourseByCategory);
