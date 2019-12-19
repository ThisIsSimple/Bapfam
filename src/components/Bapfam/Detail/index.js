import React, {Fragment} from 'react';
import {useParams} from "react-router-dom";
import useBapfam from "../useBapfam";
import Loading from "../../Loading";
import BapfamList from "../BapfamList";
import User from "../User";
import Timestamp from "../Timestamp";
import * as firebase from "firebase";
import Exist from "../../Exist";

function Detail() {
    const {id} = useParams();
    const {loading, bapfam, exist} = useBapfam(id);

    const {title, userId, image, about, time, location, max, participants, createdAt} = bapfam;

    function handleParticipate() {
        const uid = firebase.auth().currentUser.uid;
        if(!participants.includes(uid, 0)) {
            firebase.firestore().doc(`/bapfams/${id}`).set({
                ...bapfam,
                participants: participants.concat(uid)
            });
        }
    }

    return (
        <Fragment>
            <div
                className="detail-jumbotron jumbotron jumbotron-fluid bg-light-purple d-flex justify-content-center align-items-center mb-0"
                style={{
                    backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35) ), url(${image})`,
                    backgroundPosition: 'center center',
                    backgroundSize: 'cover'
                }}
            >
                <Exist exist={exist}/>
                {(!loading) ? (
                    <div className="container">
                        <h1 className="display-5 font-weight-bold">{title}</h1>
                        <p className="mb-0">
                            <i className="fas fa-user mr-3"/>
                            {participants.length + 1}/{max}
                        </p>
                        <p className="mb-0">
                            <i className="fas fa-clock mr-3"/>
                            <Timestamp time={time}/>
                        </p>
                        <p className="mb-0"><i className="fas fa-map-marker-alt mr-3"/>{location}</p>
                    </div>
                ) : (<div></div>)}
            </div>
            <section className="main-container container d-flex justify-content-center align-items-start">
                <div style={{width: "100%"}}>
                    <header id="detail-header" className="header page-header">
                        <h3 className="font-weight-bold">밥팸 상세정보</h3>
                    </header>
                    {(loading) ? (
                        <Loading/>
                    ) : (
                        <section className="section mb-5">
                            <User id={userId}/>
                            <p className="text-center mb-5">
                                {about}
                            </p>
                            <div className="mb-5">
                                {(() => {
                                    if(firebase.auth().currentUser.uid === userId) {
                                        return (<button className="btn btn-primary btn-lg btn-block disabled">나의 밥팸</button>);
                                    } else if (participants.includes(firebase.auth().currentUser.uid, 0)) {
                                        return (<button className="btn btn-primary btn-lg btn-block disabled">이미 참여중</button>);
                                    } else if (participants.length + 1 >= max) {
                                        return (<button className="btn btn-primary btn-lg btn-block disabled">마감됨</button>);
                                    } else {
                                        return (<button className="btn btn-primary btn-lg btn-block" onClick={handleParticipate}>참여하기</button>);
                                    }
                                })()}
                            </div>
                        </section>
                    )}

                    <section className="card-section section mb-5">
                        <header className="header mb-4">
                            <h3 className="font-weight-bold">내 주변에 있는 밥팸</h3>
                        </header>

                        <BapfamList limit={2}/>
                    </section>
                </div>
            </section>
        </Fragment>
    );
}

export default Detail;
