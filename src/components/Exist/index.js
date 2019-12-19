import React, {Fragment} from "react";

const Exist = ({exist}) => {
    return (
        <Fragment>
            {(exist)?(
                <Fragment></Fragment>
            ):(
                <div>존재하지 않는 밥팹입니다.</div>
            )}
        </Fragment>
    );
};

export default Exist;