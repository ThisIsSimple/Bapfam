import React, {useState} from 'react';
import * as firebase from "firebase";
import moment from "moment";
import {useHistory} from "react-router-dom";
import GoogleImages from 'google-images';

const Create = (props) => {
    const [title, setTitle] = useState('');
    const [about, setAbout] = useState('');
    const [time, setTime] = useState(moment().format().substr(0, 19));
    const [max, setMax] = useState(2);
    const [menu, setMenu] = useState('');
    const [location, setLocation] = useState('');
    const [query, setQuery] = useState('');
    const [images, setImages] = useState([]);
    const [image, setImage] = useState('');

    const history = useHistory();

    const client = new GoogleImages('002285728342784930524:btmq2clbpcw', 'AIzaSyCaB7h6bq_89if3cj1W3l9wr9U6lvmyUAM');

    function handleSubmit(e) {
        e.preventDefault();

        const data = {
            title, about, time, menu, max, location, image
        };

        firebase.firestore()
            .collection('/bapfams')
            .add({
                ...data,
                participants: [],
                userId: firebase.auth().currentUser.uid,
                createdAt: new Date()
            })
            .then(res => {
                history.replace(`/bapfam/${res.id}`);
            });
    }

    function handleImageSearch(e) {
        if (e.which === 13) {
            e.preventDefault();
            client.search(query, {
                type: 'photo'
            })
                .then(images => {
                    setImages(images);
                });
        }
    }

    function handleImage(e) {
        setImage(e.currentTarget.src);
        setQuery(e.currentTarget.src);
        setImages([]);
    }

    return (
        <section className="sub-container container shadow d-flex justify-content-center align-items-start">
            <div style={{width: '100%'}}>
                <header id="search-header" className="header page-header">
                    <h3 className="font-weight-bold">새로운 밥팸 생성</h3>
                </header>
                <section className="card-section section mb-5">
                    <header className="header mb-4">
                        <h3 className="font-weight-bold">밥팸 정보</h3>
                    </header>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="titleInput">밥팸 이름</label>
                            <input
                                name="title"
                                type="text"
                                className="form-control"
                                id="titleInput"
                                placeholder="매력적인 이름으로 밥팸을 어필하세요!"
                                value={title}
                                onChange={e => {
                                    setTitle(e.currentTarget.value)
                                }}
                                required
                                autoFocus={true}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="dateInput">식사 날짜</label>
                            <input type="datetime-local" className="form-control"
                                   value={time}
                                   onChange={e => {
                                       setTime(e.currentTarget.value)
                                   }}
                                   required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="menuInput">식사 메뉴</label>
                            <input
                                type="text"
                                className="form-control"
                                id="menuInput"
                                placeholder="어떤 메뉴를 먹을 건가요?"
                                value={menu}
                                onChange={e => {
                                    setMenu(e.currentTarget.value)
                                }}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="maxInput">식사 인원</label>
                            <input
                                type="number"
                                className="form-control"
                                id="maxInput"
                                placeholder="몇명이 식사하나요?"
                                value={max}
                                min={2}
                                onChange={e => {
                                    setMax(e.currentTarget.value)
                                }}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="locationInput">식사 장소</label>
                            <input
                                name="place"
                                type="text"
                                className="form-control"
                                id="locationInput"
                                placeholder="밥팸을 어디서 진행하실 건가요?"
                                value={location}
                                onChange={e => {
                                    setLocation(e.currentTarget.value)
                                }}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="aboutInput">밥팸 소개</label>
                            <textarea
                                name="about"
                                className="form-control"
                                id="aboutInput"
                                rows={5}
                                placeholder="나의 밥팸을 소개하세요! ex) 식사 장소, 취향, 분위기, 식사량 등등..."
                                value={about}
                                onChange={e => {
                                    setAbout(e.currentTarget.value)
                                }}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="imageInput">이미지</label>
                            <input
                                type="text"
                                className="form-control"
                                id="imageInput"
                                placeholder="내 밥팸에 맞는 이미지를 검색해서 넣으세요! ex) 탕수육"
                                value={query}
                                onChange={e => setQuery(e.currentTarget.value)}
                                onKeyPress={handleImageSearch}
                                required
                            />
                        </div>
                        <div id="image-container">
                            {images.map((value, index) => {
                                return (
                                    <img className="img-fluid" key={index} src={value.url} onClick={handleImage}/>
                                );
                            })}
                        </div>

                        <button id="submitBapfam" type="submit"
                                className="btn btn-primary btn-lg btn-block font-weight-bold d-none">
                            밥팸 만들기
                        </button>
                    </form>
                </section>
            </div>
        </section>
    );
};

export default Create;
