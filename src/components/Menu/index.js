import React from "react";
import * as firebase from "firebase";

const Menu = () => {
    function signOut() {
        firebase.auth().signOut();
        window.location.href='/login';
    }
    return (
        <section className="sub-container container d-flex justify-content-center align-items-start">
            <div style={{width: "100%"}}>
                <header id="notification-header" className="page-header header">
                    <h3 className="font-weight-bold">메뉴</h3>
                </header>
                <hr className="m-0"/>
                <div className="list-group list-group-flush border-bottom">
                    <div className="list-group-item list-group-item-action" onClick={signOut}>
                        로그아웃
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Menu;