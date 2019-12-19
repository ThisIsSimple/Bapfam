import React from "react";

const Message = () => {
    return (
        <section className="sub-container container d-flex justify-content-center align-items-start">
            <div style={{width: "100%"}}>
                <header id="notification-header" className="page-header header">
                    <h3 className="font-weight-bold">메세지</h3>
                </header>
                <hr className="m-0"/>
                <div className="list-group list-group-flush border-bottom">
                    <div
                        className="list-group-item list-group-item-action d-flex justify-content-start align-items-center">
                        <img
                            src="./images/profile2.jpg"
                            alt="profile"
                            className="profile-img shadow-sm mr-3"
                        />
                        <p className="m-0 text-truncate">
                            <b>말도 안돼 이걸 안 먹는다고?</b><br/>
                            <small>1분 전, 아 그건 아니다 진짜 ;;; ㄹㅇ 갑분싼데...</small>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Message;