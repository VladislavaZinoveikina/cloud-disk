import React from "react";
import './navbar.css';
import Logo from '../../assets/img/pngimg.com - floppy_disk_PNG2.png';
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../reducers/userReducer";
import { getFiles, searchFiles } from "../../actions/file";
import { showLoader } from "../../reducers/appReducer";

const Navbar = () => {
    const isAuth = useSelector(state => state.user.isAuth);
    const currentDir = useSelector(state => state.files.currentDir)
    const dispatch = useDispatch();
    const [searchName, setSearchName] = useState('');
    const [searchTimeout, setSearchTimeout] = useState(false);

        function searchChangeHandler(e) {
            setSearchName(e.target.value)
            if (searchTimeout != false) {
                clearTimeout(searchTimeout)
            }
            dispatch(showLoader())
            if (e.target.value != '') { setSearchTimeout(setTimeout((value) => {
                dispatch(searchFiles(value))
            }, 500, e.target.value))
        } else {
            dispatch(getFiles(currentDir))
        }
    }

    return (
        <div className="navbar">
            <div className="container">
                <img src={Logo} alt="" className="navbar_logo"/>
                <div className="navbar_header" class="a" id="main">MERN CLOUD</div>
                {isAuth && <input
                value={searchName}
                onChange={e => searchChangeHandler(e)}
                className="navbar__search" 
                type="text" 
                placeholder="File name..."/>}
                {!isAuth && <div className="navbar_login" class="a" id="login"><NavLink to="/login">Login</NavLink></div> }
                {!isAuth && <div className="navbar_registration" class="a"><NavLink to="/registration">Registration</NavLink></div> }
                {isAuth && <div className="navbar_login" class="a" onClick={() => dispatch(logout())}>Exit</div> }
            </div>
        </div>
    );
};

export default Navbar;