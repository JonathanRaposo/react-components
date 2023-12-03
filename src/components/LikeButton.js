
import React, { useState } from 'react';

const LikeButton = () => {
    const [likes, setLikes] = useState(0);
    const [colorIndex, setColorIndex] = useState(0);
    const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

    const incrementLikes = () => {
        setLikes(likes + 1);
        const newColorIndex = (colorIndex + 1) % colors.length;
        setColorIndex(newColorIndex);
    };


    return (
        <div className="LikeButton">
            <button style={{ backgroundColor: colors[colorIndex] }} onClick={incrementLikes}>
                {`${likes} Likes`}
            </button>
        </div>
    );
};

export default LikeButton;