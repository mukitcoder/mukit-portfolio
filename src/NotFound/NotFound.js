import React from 'react';
import images from '../images/notfound.jpg';

const NotFound = () => {
    return (
        <div className="flex justify-center pt-16">
            <img src={images} alt="notfound" />
        </div>
    );
};

export default NotFound;