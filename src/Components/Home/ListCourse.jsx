import React, { Component } from "react";
import Course from "./Course";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { connect } from "react-redux";
import { fetchCategory } from "../../Redux/Action/user";

const options = {
  items: 4,
};

class ListCourse extends Component {
  renderCategory() {
    const { courseCategory } = this.props;
    return courseCategory.map((item, index) => {
      return (
        <li className="nav-item" key={index}>
          <a className="nav-link active" data-toggle="tab" href="#mobile">
            {item.tenDanhMuc}
          </a>
        </li>
      );
    });
  }

  render() {
    return (
      <section className="container courses__section">
        <div className="courses__title">
          <h3>The world's largest selection of courses</h3>
          <p>
            Choose from 100,000 online video courses with new additions
            published every month
          </p>
        </div>
        <div className="courses__list">
          {/* nav tab*/}
          <ul className="nav nav-tabs">{this.renderCategory()}</ul>
          {/* tab */}
          <div className="tab-content">
            <div className="tab-pane active" id="mobile">
              <OwlCarousel
                className="owl-theme course__items"
                loop
                items="4"
                margin={10}
                nav
                autoPlay
              >
                <div class="item">
                  <Course />
                </div>
                <div class="item">
                  <Course />
                </div>
                <div class="item">
                  <Course />
                </div>
                <div class="item">
                  <Course />
                </div>
                <div class="item">
                  <Course />
                </div>
              </OwlCarousel>
            </div>
            <div className="tab-pane fade" id="frontend">
              <OwlCarousel
                className="owl-theme course__items"
                loop
                items="4"
                margin={10}
                nav
                autoPlay
              >
                <div class="item">
                  <Course />
                </div>
                <div class="item">
                  <Course />
                </div>
                <div class="item">
                  <Course />
                </div>
                <div class="item">
                  <Course />
                </div>
                <div class="item">
                  <Course />
                </div>
              </OwlCarousel>
            </div>
            <div className="tab-pane fade" id="backend">
              <OwlCarousel
                className="owl-theme course__items"
                loop
                items="4"
                margin={10}
                nav
                autoPlay
              >
                <div class="item">
                  <Course />
                </div>
                <div class="item">
                  <Course />
                </div>
                <div class="item">
                  <Course />
                </div>
                <div class="item">
                  <Course />
                </div>
                <div class="item">
                  <Course />
                </div>
              </OwlCarousel>
            </div>
            <div className="tab-pane fade" id="fullstack">
              <OwlCarousel
                className="owl-theme course__items"
                loop
                items="4"
                margin={10}
                nav
                autoPlay
              >
                <div class="item">
                  <Course />
                </div>
                <div class="item">
                  <Course />
                </div>
                <div class="item">
                  <Course />
                </div>
                <div class="item">
                  <Course />
                </div>
                <div class="item">
                  <Course />
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>
    );
  }
  componentDidMount() {
    this.props.dispatch(fetchCategory());
  }
}

const mapStateToProps = (state) => ({
  courseCategory: state.course.courseCategory,
});

export default connect(mapStateToProps)(ListCourse);
