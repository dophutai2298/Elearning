import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.scss";
import HomeScreen from "./Screens/Home";
import ListCourseScreen from "./Screens/ListCourse";
import DetailScreen from "./Screens/Detail";
import Signup from "./Screens/SignUp";
import Signin from "./Screens/SignIn";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Components/Layout/Header";
import Footer from "./Components/Layout/Footer";
import { connect } from "react-redux";
import { createAction } from "./Redux/Action";
import { FETCH_CREDENTIALS } from "./Redux/Action/type";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={HomeScreen} />
          <Route path="/list-course" exact component={ListCourseScreen} />
          <Route path="/detail/:courseId" exact component={DetailScreen} />
          <Route path="/sign-up" exact component={Signup} />
          <Route path="/sign-in" exact component={Signin} />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
  //Save in LocalStore for Login
  _getCreadentialFromLoCal = () => {
    const creadentialsStr = localStorage.getItem("creadentials");
    if (creadentialsStr) {
      this.props.dispatch(
        createAction(FETCH_CREDENTIALS, JSON.parse(creadentialsStr))
      );
    }
  };
  componentDidMount() {
    this._getCreadentialFromLoCal();
  }
}

export default connect()(App);
