import React, { useState,useRef } from "react";
import loginImg from "../../assests/Img/starting-page-img3.jpg";
import Navbar2 from "../Navbar2";
import "../../assests/Css/Login.css";
import {Link} from "react-router-dom";
import { useNavigate } from 'react-router';
export default function Login() {
  const navigateTo = useNavigate();
  const isEmailFieldClicked = useRef(false);
  const isPasswordFieldClicked = useRef(false);
  const [emptyEmail, setEmptyEmail] = useState();
  const [emptyPassword, setEmptyPassword] = useState();
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const inputBorderBottom = {
    borderBottom: "3px solid #e87c03",
  };
 const handleSubmit = (event)=>{
        event.preventDefault();
        setEmptyEmail(true);
        setEmptyPassword(true);
        if(email && password){
            navigateTo('/');
        }
 };
  return (
    <div className="login-main-div">
      <div className="background-img-login">
        <img src={loginImg} alt="" />
      </div>
      <div className="header-login-form">
        <Navbar2 displayBtn={false} />
        <div className="for-login-form">
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <input
              style={(emptyEmail && email === "") ?inputBorderBottom : null}
              type="text"
              onClick={() => {
                isEmailFieldClicked.current = true;
                if((password === "") && isPasswordFieldClicked.current){
                    setEmptyPassword(true);
                }
              }}
              onChange={(e)=>{
                setEmail(e.target.value);
            }}
              placeholder="Email or phone number"
              id="name-input"
            />
            {(emptyEmail && email === "")  && <p className="emptyFieldMsg">Please enter a valid email or phone number.</p>}
            <input
            style={(emptyPassword && password.length <= 3 )?inputBorderBottom:null}
              type="password"
              onClick={() => {
                isPasswordFieldClicked.current = true;
                if((email === "") && isEmailFieldClicked.current){
                    setEmptyEmail(true);
                }
             
            }}
            onChange={(e)=>{
                setPassword(e.target.value);
            }}
              placeholder="Password"
              id="name-input"
            />
            {(emptyPassword && password.length <= 3 ) && <p className="emptyFieldMsg">Your password must contain between 4 and 60 characters.</p>}
            <button className="submitBtn-login">Sign In</button>
            <div className="checkbox-needHelp-box">
              <div className="checkBox-box">
                <input type="checkbox" />
                <label className="rememberMe">
                  Remember me
                </label>
              </div>
              <a href="#" className="needHelp">
                Need help?
              </a>
            </div>
          </form>
          <p className="newToNetflix">
            New to Netflix?
            <a className="signUp needHelp" href="#">
              Sign up now
            </a>
            .
          </p>
          <p className="protectedText">
            This page is protected by Google reCAPTCHA to <br /> ensure you're
            not a bot.<a href="#">Learn more.</a>
          </p>
        </div>
        <div className="footer-login">
          <div className="footer-secondary-div">
            <a href="#" className="needHelp">
              Questions? Contact us.
            </a>
            <ul className="footerLinks-login">
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">Term of Use</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <a href="#">Cookie Preferences</a>
              </li>
              <li>
                <a href="#">Corporate Information</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
