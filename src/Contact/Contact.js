import React from "react";
import profileImage from '../images/resized-image-Promo.jpg'

const Contact = () => {
  return (
    <div className="container">
        <h1 className="text-5xl text-center text-white py-2 mt-5">
        Contact <span className="text-yellow-500">With</span> Me 
        <hr className="mt-4 w-2/3 mx-auto" />
      </h1>
      <div className="w-full flex items-center justify-center mt-16">
        <div className="relative w-96 h-auto bg-gray-400 rounded-md pt-24 pb-8 px-4 shadow-md hover:shadow-lg transition flex flex-col items-center">
          <div className="absolute rounded-full bg-gray-100 w-28 h-28 p-2 z-10 -top-8 shadow-lg hover:shadow-xl transition">
            <div className="rounded-full bg-black w-full h-full overflow-auto">
              <img src={profileImage} />
            </div>
          </div>
          <label className="font-bold text-gray-100 text-lg">
            Rai Raksa Muhamad
          </label>
          <p className="text-center text-gray-200 mt-2 leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
          <ul className="flex flex-row gap-2 mt-4">
            {/* instagram  */}
            <a href="https://instagram.com/raydeon" target="_blank"><i className="fab fa-instagram text-3xl text-red-500"></i></a>
            {/* linkedin */}
            <a href="https://www.linkedin.com/in/rairaksa" target="_blank"><i className="fab fa-linkedin text-3xl px-2 text-blue-700"></i></a>
            {/* github  */}
            <a href="https://github.com/rairaksa" target="_blank"><i className="fab fa-github text-3xl"></i></a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
