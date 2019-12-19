import React, {useEffect, useState} from 'react';
import * as firebase from "firebase";

const useCreateBapfam = (data = {}) => {
    const [bapfam, setBapfam] = useState({});

    const collectionPath = `bapfams`;

    useEffect(() => {
        const unsubscribe = firebase.firestore()
            .collection(collectionPath)
            .add({
                ...data,
                userId: firebase.auth().currentUser.uid,
                createdAt: new Date()
            })
            .then(res => {
                setBapfam(res);
            });
        // return () => unsubscribe()
    }, []);

    return bapfam;
};

export default useCreateBapfam;