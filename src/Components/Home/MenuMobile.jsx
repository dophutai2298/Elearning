import React, { Component } from "react";

export default class MenuMobile extends Component {
  render() {
    return (
      <div className="header__mobile">
        <div className="row">
          <div className="col-2">
            <div className="header__menu--button">
              <span id="btn-openmenu">
                <i className="fas fa-th-list" />
              </span>
            </div>
          </div>
          <div className="col-8 ">
            <div className="header__mobile--logo">
              <a href>
                <img src="./images/logo-coral.svg" alt />
              </a>
            </div>
          </div>
          <div className="col-2">
            <div className="header__mobile--tool">
              <span>
                <i className="fa fa-search" />
              </span>
              <span>
                <i className="fa fa-shopping-cart" />
              </span>
            </div>
          </div>
          <div className="menu__mobile--list" id="menu--list">
            <div className="menu__mobile">
              <div className="menu__mobile--detail">
                <nav>
                  <span className="btnMobile--close" id="btn-closeMenu">
                    <i className="fas fa-times" />
                  </span>
                  <ul className="mobile__ul--login">
                    <li>
                      <a href>Log in</a>
                    </li>
                    <li>
                      <a href>Sign up</a>
                    </li>
                  </ul>
                  <div className="mobile__ul--item">
                    <p>Most popular</p>
                    <ul>
                      <li>
                        <span> Mobile Development</span>
                      </li>
                      <li>
                        <span> Front End Development</span>
                      </li>
                      <li>
                        <span> Back End Development</span>
                      </li>
                      <li>
                        <span> Fullstack Development</span>
                      </li>
                      <li>
                        <span>All categories</span>
                      </li>
                    </ul>
                  </div>
                  <div className="mobile__ul--more">
                    <p>More from Udemy</p>
                    <ul>
                      <li>
                        <a href>Udemy for Business</a>
                      </li>
                      <li>
                        <a href>Get the app</a>
                      </li>
                      <li>
                        <a href>Invite friends</a>
                      </li>
                      <li>
                        <a href>Help</a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
