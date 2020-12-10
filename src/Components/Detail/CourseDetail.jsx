import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchDetail } from "../../Redux/Action/user";

class CourseDetail extends Component {
  render() {
    const { courseDetail } = this.props;
    return (
      <section className="banner">
        <div className="banner__content">
          <div className="banner__content--title">
            <h3>{courseDetail.tenKhoaHoc}</h3>
          </div>
          <div className="banner__content--detail">
            <p>{courseDetail.moTa}</p>
            <div className="banner__content--rating">
              <div className="rating_star">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
              <span>4.8</span>
              <span> (42152)</span>
            </div>
            <p>{courseDetail.danhMucKhoaHoc.tenDanhMucKhoaHoc}</p>
          </div>
        </div>
        <div className="buyCourse">
          <div className="buyCourse__detial">
            <div className="buyCourse__detail--img">
              <img src={courseDetail.hinhAnh} alt="img" />
            </div>
            <div className="buyCourse__price">
              <p>$12.99</p>
            </div>
            <div className="buyCourse__detail--button">
              <button className="btn__detail btn--cart">Add to Cart</button>
              <button className="btn__detail btn--buynow">Buy Now</button>
              <span>30-Day Money-Back Guarantee </span>
            </div>
            <div className="buyCourse__detail--info">
              <p>Course's name: {courseDetail.tenKhoaHoc}</p>
              <p>Create day: {courseDetail.ngayTao}</p>
              <p>Member: {courseDetail.soLuongHocVien}</p>
              <p>Teacher: {courseDetail.nguoiTao.hoTen}</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  componentDidMount() {
    //Viết lại trong action, đưa lên store và sever
    this.props.dispatch(fetchDetail(this.props.match.params.courseID));
  }
}

const mapStateToProps = (state) => ({
  //Lần load đầu tiên chưa load dữ liệu thì lấy object..(chưa hiểu lắm chỗ này???)
  courseDetail: state.course.courseDetail || {
    maKhoaHoc: "",
    tenKhoaHoc: "",
    moTa: "",
    hinhAnh: "",
    ngayTao: "",
    soLuongHocVien: "",
    nguoiTao: {
      taiKhoan: "",
      hoTen: "",
    },
    danhMucKhoaHoc: {
      tenDanhMucKhoaHoc: "",
    },
  },
});

export default connect(mapStateToProps)(CourseDetail);
