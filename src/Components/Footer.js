import React from "react";
import PinterestIcon from '@mui/icons-material/Pinterest';


function Footer(){
    return (
        <div className="Container-fluid bg-dark">
            <div className="row">
                <div className="offset-md-3">
                   <ul className="unorderList">
                       <li href="/"><span className="footerlist">Facebook</span></li>
                       <li href="/"><span className="footerlist">Instagram</span></li>
                       <li href="/"><PinterestIcon/><span className="footerlist">Pintrest</span>ç</li>
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