import React, { Component } from "react";
import "../../App.scss";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

class Header extends Component {
  logout = () => {
    localStorage.removeItem("creadentials");
  };
  render() {
    return (
      <header className="header">
        <NavLink href="#" exact to="/">
          <img className="header__logo" src="./images/logo-coral.svg" alt />
        </NavLink>
        <nav class="header__nav">
          <NavLink
            style={{
              color: "#3c3b37",
              fontSize: "18px",
              textDecoration: "none",
            }}
            activeStyle={{
              color: "red",
              fontSize: "18px",
            }}
            exact
            to="/list-course"
            class="header__nav-link"
          >
            List course
          </NavLink>
        </nav>
        <div className="header__search">
          <span>
            <i className="fa fa-search" />
          </span>
          <input
            type="text"
            name="search"
            placeholder="Search for anything.."
          />
        </div>
        <div className="header__cart">
          <span>
            <i className="fa fa-shopping-cart" />
            <span className="text-danger" style={{ fontSize: "20px" }}>
              (0)
            </span>
          </span>
        </div>
        <div className="header__button">
          {this.props.credentials ? (
            <ul className="navbar-nav mr-auto">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="fa fa-user mr-2"></i>Hi!{" "}
                  {this.props.credentials.hoTen}
                </a>

                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">
                    <i class="fa fa-file-invoice"></i> Information
                  </a>
                  <div className="dropdown-divider" />
                  <button className="dropdown-item" onClick={this.logout}>
                    <i class="fa fa-file-export"></i> Logout
                  </button>
                </div>
              </li>
            </ul>
          ) : (
            <>
              <NavLink exact to="/sign-in">
                <button className="header__btn-login">Log in</button>
              </NavLink>
              <NavLink exact to="/sign-up">
                <button className="header__btn-signup">Sign up</button>
              </NavLink>
            </>
          )}
        </div>
      </header>
    );
  }
}

const mapStateTotProps = (state) => {
  return {
    credentials: state.user.credentials,
  };
};

export default connect(mapStateTotProps)(Header);
