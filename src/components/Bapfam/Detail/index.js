import React, {Fragment} from 'react';
import {useParams} from "react-router-dom";
import useBapfam from "../useBapfam";
import Loading from "../../Loading";

function Detail() {
    const {id} = useParams();
    const {loading, bapfam} = useBapfam(id);
    console.log(bapfam);

    const { title, userId, image, about, time, location, max} = bapfam;

    return (
        <Fragment>
            <div
                className="detail-jumbotron jumbotron jumbotron-fluid bg-light-purple d-flex justify-content-center align-items-center mb-0"
                style={{
                    background:
                        `linear-gradient( rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35) ), url(${image}) center center no-repeat`,
                    backgroundSize: "cover"
                }}
            >
                <div className="container">
                    <h1 className="display-5 font-weight-bold">{title}</h1>
                    <p className="mb-0">
                        <i className="fas fa-user mr-3"/>
                        2/{max}
                    </p>
                    <p className="mb-0">
                        <i className="fas fa-clock mr-3"/>
                        18:00
                    </p>
                    <p className="mb-0"><i className="fas fa-map-marker-alt mr-3"/>{location}</p>
                </div>
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
                            <div className="d-flex align-items-center mb-3">
                                <img
                                    src="./images/profile.jpg"
                                    alt="profile"
                                    className="profile-img-lg shadow mr-4"
                                />
                                <div>
                                    <h5 className="font-weight-bold mb-0">전윤민</h5>
                                    <p className="mb-0">소프트웨어융합학과 19학번</p>
                                </div>
                            </div>
                            <p>
                                저녁에 같이 긱식 먹으러 갈 사람 구해요~ 오늘 저녁 긱식은 참고로 한우
                                소고기 함박 스테이크에 콘 셀러드, 양송이 스프에요!
                            </p>
                        </section>
                    )}
                    <section className="card-section section mb-5">
                        <header className="header mb-4">
                            <h3 className="font-weight-bold">지금 찾고 있는 다른 밥팸</h3>
                        </header>
                        <div className="row">
                            <div className="col-6 col-lg-3">
                                <div className="card food-card">
                                    <img
                                        src="./images/food2.jpg"
                                        alt="food1"
                                        className="card-img-top"
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title font-weight-bold text-truncate">
                                            저녁 긱식 같이 먹을 사람
                                        </h5>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <p className="card-text mb-0">
                                                <i className="fas fa-user mr-1"/>
                                                2/4
                                            </p>
                                            <p className="card-text">
                                                <i className="fas fa-clock mr-1"/>
                                                18:00
                                            </p>
                                        </div>
                                        <div>
                                            <p className="card-text">
                                                <i className="fas fa-map-marker-alt mr-1"/>
                                                여자 기숙사 앞
                                            </p>
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        <a
                                            href="#"
                                            className="join-btn btn btn-primary btn-block text-center"
                                        >
                                            참여하기
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-lg-3">
                                <div className="card food-card">
                                    <img
                                        src="./images/food1.jpg"
                                        alt="food1"
                                        className="card-img-top"
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title font-weight-bold text-truncate">
                                            굽네치킨 땡기는 사람?
                                        </h5>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <p className="card-text mb-0">
                                                <i className="fas fa-user mr-1"/>
                                                3/4
                                            </p>
                                            <p className="card-text">
                                                <i className="fas fa-clock mr-1"/>
                                                22:30
                                            </p>
                                        </div>
                                        <div>
                                            <p className="card-text">
                                                <i className="fas fa-map-marker-alt mr-1"/>
                                                남자 기숙사 취식실
                                            </p>
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        <a
                                            href="#"
                                            className="join-btn btn btn-primary btn-block text-center"
                                        >
                                            참여하기
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="card-section section mb-5">
                        <header className="header mb-4">
                            <h3 className="font-weight-bold">내 주변에 있는 밥팸</h3>
                        </header>
                        <div className="row">
                            <div className="col-6 col-lg-3">
                                <div className="card food-card">
                                    <img
                                        src="./images/food2.jpg"
                                        alt="food1"
                                        className="card-img-top"
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title font-weight-bold text-truncate">
                                            저녁 긱식 같이 먹을 사람
                                        </h5>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <p className="card-text mb-0">
                                                <i className="fas fa-user mr-1"/>
                                                2/4
                                            </p>
                                            <p className="card-text">
                                                <i className="fas fa-clock mr-1"/>
                                                18:00
                                            </p>
                                        </div>
                                        <div>
                                            <p className="card-text">
                                                <i className="fas fa-map-marker-alt mr-1"/>
                                                여자 기숙사 앞
                                            </p>
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        <a
                                            href="#"
                                            className="join-btn btn btn-primary btn-block text-center"
                                        >
                                            참여하기
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-lg-3">
                                <div className="card food-card">
                                    <img
                                        src="./images/food1.jpg"
                                        alt="food1"
                                        className="card-img-top"
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title font-weight-bold text-truncate">
                                            굽네치킨 땡기는 사람?
                                        </h5>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <p className="card-text mb-0">
                                                <i className="fas fa-user mr-1"/>
                                                3/4
                                            </p>
                                            <p className="card-text">
                                                <i className="fas fa-clock mr-1"/>
                                                22:30
                                            </p>
                                        </div>
                                        <div>
                                            <p className="card-text">
                                                <i className="fas fa-map-marker-alt mr-1"/>
                                                남자 기숙사 취식실
                                            </p>
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        <a
                                            href="#"
                                            className="join-btn btn btn-primary btn-block text-center"
                                        >
                                            참여하기
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </Fragment>
    );
}

export default Detail;
