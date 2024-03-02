import React from "react";
import './navbar.css';
import Logo from '../../assets/img/pngimg.com - floppy_disk_PNG2.png';
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../reducers/userReducer";

const Navbar = () => {
    const isAuth = useSelector(state => state.user.isAuth);
    const dispatch = useDispatch();

    return (
        <div className="navbar">
            <div className="container">
                <img src={Logo} alt="" className="navbar_logo"/>
                <div className="navbar_header" class="a" id="main">MERN CLOUD</div>
                {!isAuth && <div className="navbar_login" class="a" id="login"><NavLink to="/login">Login</NavLink></div> }
                {!isAuth && <div className="navbar_registration" class="a"><NavLink to="/registration">Registration</NavLink></div> }
                {isAuth && <div className="navbar_login" class="a" onClick={() => dispatch(logout())}>Exit</div> }
            </div>
        </div>
    );
};

export default Navbar;