import React, {useEffect, useState} from "react";

const Sentence = () => {
    const sentences = ['밥 먹고 다녀라.', '편의점 가지 말고 맛잇는 것 좀 먹어.', '아니, 왜 맨날 혼밥이야?', '야야 오늘 저녁에 치킨 어때?', '난 초밥 좋아하는데, 넌 어때?'];
    const randInt = Math.floor(Math.random() * sentences.length);

    const [sentence, setSentence] = useState(sentences[randInt]);

    useEffect(() => {
        const interval = setInterval(changeSentence, 500);

        return clearInterval(interval);
    });

    function changeSentence() {
        console.log('changed');
        const randInt = Math.floor(Math.random() * sentences.length);
        setSentence(sentences[randInt]);
    }

    return (
        <p className="font-weight-bold">{sentence}</p>
    );
};

export default Sentence;