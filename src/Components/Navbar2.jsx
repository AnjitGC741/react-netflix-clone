import React from "react";
import netflixLogo from "../assests/Img/netflix-logo.png";
import "../assests/Css/Navbar2.css";
import {Link} from "react-router-dom";
export default function Navbar2({displayBtn}){
    const linkCss = {
        textDecoration: 'none',
        color:'#ffffff'
    }
    return(
        <div className="header">
            <img src={netflixLogo} alt="a netflix logo" />
             {displayBtn && <button class="signBtn"><Link style={linkCss} to="#">Sign In</Link></button>}

        </div>
    );
}