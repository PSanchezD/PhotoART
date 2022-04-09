import React from "react";
import { Navbar, NavItem} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Camera from '../image/camera.png'


function Nav(){
    return(
            <Navbar className=" qweasd fixed-top justify-content-center" bg="dark" expand="sm" variant="dark">
                <div>
                    <img
                        className="logo"
                        src={Camera}
                        alt="camera"
                    ></img>
                </div>
                <Navbar.Brand className="navbar-brand-mr"><NavLink style={{ textDecoration: 'none' }} to="HomePage"><span className="span1">PHOTO-ART</span></NavLink></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                <NavItem>
                        <NavLink style={{ textDecoration: 'none' }} to="Portrait"><span className="spanlink">PORTRAIT</span></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={{ textDecoration: 'none' }} to="Land"><span className="spanlink">LANDSCAPE</span></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={{ textDecoration: 'none' }} to="Product"><span className="spanlink">PRODUCT</span></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={{ textDecoration: 'none' }} to="Post"><span className="spanlink">POST</span></NavLink>
                    </NavItem>
                </Navbar.Collapse>
            </Navbar>
    );

}

export default Nav