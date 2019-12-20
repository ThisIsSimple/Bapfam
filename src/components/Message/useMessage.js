import React, {useEffect, useState} from 'react';
import * as firebase from "firebase";

const SORT_OPTIONS = {
    'CREATED_AT_ASC': {column: 'createdAt', direction: 'asc'},
    'CREATED_AT_DESC': {column: 'createdAt', direction: 'desc'},
};

const useMessage = (options = {sortBy: 'CREATED_AT_DESC', id: null}) => {
    const [loading, setLoading] = useState(true);
    const [messages, setMessages] = useState([]);

    const {sortBy, id} = options;
    // const collectionPath = `bapfams/${id}/messages`;

    useEffect(() => {
        if (id !== null) {
            const unsubscribe = firebase.firestore()
                .collection('bapfams').doc(id).collection('messages')
                .orderBy('createdAt', 'asc')
                // .orderBy(SORT_OPTIONS[sortBy].column, SORT_OPTIONS[sortBy].direction)
                .onSnapshot(snapshot => {
                    console.log(snapshot);
                    const newMessages = snapshot.docs.map(doc => ({
                        id: doc.id,
                        ...doc.data()
                    }));

                    setMessages(newMessages);
                    setLoading(false);
                });

            return () => unsubscribe()
        }
    }, [sortBy]);

    return {loading, messages};
};

export default useMessage;