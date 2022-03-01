import React, { Component } from "react";
import Nav from './Nav'
import Footer from './Footer'
import HomePage from './HomePage'
import Portrait from './Portrait'




class Main extends Component{
    constructor(props){
        super(props);
        this.state={};
    }

    render(){
        return(
            <div>
                <Nav/>
                <HomePage/>
                <Portrait/>
                <Footer/>
            </div>
    )};

}

export default Main;