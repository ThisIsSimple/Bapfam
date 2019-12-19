import React, {useEffect, useState} from 'react';
import * as firebase from "firebase";

const useBapfam = (id = null) => {
    const [loading, setLoading] = useState(true);
    const [bapfam, setBapfam] = useState({});

    const collectionPath = `bapfams/${id}`;

    useEffect(() => {
        const unsubscribe = firebase.firestore()
            .doc(collectionPath)
            .onSnapshot(snapshot => {
                const newBapfam = {
                    id: snapshot.id,
                    ...snapshot.data()
                };

                setBapfam(newBapfam);
                setLoading(false);
            });
        return () => unsubscribe()
    }, []);

    return {loading, bapfam};
};

export default useBapfam;