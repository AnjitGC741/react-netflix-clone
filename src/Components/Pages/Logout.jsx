import React from "react";
import Navbar2 from "../Navbar2";
import "../../assests/Css/Logout.css";
import logout from "../../assests/Img/logout-img.jpg";
import {Link} from "react-router-dom";
import { useNavigate } from 'react-router';
export default function Logout() {
  const navigateTo = useNavigate();
    const forMargin = {
        margin:'20px 0',
    }
    const linkCss = {
        textDecoration: 'none',
        color:'#ffffff'
    }
    setTimeout(()=>{
        navigateTo('/');
    },8000)
    return (
        <div className="logout-section">
            <div class="img-section">
                <img src={logout} alt="" />
            </div>
            <div class="header-logoutBox-footer">
            <Navbar2 displayBtn={true} /> 
            <div class="logoutBox">
                <h1 className="logout-page-header">Leaving So Soon?</h1>
                <p>Just so you know, you don't always need to sign<br/> out of Netflix. It's only necessary if you're on a<br/> shared or public computer.</p>
                <p style={forMargin}>You'll be redirected to Netflix.com in 30 seconds.</p>
                <button class="goNow-btn"><Link style={linkCss} to="/">GO NOW</Link></button>
            </div>
            <div class="footer-logout">
                <div>
                <p class="needHelp">Questions? Contact us.</p>
                <ul class="footerLinks-logout">
                    <li className="footer-links-logout">FAQ</li>
                    <li className="footer-links-logout">Help Center</li>
                    <li className="footer-links-logout">Term of Use</li>
                    <li className="footer-links-logout">Privacy</li>
                    <li className="footer-links-logout">Cookie Preferences</li>
                    <li className="footer-links-logout">Corporate Information</li>
                </ul>
                </div>
            </div>
            </div>
        </div>
    );
}