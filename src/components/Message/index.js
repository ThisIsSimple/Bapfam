import React, {useEffect, useState} from "react";
import useChatroom from "./useChatroom";
import * as firebase from "firebase";
import Loading from "../Loading";
import Timestamp from "../Bapfam/Timestamp";
import {Link} from "react-router-dom";

const Message = () => {
    const {loading, chatrooms} = useChatroom({
        uid: firebase.auth().currentUser.uid
    });

    return (
        <section className="sub-container container d-flex justify-content-center align-items-start">
            <div style={{width: "100%"}}>
                <header id="notification-header" className="page-header header">
                    <h3 className="font-weight-bold">메세지</h3>
                </header>
                <hr className="m-0"/>
                <div className="list-group list-group-flush border-bottom">
                    {(loading)?(
                        <Loading/>
                    ):(
                        (chatrooms).map((value, index) => (
                            <Link to={`/message/detail/${value.id}`} key={index}
                                className="list-group-item list-group-item-action d-flex justify-content-start align-items-center">
                                <img
                                    src={value.image}
                                    className="profile-img shadow-sm mr-3"
                                />
                                <p className="m-0 text-truncate">
                                    <b>{value.title} ({value.participants.length}/{value.max})</b><br/>
                                    <small><Timestamp time={value.time}/></small>
                                </p>
                            </Link>
                        ))
                    )}
                </div>
            </div>
        </section>
    );
};

export default Message;