import React, {useEffect, useState} from 'react';
import * as firebase from "firebase";

const useUser = (id = null) => {
    const [userLoading, setUserLoading] = useState(true);
    const [user, setUser] = useState({});

    useEffect(() => {
        const unsubscribe = firebase.firestore()
            .doc('users/'+id)
            .onSnapshot(snapshot => {
                const newUser = {
                    id: snapshot.id,
                    ...snapshot.data()
                };

                console.log(newUser);

                setUser(newUser);
                setUserLoading(false);
            });
        return () => unsubscribe()
    }, []);

    return {userLoading, user};
};

export default useUser;