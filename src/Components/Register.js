import React, { useState } from 'react';
import '../css/Login.css';
import iclaugh from '../images/iclaugh.jpg';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

// These need to be imported in order for components to animate when switching between pages
import { motion } from 'framer-motion';
import { pageTransition, pageVariants, pageStyle } from './FrameMotion';

function Register() {
    const history = useHistory();
    
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [userName, setUserName] = useState("")

    const handleEmail = (e) => {
        setUserEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setUserPassword(e.target.value);
    }

    const handleName = (e) => {
        setUserName(e.target.value);
    }

    //Quick test to take email and password and name, and if successful, redirect to /Login
    const handleClick = () => {
        axios.post('http://localhost:4000/register', {
            email: userEmail,
            password: userPassword,
            name: userName
        })
        .then((res) => {
            if (res.data === "OK") {
                history.push('/Login');
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
                <div className="col-sm-6 px-0 d-none d-sm-block">
                    <img src={iclaugh} alt="Woman laughing" className="login-img" />
                </div>

                <div className="col-sm-6 login-section-wrapper">
                    <div className="brand-wrapper"></div>
                    <div className="login-wrapper my-auto">
                        <h1 className="login-title">Register</h1>
                        <form action="#!">
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input onChange={handleEmail} type="email" name="email" id="registerEmail" className="form-control"
                                    placeholder="email@example.com" />
                            </div>
                            <div className="form-group mb-4">
                                <label htmlFor="password">Password</label>
                                <input onChange={handlePassword} type="password" name="password" id="registerPass" className="form-control"
                                    placeholder="enter your passsword" />
                            </div>
                            <div className="form-group mb-4">
                                <label htmlFor="name">Name</label>
                                <input onChange={handleName} type="name" name="name" id="registerName" className="form-control"
                                    placeholder="enter your name" />
                            </div>
                            <input onClick={handleClick} name="register" id="registerBtn" className="btn btn-block login-btn" type="button" value="Register" />
                        </form>
                        <p className="login-wrapper-footer-text">Already have an account?<Link to="/Login"> Login here</Link></p>
                    </div>
                </div>

            </div>
        </motion.div>
    )
}

export default Register
