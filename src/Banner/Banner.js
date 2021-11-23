import React from 'react';
import bannerImage from '../images/banner.jpg'

const Banner = () => {
    return (
        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4 md:container md:mx-auto" id="home">
            <div className="border border-grey-800">
            <h1 className="text-4xl">this is banner</h1>
            </div>
            <div className="border border-green-800">
            <img src= {bannerImage} alt="" />
            </div>
        </div>
    );
};

export default Banner;