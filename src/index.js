import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// Reactfire
import {FirebaseAppProvider} from 'reactfire';
import 'firebase/performance';
// React-Firebase
import firebase from "firebase/app";
import "firebase/auth";
import {FirebaseAuthProvider} from "@react-firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB4QpHgF3mRSsIGorMp431lTHteNQfjwgg",
    authDomain: "bapfam-848c3.firebaseapp.com",
    databaseURL: "https://bapfam-848c3.firebaseio.com",
    projectId: "bapfam-848c3",
    storageBucket: "bapfam-848c3.appspot.com",
    messagingSenderId: "164995806139",
    appId: "1:164995806139:web:6b0dd308925f02f707ca9e",
    measurementId: "G-H5XBPNEZFC"
};

ReactDOM.render(
    <FirebaseAppProvider firebaseConfig={firebaseConfig} initPerformance>
        <FirebaseAuthProvider firebase={firebase} {...firebaseConfig}>
            <App/>
        </FirebaseAuthProvider>
    </FirebaseAppProvider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.register();
