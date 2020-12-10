import React, { Component } from "react";

export default class Intro extends Component {
  render() {
    return (
      <section className="intro__section intro__1">
        <div className="intro__content">
          <div className="row">
            <div className="col-md-4">
              <div className="intro__detail">
                <div className="intro__detail--icon">
                  <i className="fas fa-tv" />
                </div>
                <div className="intro__detail--content">
                  <p>100,000 online courses</p>
                  <p>Enjoy a variety of fresh topics</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="intro__detail">
                <div className="intro__detail--icon">
                  <i className="fas fa-award" />
                </div>
                <div className="intro__detail--content">
                  <p>Expert instruction</p>
                  <p>Find the right instructor for you</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="intro__detail">
                <div className="intro__detail--icon">
                  <i className="fas fa-infinity" />
                </div>
                <div className="intro__detail--content">
                  <p>Lifetime access</p>
                  <p>Learn on your schedule</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
