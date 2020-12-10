import React, { Component } from 'react'
//  import Footer from '../../Components/Layout/Footer'
//  import Header from '../../Components/Layout/Header'
import ListCourse from '../../Components/ListCourse/ListCourse'

import MenuCatogories from '../../Components/ListCourse/MenuCatogories'

export default class ListCourseScreen extends Component {
    render() {
        return (
            <div>
                {/* <Header/> */}
                <MenuCatogories/>
                <ListCourse/>
                {/* <Footer/> */}
            </div>
        )
    }
}
