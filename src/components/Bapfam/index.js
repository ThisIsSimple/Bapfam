import React from "react";
import {Link} from "react-router-dom";

function Bapfam({id, title, location, time, participants, image, max}) {
    return (
        <div className="card food-card">
            <img src={image} alt={title} className="card-img-top"/>
            <div className="card-body">
                <h5 className="card-title font-weight-bold text-truncate">{title}</h5>
                <div className="d-flex justify-content-between align-items-center">
                    <p className="card-text mb-0">
                        <i className="fas fa-user mr-1"/>
                        {participants.length + 1}/{max}
                    </p>
                    <p className="card-text">
                        <i className="fas fa-clock mr-1"/>
                        {/*{time}*/}
                    </p>
                </div>
                <div>
                    <p className="card-text text-truncate">
                        <i className="fas fa-map-marker-alt mr-1"/>
                        {location}
                    </p>
                </div>
            </div>
            <div className="card-footer">
                <Link to={`/bapfam/${id}`} className="join-btn btn btn-primary btn-block text-center">
                    참여하기
                </Link>
            </div>
        </div>
    );
}

export default Bapfam;