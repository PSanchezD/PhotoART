import React, { Component } from "react";
import Nav from './Nav'
import Footer from './Footer'
import HomePage from './HomePage'
import Portrait from './Portrait'
import Land from './Landscape'
import Product from './Product'
import {BrowserRouter, Routes, Route} from 'react-router-dom'




class Main extends Component{
    constructor(props){
        super(props);
        this.state={};
    }

    render(){
        return(
            <BrowserRouter>
                    <Nav/>
                    <Routes>
                        <Route path="/HomePage" element={<HomePage/>}/>
                        <Route path="/Portrait" element={<Portrait/>}/>
                        <Route path="/Land" element={<Land/>}/>
                        <Route path="/Product" element={<Product/>}/>
                        <Route path="/" element={<HomePage/>}/>
                    </Routes>
                    <Footer/>
            </BrowserRouter>
    )};

}

export default Main;