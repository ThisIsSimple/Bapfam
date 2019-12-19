import React from "react";
import {Link, useLocation} from "react-router-dom";

import "./style.css";

const Navbar = () => {
    const {pathname} = useLocation();
    console.log(pathname);

    return (
        <section id="menu-nav" className="bg-white shadow-lg d-flex justify-content-around">
            <Link to="/">
                <div className={'menu-item' + ((pathname === '/')?" active":"")}>
                    <i className="fas fa-home"/>
                </div>
            </Link>
            <Link to="/notification">
                <div className={'menu-item' + ((pathname === '/notification')?" active":"")}>
                    <i className="fas fa-bell"/>
                </div>
            </Link>
            <Link to="/bapfam/create">
                {((pathname === '/bapfam/create')?(
                <div className="menu-item menu-plus d-flex justify-content-center align-items-center shadow-lg">
                    <i className="fas fa-check" style={{ fontSize: '0.8em' }}></i>
                </div>
                ):(
                <div className="menu-item menu-plus d-flex justify-content-center align-items-center shadow-lg">
                    <i className="fas fa-plus" style={{ fontSize: '0.8em' }}></i>
                </div>
                ))}
            </Link>
            <Link to="/profile">
                <div className={'menu-item' + ((pathname.includes('/profile'))?" active":"")}>
                    <i className="fas fa-user"/>
                </div>
            </Link>
            <Link to="/menu">
                <div className={'menu-item' + ((pathname === '/menu')?" active":"")}>
                    <i className="fas fa-bars"/>
                </div>
            </Link>
        </section>
    );
};

export default Navbar;