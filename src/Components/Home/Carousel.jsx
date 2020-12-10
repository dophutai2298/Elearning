import React, { Component } from "react";

export default class Carousel extends Component {
  render() {
    return (
      <section className="carousel">
        <div className="container">
          <div className="carousel__content">
            <h1>Learn big. Spend less.</h1>
            <p>
              Explore the options and expand your world. Courses from $11.99
              through Aug 12.
            </p>
            <div className="carousel__content--search">
              <input
                type="text"
                name="search"
                placeholder="What do you want to learn?.."
              />
              <i className="fa fa-search" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
