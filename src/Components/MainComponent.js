import React, { Component } from "react";
import Nav from './Nav'
import Footer from './Footer'
import HomePage from './HomePage'
import Portrait from './Portrait'
import Land from './Landscape'
import {BrowserRouter, Routes,Route} from 'react-router-dom'




class Main extends Component{
    constructor(props){
        super(props);
        this.state={};
    }

    render(){
        return(
            <BrowserRouter>
                    <Nav/>
                    <HomePage/>
                    <Footer/>
            </BrowserRouter>
    )};

}

export default Main;