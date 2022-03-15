import React from "react";
import { Navbar, NavItem} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Camera from '../image/camera.png'


function Nav(){
    return(
            <Navbar className="fixed-top" bg="dark">
                <img
                    src={Camera}
                    alt="camera"
                    width={120}
                ></img>
                <Navbar.Brand><NavLink style={{ textDecoration: 'none' }} to="HomePage"><span className="span1">PHOTO-ART</span></NavLink></Navbar.Brand>
                    <NavItem>
                        <NavLink style={{ textDecoration: 'none' }} to="Portrait"><span className="spanlink">PORTRAIT</span></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={{ textDecoration: 'none' }} to="Land"><span className="spanlink">LANDSCAPE</span></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={{ textDecoration: 'none' }} to="Product"><span className="spanlink">PRODUCT</span></NavLink>
                    </NavItem>
            </Navbar>
    );

}

export default Nav