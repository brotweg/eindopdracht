import logo from "../assets/logo.png"
import styles from './Header.module.css'
import {Link, useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {AuthContext} from "./AuthContext";
import {useContext} from "react";
import UppercaseName from "./UppercaseName";
import uppercaseName from "./UppercaseName";

function Header() {
    const authContext = useContext(AuthContext);
    const { isAuth, logout, user, userName  } = authContext;
    const navigate = useNavigate();

    const handleLogOut = () => {
        logout();
    };


    return (
        <nav>
            <span className={styles['logo-container']}>
            <img src={logo} alt="logo" className={styles.logo}/>
            <Link to='/'><h1>DOGMATCH.NL</h1></Link>
            </span>
            {isAuth ? (
                <div className={styles['button_container']}>
                    <p>Hello, {uppercaseName(userName)}</p>
                    <button onClick={handleLogOut} className={styles['logout_button']}>Log out</button>
                </div>
            ) : (
                <button onClick={() => navigate('/inloggen')} className={styles['logout_button']}>Log in</button>
            )}
        </nav>

    );
};


export default Header;