import React, {useEffect, useState} from 'react';
import * as firebase from "firebase";

const useBapfam = (id = null) => {
    const [loading, setLoading] = useState(true);
    const [bapfam, setBapfam] = useState({});
    const [exist, setExist] = useState(true);

    const collectionPath = `bapfams/${id}`;

    useEffect(() => {
        const unsubscribe = firebase.firestore()
            .doc(collectionPath)
            .onSnapshot(snapshot => {
                if(snapshot.exists) {
                    const newBapfam = {
                        id: snapshot.id,
                        ...snapshot.data()
                    };
                    setBapfam(newBapfam);
                    setLoading(false);
                } else {
                    setBapfam({});
                    setLoading(true);
                    setExist(false);
                }
            });
        return () => unsubscribe()
    }, []);

    return {loading, bapfam, exist};
};

export default useBapfam;