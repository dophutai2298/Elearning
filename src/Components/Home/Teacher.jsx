import React, { Component } from "react";

export default class Teacher extends Component {
  render() {
    return (
      <section className="teacher__section teacher__2">
        <div className="teacher__section--content">
          <div className="teacher__content-detail">
            <div className="teacher__content--img">
              <img src="./images/udlite-lohp-promo-teacher.jpg" alt />
            </div>
            <div className="teacher__content--information">
              <div className="teacher__information--title">
                <h3>Become an instructor</h3>
              </div>
              <div className="teacher__information--content">
                <p>
                  Top instructors from around the world teach millions of
                  students on Udemy. We provide the tools and skills to teach
                  what you love.
                </p>
              </div>
              <button className="teacher__btn">
                {" "}
                <a href>Lorem ipsum dolor sit</a>
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
