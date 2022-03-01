import React from "react";
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';


function Footer(){
    return (
        <div className="Container-fluid bg-dark">
            <div className="row">
                <div className="offset-md-3">
                   <ul className="unorderList">
                       <li className="listlink"><FacebookIcon sx={{fontSize: 80}} className="icon" href="/"/><span className="footerlist">Facebook</span></li>
                       <li className="listlink"><InstagramIcon sx={{fontSize: 80}} className="icon"/><span className="footerlist">Instagram</span></li>
                       <li className="listlink"><PinterestIcon sx={{fontSize: 80}} className="icon"/><span className="footerlist">Pintrest</span></li>
                   </ul>
                </div>
                <div className="offset-6">
                    <p className="ending">© 2022, by Pedro Sanchez.</p>
                </div>
            </div>
        </div>
    );
}
export default Footer;