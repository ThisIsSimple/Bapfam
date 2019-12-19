import React from 'react';
import * as firebase from "firebase";

const Jumbotron = () => {
	return (
		<div className="main-jumbotron jumbotron jumbotron-fluid bg-light-purple d-flex justify-content-center align-items-center mb-0">
			<div className="container">
				<p className="lead mb-0">안녕하세요,</p>
				<h1 className="display-5 font-weight-bold">{firebase.auth().currentUser.displayName}님</h1>
			</div>
		</div>
	);
};

export default Jumbotron;