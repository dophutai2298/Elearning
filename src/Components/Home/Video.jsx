import React, { Component } from "react";

export default class Video extends Component {
  render() {
    return (
      <section className="video__section">
        <div className="video__section--content">
          <div className="video__content--link">
            <iframe
              src="https://www.youtube.com/embed/QFIhEmOd6No"
              frameBorder={0}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="video__content--title">
            <h3>Transform your life through education</h3>
            <p>
              Mohamad Alaloush launched a new career in software development by
              taking courses on Udemy. What will you be able to do?
            </p>
          </div>
        </div>
      </section>
    );
  }
}
