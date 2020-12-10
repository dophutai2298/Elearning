import React, { Component } from "react";
import Describle from "../../Components/Detail/Describle";

import { connect } from "react-redux";
import { fetchDetail } from "../../Redux/Action/user";
//  import Header from '../../Components/Layout/Header'
//  import Footer from '../../Components/Layout/Footer'

class DetailScreen extends Component {
  renderDetail = () => {
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
  };

  render() {
    const { courseDetail } = this.props;
    return (
      <div>
        {this.renderDetail()}
        <Describle />
      </div>
    );
  }
  componentDidMount() {
    this.props.dispatch(fetchDetail(this.props.match.params.courseId));
  }
}

const mapStateToProps = (state) => ({
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

export default connect(mapStateToProps)(DetailScreen);
