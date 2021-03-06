import React, {Fragment} from 'react';
import BapfamList from "../Bapfam/BapfamList";
import "firebase/auth";
import Jumbotron from "../Jumbotron";

function Home() {
    // console.log(firebase.auth().currentUser);
    return (
        <Fragment>
            <Jumbotron/>

            <section className="main-container container shadow d-flex justify-content-center align-items-start">
                <div style={{width: '100%'}}>
                    <header id="search-header" className="header page-header">
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control bg-light p-2 pl-3 pr-5"
                                placeholder="마음에 드는 밥팸을 찾으세요! ex) 야식 치킨"
                            />
                            <i className="fas fa-search"/>
                        </div>
                    </header>
                    <section className="card-section section mb-5">
                        <header className="header mb-4">
                            <h3 className="font-weight-bold">지금 찾고 있는 밥팸</h3>
                        </header>

                        <BapfamList sortBy="CREATED_AT_DESC"/>
                    </section>
                    <section className="card-section section mb-5">
                        <header className="header mb-4">
                            <h3 className="font-weight-bold">내 주변에 있는 밥팸</h3>
                        </header>

                        <BapfamList/>
                    </section>
                </div>
            </section>
        </Fragment>
    );
}

export default Home;
