import React, {Fragment} from "react";
import {useHistory, useLocation} from "react-router-dom";

import "./style.css";
import logo from "../../logo.svg";
import MessageButton from "./MessageButton";

const TopNav = () => {
    const {pathname} = useLocation();
    const history = useHistory();
    console.log(history);

    function goBack() {
        history.goBack();
    }

    return (
        <Fragment>
            {(pathname !== '/login') ? (
                <Fragment>
                    <section id="top-nav" className="bg-white shadow-sm">
                        <div className="container d-flex justify-content-between align-items-center">
                            {(pathname !== '/') ? (
                                <div className="p-3 text-center" onClick={goBack} style={{width: '48px'}}>
                                    <div><i className="fas fa-chevron-left"></i></div>
                                </div>
                            ) : (
                                <div className="p-3 text-center" style={{width: '48px'}}></div>
                            )}
                            <img src={logo} style={{width: 100}}/>
                            <div className="p-3 text-center" style={{width: '48px'}}>
                                <MessageButton/>
                            </div>
                        </div>
                    </section>
                    <div style={{height: '56px'}}></div>
                </Fragment>
            ) : (
                <Fragment/>
            )}
        </Fragment>
    );
};

export default TopNav;