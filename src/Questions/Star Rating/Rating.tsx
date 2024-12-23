import React, { useState } from 'react';
import { IoStarOutline, IoStarSharp, IoStarHalfSharp } from 'react-icons/io5';

const Rating = () => {
    const [rating, setRating] = useState(0); // Rating selected by user
    const [hover, setHover] = useState(0);   // Rating when hovering

    const renderStar = (index) => {
        if (hover >= index + 1) {
            return <IoStarSharp className="text-yellow-400 text-3xl" />;
        } else if (rating >= index + 1) {
            return <IoStarSharp className="text-yellow-400 text-3xl" />;
        }
        return <IoStarOutline className="text-gray-400 text-3xl" />;
    };

    return (
        <div className="flex items-center gap-2">
            {[...Array(5)].map((_, idx) => (
                <span
                    key={idx}
                    onClick={() => setRating(idx + 1)}
                    onMouseOver={() => setHover(idx + 1)}
                    onMouseLeave={() => setHover(0)}
                    className="cursor-pointer"
                >
                    {renderStar(idx)}
                </span>
            ))}
        </div>
    );
};

export default Rating;
