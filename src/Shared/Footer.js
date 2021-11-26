import React from 'react';

const Footer = () => {
    return (
        <div>
<div class=" bg-gray-900">
    <div class="max-w-2xl mx-auto text-white py-10">
        <div class="text-center">
            <h3 class="text-3xl mb-3 px-4"> Thanks for visit my website </h3>
            <p> Stay fit. All day, every day. </p>
           
        </div>
        <div class="mt-16 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
            <p class="order-2 md:order-1 mt-8 md:mt-0"> &copy; ABDULLAH AL MUKIT, 2021. </p>
            <div class="order-1 md:order-2 text-2xl cursor-wait">
                <span class="px-2"><i class="fab fa-facebook"></i></span>
                <span class="px-2 "><i class="fab fa-twitter"></i></span>
                <span class="px-2 "><i class="fab fa-linkedin"></i></span>
            </div>
        </div>
    </div>
</div>
        </div>
    );
};

export default Footer;