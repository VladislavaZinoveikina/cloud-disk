import React from "react";
import './navbar.css';
import Logo from '../../assets/img/pngimg.com - floppy_disk_PNG2.png';
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="container">
                <img src={Logo} alt="" className="navbar_logo"/>
                <div className="navbar_header" class="a" id="main">MERN CLOUD</div>
                <div className="navbar_login" class="a" id="login"><NavLink to="/login">Login</NavLink></div>
                <div className="navbar_registration" class="a" ><NavLink to="/registration">Registration</NavLink></div>
            </div>
        </div>
    );
};

export default Navbar;