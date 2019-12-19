import React from 'react';

class Create extends React.Component {
	render() {
		return (
			<section className="main-container container shadow d-flex justify-content-center align-items-start">
				<div style={{ width: '100%' }}>
					<header id="search-header" className="header page-header">
						<h3 className="font-weight-bold">새로운 밥팸 생성</h3>
					</header>
					<section className="card-section section mb-5">
						<header className="header mb-4">
							<h3 className="font-weight-bold">밥팸 정보</h3>
						</header>
						<form>
							<div className="form-group">
								<label htmlFor="titleInput">밥팸 이름</label>
								<input
									name="title"
									type="text"
									className="form-control"
									id="titleInput"
									placeholder="매력적인 이름으로 밥팸을 어필하세요!"
									required
									autofocus={true}
								/>
							</div>
							<div className="form-group">
								<label htmlFor="aboutInput">밥팸 소개</label>
								<textarea
									name="about"
									type="text"
									className="form-control"
									id="aboutInput"
									rows={5}
									placeholder="나의 밥팸을 소개하세요! ex) 식사 장소, 취향, 분위기, 식사량 등등..."
									required
								/>
							</div>
							<div className="form-group">
								<label htmlFor="dateInput">식사 날짜</label>
								<input type="datetime-local" className="form-control" />
							</div>
							<div className="form-group">
								<label htmlFor="aboutInput">식사 장소</label>
								<input
									name="place"
									type="text"
									className="form-control"
									id="aboutInput"
									placeholder="밥팸을 어디서 진행하실 건가요?"
									required
								/>
							</div>
							<button type="submit" className="btn btn-primary btn-lg btn-block font-weight-bold">
								밥팸 만들기
							</button>
						</form>
					</section>
				</div>
			</section>
		);
	}
}

export default Create;
