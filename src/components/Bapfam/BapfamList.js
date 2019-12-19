import React from "react";
import Bapfam from "./index";
import useBapfamList from "./useBapfamList";
import Loading from "../Loading";

const BapfamList = ({sortBy = 'CREATED_AT_ASC', limit = 4, ...props}) => {
    const {loading, bapfams} = useBapfamList({sortBy, limit});

    return (
        <div className="row">
            {(loading) ? (
                <Loading/>
            ) : (
                bapfams.map((data, index) =>
                    <div key={index} className="col-6 col-lg-3 mb-3">
                        <Bapfam key={index} {...data}/>
                    </div>)
            )}
        </div>
    );
};

export default BapfamList;