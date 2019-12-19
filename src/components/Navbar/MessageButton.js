import React from "react";
import {Link} from "react-router-dom";

const MessageButton = () => {
    const icons = ['hamburger', 'pizza-slice', 'cheese', 'egg', 'bread-slice', 'bacon', 'hotdog', 'drumstick-bite', 'ice-cream', 'stroopwafel', 'cookie', 'bone', 'pepper-hot', 'fish', 'candy-cane', 'lemon', 'apple-alt', 'carrot'];
    const randInt = Math.floor(Math.random() * icons.length);

    return(
        <Link className="text-dark" to="/message"><i className={`fas fa-${icons[randInt]}`}></i></Link>
    );
};

export default MessageButton;