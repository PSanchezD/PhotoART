import React from "react";
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';


function Footer(){
    return (
        <div>
            <div className="row mx-0">
                <div>
                    <ul className="unorderList">
                        <a  style={{ textDecoration: 'none' }} href="https://www.facebook.com/" target='_blank'><li className="listlink"><FacebookIcon sx={{fontSize: 50}} className="icon" href="https://www.facebook.com/"/></li></a>
                        <a  style={{ textDecoration: 'none' }} href="https://www.instagram.com/?hl=en" target='_blank'><li className="listlink"><InstagramIcon sx={{fontSize: 50}} className="icon"/></li></a>
                        <a  style={{ textDecoration: 'none' }} href="https://www.pinterest.com/" target='_blank'><li className="listlink"><PinterestIcon sx={{fontSize: 50}} className="icon"/></li></a>
                    </ul>
                </div>
            </div>
            <div className="row mx-0">
                <div className="col-md-5"></div>
                 <div className="col">
                    <p className="ending">© 2022, by Pedro Sanchez.</p>
                </div>
            </div>
        </div>
    );
}
export default Footer;