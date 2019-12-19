import React, {useEffect, useState} from 'react';
import * as firebase from "firebase";

const SORT_OPTIONS = {
    'CREATED_AT_ASC': {column: 'createdAt', direction: 'asc'},
    'CREATED_AT_DESC': {column: 'createdAt', direction: 'desc'},
    'TITLE_ASC': {column: 'title', direction: 'asc'},
    'TITLE_DESC': {column: 'title', direction: 'desc'},
};

const useBapfamList = (options = {sortBy: 'CREATED_AT_ASC', limit: 4, uid: null}) => {
    const [loading, setLoading] = useState(true);
    const [bapfams, setBapfams] = useState([]);

    const {sortBy, limit, uid} = options;
    const collectionPath = `bapfams`;

    useEffect(() => {
        const unsubscribe = firebase.firestore()
            .collection(collectionPath)
            // .where('uid', '==', "0QxOU3Kf7zdOowgzpNrVE3VCpzc2")
            .orderBy(SORT_OPTIONS[sortBy].column, SORT_OPTIONS[sortBy].direction)
            .limit(limit)
            .onSnapshot(snapshot => {
                console.log(snapshot);
                const newBapfams = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));

                setBapfams(newBapfams);
                setLoading(false);
            });

        return () => unsubscribe()
    }, [sortBy, limit]);

    return {loading, bapfams};
};

export default useBapfamList;