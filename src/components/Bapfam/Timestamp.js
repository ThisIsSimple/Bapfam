import React, {Fragment} from "react";

const Timestamp = ({ time }) => {
    const now = new Date();
    const newTime = new Date(time);
    const timeString = `${formatNumber(newTime.getHours())}:${formatNumber(newTime.getMinutes())}`;

    function formatNumber(number) {
        var formattedNumber = ("0" + number).slice(-2);
        return formattedNumber;
    }

    return (
        <Fragment>
            {((now.getFullYear() === newTime.getFullYear()) && (now.getMonth() === newTime.getMonth()) && (now.getDate() === newTime.getDate()))?(
                <span>{timeString}</span>
            ):(
                <span>{`${newTime.getFullYear()}년 ${newTime.getMonth()}월 ${newTime.getDate()}일 ${timeString}`}</span>
            )}
        </Fragment>
    );
};

export default Timestamp;