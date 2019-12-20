import React, {Fragment, useState} from "react";
import Loading from "../../Loading";
import {useParams} from "react-router-dom";
import useMessage from "../useMessage";

import "./style.css";
import * as firebase from "firebase";
import useBapfam from "../../Bapfam/useBapfam";

const MessageDetail = () => {
    const {id} = useParams();
    const [chat, setChat] = useState('');

    const bapfam = useBapfam(id);
    const {loading, messages} = useMessage({
        id: id
    });

    function handleSubmit(e) {
        e.preventDefault();

        firebase.firestore()
            .collection('bapfams').doc(id).collection('messages')
            .add({
                userId: firebase.auth().currentUser.uid,
                message: chat,
                createdAt: new Date()
            }).then(() => {
            setChat('');
        });
    }

    return (
        <section className="sub-container container d-flex justify-content-center align-items-start">
            <div style={{width: "100%"}}>
                {(bapfam.loading) ? (
                    <Loading/>
                ) : (
                    <header id="notification-header" className="page-header header">
                        <h3 className="font-weight-bold text-truncate">{bapfam.bapfam.title}</h3>
                    </header>
                )}
                <div id="chatroom-container" className="d-flex align-items-end">
                    <div id="chatroom">
                        {(loading) ? (
                            <Loading/>
                        ) : (
                            <Fragment>
                                {messages.map((value, index) => {
                                    return ((value.userId === firebase.auth().currentUser.uid) ? (
                                        <div key={index} className="text-right">
                                            <span className="badge badge-pill badge-primary">{value.message}</span>
                                        </div>
                                    ) : (
                                        <div key={index}>
                                            <span className="badge badge-pill badge-light">{value.message}</span>
                                        </div>
                                    ))
                                })}
                            </Fragment>
                        )}
                    </div>
                </div>
                <form onSubmit={handleSubmit}>
                    <div id="message-form" className="form-group pb-3 mb-0">
                        <input type="text" className="form-control" placeholder="메세지를 입력하세요."
                               value={chat}
                               onChange={e => {
                                   setChat(e.currentTarget.value)
                               }}/>
                        <button id="message-submit" className="btn btn-primary" type="submit"><i className="fas fa-arrow-up"></i></button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default MessageDetail;
