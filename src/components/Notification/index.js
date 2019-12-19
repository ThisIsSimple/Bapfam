import React from "react";

const Notification = () => {
    return (
        <section className="notification-container container d-flex justify-content-center align-items-start">
            <div style={{width: "100%"}}>
                <header id="notification-header" className="page-header header">
                    <h3 className="font-weight-bold">알림</h3>
                </header>
                <hr className="m-0"/>
                <div className="list-group list-group-flush border-bottom">
                    <div className="list-group-item list-group-item-action">
                        <b>정새연</b> 님이 당신의 프로필을 좋아합니다.
                    </div>
                    <div
                        className="list-group-item list-group-item-action d-flex justify-content-center align-items-center">
                        <img
                            src="./images/profile2.jpg"
                            alt="profile"
                            className="profile-img shadow mr-3"
                        />
                        <p className="m-0">
                            <b>전윤민</b> 님이 <b>'저녁 긱식 같이 먹을 사람?'</b>에 참여하고
                            싶어합니다.
                        </p>
                        <button className="btn btn-primary btn-sm">승인하기</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Notification;