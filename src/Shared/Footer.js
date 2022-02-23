import React from 'react';

const Footer = () => {
    return (
<div className=" bg-gray-900 pb-0">
    <div className="max-w-2xl mx-auto text-white py-10">
        <div className="text-center">
            <h3 className="text-3xl mb-3 px-4"> Thanks For Visit My Website </h3>
            <p> Stay fit. All day, Every day. </p>
           
        </div>
        <div className="mt-16 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
            <p className="order-2 md:order-1 mt-8 md:mt-0"> &copy; ABDULLAH AL MUKIT, 2022. </p>
            <div className="order-1 md:order-2 text-2xl cursor-wait">
                <span className="px-2"><i className="fab fa-facebook"></i></span>
                <span className="px-2 "><i className="fab fa-twitter"></i></span>
                <span className="px-2 "><i className="fab fa-linkedin"></i></span>
            </div>
        </div>
    </div>
</div>
    );
};

export default Footer;