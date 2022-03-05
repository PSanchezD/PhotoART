import React from "react";
import { Navbar, NavItem, NavLink} from "react-bootstrap";
import Camera from '../image/camera.png'


function Nav(){
    return(
            <Navbar className="fixed-top" bg="dark">
                <img
                    src={Camera}
                    alt="camera"
                    width={120}
                ></img>
                <Navbar.Brand href="/"> <span className="span1">PHOTO-ART</span></Navbar.Brand>
                    <NavItem>
                        <NavLink><span className="spanlink">PORTRAIT</span></NavLink>
                    </NavItem>
                        <NavItem>
                    <NavLink  href="/"><span className="spanlink">LANDSCAPE</span></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink><span className="spanlink">PRODUCT</span></NavLink>
                    </NavItem>
            </Navbar>
    );
}
export default Nav