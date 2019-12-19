import React, {Fragment} from "react";
import useUser from "./useUser";
import Loading from "../Loading";

const User = (props) => {
    const {userLoading, user} = useUser(props.id);

    return (
        <Fragment>
            {(userLoading) ? (
                <Loading/>
            ) : (
                <div className="d-flex align-items-center mb-5">
                    <img
                        src={user.profile}
                        alt={user.name}
                        className="profile-img-lg shadow mr-4"
                    />
                    <div>
                        <h5 className="font-weight-bold mb-0">{user.name}</h5>
                        <p className="mb-0">{user.major} {user.hakbon}학번</p>
                    </div>
                </div>
            )}
        </Fragment>
    );
};

export default User;