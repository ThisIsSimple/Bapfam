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
                {(bapfam.loading)?(
                    <Loading/>
                ):(
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
                                <form onSubmit={handleSubmit}>
                                    <div className="input-group mt-3">
                                        <input type="text" className="form-control" placeholder="메세지를 입력하세요."
                                               onChange={e => {
                                                   setChat(e.currentTarget.value)
                                               }}/>
                                        <div className="input-group-append">
                                            <button className="btn btn-primary" type="button" id="button-addon2">전송
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </Fragment>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MessageDetail;
