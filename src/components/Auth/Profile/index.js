import React, {Fragment} from 'react';
import {FirebaseAuthConsumer} from "@react-firebase/auth";
import Loading from "../../Loading";
import {SuspenseWithPerf} from "reactfire";
import 'firebase/auth';
import Jumbotron from "../../Jumbotron";

class Profile extends React.Component {
    render() {
        return (
            <Fragment>
                <Jumbotron/>
                <section className="main-container container shadow d-flex justify-content-center align-items-center">
                    <div style={{width: '100%'}}>
                        <header id="search-header" className="header page-header">
                            <h3 className="font-weight-bold">프로필</h3>
                        </header>
                        <SuspenseWithPerf fallback={<Loading/>} traceId={'asdfasd'}>
                            <FirebaseAuthConsumer>
                                {({isSignedIn, user, providerId}) => {
                                    console.log(user);
                                    if (user !== null) {
                                        return (
                                            <section className="section text-center mb-5">
                                                <img src={user.photoURL} className="profile-img-lg male mb-3"/>
                                                <h4 className="font-weight-bold">{user.name}</h4>
                                                <p>소프트웨어융합학과 19학번</p>
                                                <p className="text-justify">
                                                    안녕하세요, 세상의 모든 밥을 먹어보기 위해 태어난 전윤민입니다. 초밥, 덮밥
                                                    등 일식 너무 좋아하구요! 짜장면 등 중식도 굉장히 좋아해요! 같이 밥 먹으러
                                                    갈 사람 손~
                                                </p>
                                                <div className="row">
                                                    <div className="col-10 col-md-6 col-lg-4 offset-md-3 offset-lg-4">
                                                        <table
                                                            className="table table-borderless text-left text-md-center">
                                                            <tbody>
                                                            <tr>
                                                                <th>성별</th>
                                                                <td>남</td>
                                                            </tr>
                                                            <tr>
                                                                <th>좋아하는 음식</th>
                                                                <td>초밥, 짜장면</td>
                                                            </tr>
                                                            <tr>
                                                                <th>싫어하는 음식</th>
                                                                <td>없음</td>
                                                            </tr>
                                                            <tr>
                                                                <th>성격 및 성향</th>
                                                                <td>외향적, 관종</td>
                                                            </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </section>
                                        );
                                    }
                                }}
                            </FirebaseAuthConsumer>
                        </SuspenseWithPerf>
                    </div>
                </section>
            </Fragment>
        );
    }
}

export default Profile;