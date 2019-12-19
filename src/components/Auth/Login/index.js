import React from 'react';

import firebase from 'firebase/app';

import logo from '../../../logo.svg';
import Sentence from "./Sentence";

class Login extends React.Component {
	constructor(props) {
		super(props);
	}

	loginWithFacebook = e => {
		e.preventDefault();
		const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
		firebase.auth().signInWithPopup(facebookAuthProvider).then(r => {
			firebase.firestore().doc(`/users/${r.user.uid}`).set({
				name: r.user.displayName,
				profile: r.user.photoURL,
				email: r.user.email,
				isKHU: false,
				favoriteFoods: [],
				dislikeFoods: [],
				hakbon: '',
				major: '',
				KHUEmail: '',
				about: '',
				gender: '',

			}).then(() => {
				this.props.history.replace('/');
			});
		});
	};

	render() {
		return (
			<section className="container d-flex justify-content-center align-items-center bg-light-purple" style={{ height: '100vh' }}>
				<div style={{ width: '100%' }}>
					<header className="d-flex flex-column align-items-center mb-3">
						<img src={logo} className="mb-4" style={{ width: 175 }} />
						<span className="logo"></span>
						<Sentence/>
					</header>
					<form>
						<div className="form-group">
							<input type="email" className="form-control" placeholder="이메일 (example@khu.ac.kr)" />
						</div>
						<div className="form-group">
							<input type="password" className="form-control" placeholder="비밀번호" />
						</div>
						<button className="btn btn-primary btn-block mb-3">로그인</button>
					</form>
					<hr />
					<button className="btn btn-facebook btn-block" onClick={this.loginWithFacebook}>
						페이스북으로 로그인
					</button>
					<p className="my-3 text-center">
						아직 회원이 아니세요? <a href="#">회원가입 하기</a>
					</p>
				</div>
			</section>
		);
	}
}

export default Login;