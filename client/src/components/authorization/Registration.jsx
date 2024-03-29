import React from "react";
import './authorization.css';
import Input from "../input/Input";
import { registration } from "../../actions/user";
import { useState } from "react";

const Registration = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="authorization">
            <div className="authorization_header">Registration</div>
            <Input value={email} setValue={setEmail} type="text" placeholder="Enter your E-Mail..."/>
            <Input value={password} setValue={setPassword} type="password" placeholder="Enter your password..."/>
            <button className="authorization_btn" onClick={() => registration(email, password)}>Register</button>
        </div>
    );
};

export default Registration;