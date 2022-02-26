import React from "react";
import { Navbar, NavItem, NavLink} from "react-bootstrap";
import Camera from './camera.png'


function Nav(){
    return(
        <div>
            <Navbar bg="dark">
                <img
                    src={Camera}
                    alt="camera"
                    width={150}
                ></img>
                <Navbar.Brand href="/" alignItem="center"> <span className="span1">PHOTOSHOT</span></Navbar.Brand>
                    <NavItem className="offset-5">
                        <NavLink><span className="spanlink">PORTRAIT</span></NavLink>
                    </NavItem>
                        <NavItem>
                    <NavLink  href="/"><span className="spanlink">LANDSCAPE</span></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink><span className="spanlink">PRODUCT</span></NavLink>
                    </NavItem>
            </Navbar>
        </div>
    );
}
export default Nav