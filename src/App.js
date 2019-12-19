import React, {Fragment} from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';

import * as ROUTES from './constants/routes';

import Home from './components/Home';
import Login from './components/Auth/Login';
import Create from './components/Bapfam/Create';
import Notification from "./components/Notification";
import Menu from "./components/Menu";
import Profile from "./components/Auth/Profile";
import Detail from "./components/Bapfam/Detail";
import Message from "./components/Message";
import TopNav from "./components/Navbar/TopNav";
import {FirebaseAuthConsumer, IfFirebaseAuthed} from "@react-firebase/auth";
import NotFound from "./components/NotFound";
import Navbar from "./components/Navbar";

function App(props) {

    return (
        <Router>
            <TopNav/>

            <Switch>
                <Route path={ROUTES.LOGIN}>
                    <IfFirebaseAuthed>
                        <Redirect to='/'/>
                    </IfFirebaseAuthed>
                    <Login/>
                </Route>

                <FirebaseAuthConsumer>
                    {({isSignedIn, user, providerId}) =>
                        ((isSignedIn) ? (
                            <Fragment>
                                <Route exact path={ROUTES.HOME} component={Home}/>
                                <Route path={ROUTES.NOTIFICATION} component={Notification}/>
                                <Route path={ROUTES.PROFILE} component={Profile}/>
                                <Route path={ROUTES.MENU} component={Menu}/>

                                <Route path={ROUTES.MESSAGE} component={Message}/>
                                <Route path={ROUTES.MESSAGE_DETAIL} component={Message}/>

                                <Route path={ROUTES.CREATE} component={Create}/>
                                <Route path={ROUTES.DETAIL} component={Detail}/>
                            </Fragment>
                        ) : (
                            <Redirect to='/login'/>
                        ))
                    }
                </FirebaseAuthConsumer>

                <Route component={NotFound}/>
            </Switch>

            {/*<footer className="footer py-5">*/}
            {/*    <div className="container">밥팹 © 2019 NoC++A++</div>*/}
            {/*</footer>*/}

            <Navbar/>
        </Router>
    );
}

export default App;

