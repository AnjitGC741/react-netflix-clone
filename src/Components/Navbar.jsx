import React, { useEffect, useState } from "react";
import '../assests/Css/Navbar.css'
import Search from "./Search";
import netflixLogo from "../assests/Img/netflix-logo.png";
import userImage from "../assests/Img/user-img-1.png";
function Navbar(){
    const bgColor = {
        backgroundColor : '#141414',
    };
    const [show,handleShow]=useState(false);
    const transistionNavbar = ()=>{
        if(window.scrollY > 100){
            handleShow(true);
        }
        else{
            handleShow(false);
        }
    }
    useEffect(()=>{
            window.addEventListener("scroll",transistionNavbar);
            return()=>window.removeEventListener("scroll",transistionNavbar);
    },[]);
    return(
        <div className="navbar" style={(show)?bgColor : null}>
            <div className="logo-and-items">
                <div className="netflix-logo">
                        <img src={netflixLogo} alt="a netflix logo" />
                </div>
                <div className="netflix-items">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">TV Shows</a></li>
                        <li><a href="#">Movies</a></li>
                        <li><a href="#">Documentries</a></li>
                        <li><a href="#">Latest</a></li>
                    </ul>
                </div>
            </div>
            <div className="search-and-userImage">
            <Search/>
            <img src={userImage} alt="" />
            </div>
        </div>
    );
}
export default Navbar;