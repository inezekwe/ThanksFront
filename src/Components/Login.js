import React, { useState } from 'react';
import '../css/Login.css';
import jmhappy from '../images/jmhappy.jpg';
import { NavLink, useHistory } from 'react-router-dom';
import axios from 'axios';
import UserProfile from '../Components/UserProfile';

// These need to be imported in order for components to animate when switching between pages
import { motion } from 'framer-motion';
import { pageTransition, pageVariants, pageStyle } from './FrameMotion';


function Login() {
    const history = useHistory();
    
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");

    const handleEmail = (e) => {
        setUserEmail(e.target.value);
        //console.log(userEmail);
    }

    const handlePassword = (e) => {
        setUserPassword(e.target.value);
        //console.log(userPassword);
    }

    //Quick test to take email and password, and if successful, redirect to /Home
    const handleClick = () => {
        axios.post('http://localhost:4000/login', {
            email: userEmail,
            password: userPassword
        })
        .then((res) => {
            console.log(res);
            if (res.data.message === "OK") {
                UserProfile.setName(res.data.response[0].name);
                UserProfile.setId(res.data.response[0].id);
                console.log(UserProfile.getName() + UserProfile.getId());
                history.push('/Home');
            }
        })
    }

    return (
        <motion.div className="container-fluid"
            style={pageStyle}
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
        >
            <div className="row">
                <div className="col-sm-6 login-section-wrapper">
                    <div className="brand-wrapper"></div>
                    <div className="login-wrapper my-auto">
                        <h1 className="login-title">Log in</h1>
                        <form action="#!">
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input onChange={handleEmail} type="email" name="email" id="loginEmail" className="form-control"
                                    placeholder="email@example.com" />
                            </div>
                            <div className="form-group mb-4">
                                <label htmlFor="password">Password</label>
                                <input onChange={handlePassword} type="password" name="password" id="loginPass" className="form-control"
                                    placeholder="enter your passsword" />
                            </div>
                            <input onClick={handleClick} name="login" id="loginBtn" className="btn btn-block login-btn" type="button" value="Login" />
                        </form>
                        <p className="login-wrapper-footer-text">Don't have an account?
                                    <NavLink to="/Register"> Register</NavLink>
                        </p>

                    </div>
                </div>
                <div className="col-sm-6 px-0 d-none d-sm-block">
                    <img src={jmhappy} alt="Happy" className="login-img" />
                </div>
            </div>
        </motion.div>
    )
}

export default Login
