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
                            src="https://image.chosun.com/sitedata/image/201911/08/2019110801164_0.jpg"
                            className="profile-img shadow-sm mr-3"
                        />
                        <p className="m-0 text-truncate">
                            <b>말도 안돼 이걸 안 먹는다고?</b><br/>
                            <small>1분 전, 아 그건 아니다 진짜 ;;; ㄹㅇ 갑분싼데...</small>
                        </p>
                    </div>
                    <div
                        className="list-group-item list-group-item-action d-flex justify-content-start align-items-center">
                        <img
                            src="https://s3-ap-northeast-1.amazonaws.com/dcreviewsresized/20190923105856851_photo_f7e06227305f.jpg"
                            className="profile-img shadow-sm mr-3"
                        />
                        <p className="m-0 text-truncate">
                            <b>탕수육 먹고 싶다...</b><br/>
                            <small>어제, 아니 근데 사진은 왜 짬뽕인데 ㅋㅋㅋㅋ</small>
                        </p>
                    </div>
                    <div
                        className="list-group-item list-group-item-action d-flex justify-content-start align-items-center">
                        <img
                            src="https://s3-ap-northeast-1.amazonaws.com/dcreviewsresized/20190725092659_photo1_8b0075c3cc2a.jpg"
                            className="profile-img shadow-sm mr-3"
                        />
                        <p className="m-0 text-truncate">
                            <b>마라탕 드실 분?</b><br/>
                            <small>어제, 잠시만요. 저 그냥 탕수육 먹을 갈래요.</small>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Message;