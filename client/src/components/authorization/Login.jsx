import React from "react";
import './authorization.css';
import Input from "../input/Input";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../actions/user";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    return (
        <div className="authorization">
            <div className="authorization_header">Authorization</div>
            <Input value={email} setValue={setEmail} type="text" placeholder="Enter your E-Mail..."/>
            <Input value={password} setValue={setPassword} type="password" placeholder="Enter your password..."/>
            <button className="authorization_btn" onClick={() => dispatch(login(email, password))}>Login</button>
        </div>
    );
};

export default Login;