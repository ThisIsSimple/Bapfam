import React, {useEffect, useState} from 'react';
import * as firebase from "firebase";

const SORT_OPTIONS = {
    'CREATED_AT_ASC': {column: 'createdAt', direction: 'asc'},
    'CREATED_AT_DESC': {column: 'createdAt', direction: 'desc'},
};

const useChatroom = (options = {sortBy: 'CREATED_AT_DESC', uid: null}) => {
    const [loading, setLoading] = useState(true);
    const [chatrooms, setChatrooms] = useState([]);

    const {sortBy, uid} = options;
    const collectionPath = `/bapfams`;

    useEffect(() => {
        if(uid !== null) {
            const unsubscribe = firebase.firestore()
                .collection(collectionPath)
                .where('participants', 'array-contains', uid)
                .onSnapshot(snapshot => {
                    const newChatrooms = snapshot.docs.map(doc => ({
                        id: doc.id,
                        ...doc.data()
                    }));

                    setChatrooms(newChatrooms);
                    setLoading(false);
                });

            return () => {
                unsubscribe()
            }
        } else {
            setChatrooms([]);
        }
    }, [sortBy]);

    return {loading, chatrooms};
};

export default useChatroom;