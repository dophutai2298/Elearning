import React, { Component } from "react";
import BannerMiddle from "../../Components/Home/BannerMiddle";
import Carousel from "../../Components/Home/Carousel";
import Client from "../../Components/Home/Client";
import Gallery from "../../Components/Home/Gallery";
// import Footer from '../../Components/Layout/Footer'
// import Header from '../../Components/Layout/Header'
import Intro from "../../Components/Home/Intro";
import ListCourse from "../../Components/Home/ListCourse";
import MenuMobile from "../../Components/Home/MenuMobile";
import Teacher from "../../Components/Home/Teacher";
import Video from "../../Components/Home/Video";

export default class HomeScreen extends Component {
  render() {
    return (
      <div>
        {/* <Header/> */}
        <MenuMobile />
        <Carousel />
        <Intro />
        <ListCourse />
        <BannerMiddle />
        <Gallery />
        <Teacher />
        <Client />
        <Video />
        {/* <Footer/> */}
      </div>
    );
  }
}
