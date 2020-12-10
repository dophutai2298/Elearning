import React, { Component } from "react";

export default class BannerMiddle extends Component {
  render() {
    return (
      <section className="banner__section">
        <div className="banner__middle">
          <div className="banner__middle--content">
            <div className="banner__content--detail">
              <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse,
                officia.
              </p>
              <button className="banner--btn">
                <a href>Premiers pas</a>
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
