import React from "react";
import Fade from "react-reveal/Fade";
import profileImage from "../images/mukit-01.png";

const Contact = () => {
  return (
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-16">
      <div className="container mx-auto px-4">
        <Fade duration={4000}>
          {" "}
          <h1 className="text-5xl text-center text-white py-2 mt-5">
            Contact <span className="text-yellow-500">With</span> Me
            <hr className="mt-4 w-2/3 mx-auto" />
          </h1>
        </Fade>
        <div className="w-full flex items-center justify-center mt-16">
          <div className="relative w-96 h-auto bg-gray-900 rounded-md pt-24 pb-8 px-4 shadow-md hover:shadow-lg transition flex flex-col items-center">
            <div className="absolute rounded-full bg-gray-100 w-28 h-28 p-2 z-10 -top-8 shadow-lg hover:shadow-xl transition">
              <div className="rounded-full bg-black w-full h-full overflow-auto">
                <img src={profileImage} alt="" />
              </div>
            </div>
            <label className="font-bold text-gray-100 text-lg">
              Abdullah Al Mukit
            </label>
            <p className="text-center mt-2 leading-relaxed text-gray-100">
              <i className="far fa-envelope mr-2 text-yellow-500"></i>
              mukitbd71@gmail.com
            </p>
            <p className="text-center mt-2 leading-relaxed text-gray-100">
              <i className="fas fa-mobile-alt mr-2 text-yellow-500"></i>
              +88-01968-399799
            </p>
            <p className="text-center mt-2 leading-relaxed text-gray-100">
              <i className="fas fa-map-marker-alt mr-2 text-yellow-500"></i>
              Khulna, Bangladesh.
            </p>
            <div className="text-center py-8">
              <a
                href="https://drive.google.com/drive/u/0/folders/1b89heySkgFV3oGLIynpLuTMmdFCPhWYX"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 pl-5 pr-5 bg-transparent border-2 font-bold border-yellow-500 text-yellow-500 text-lg rounded-lg transition-colors duration-700 transform hover:bg-yellow-500 hover:text-white focus:border-4 focus:border-indigo-300"
              >
                Download Resume
              </a>
            </div>
            <ul className="flex flex-row gap-2">
              {/* instagram  */}
              <a
                href="https://www.instagram.com/mukitabdullah/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram text-3xl text-red-500 hover:text-gray-300"></i>
              </a>
              {/* linkedin */}
              <a
                href="https://www.linkedin.com/in/mukitcoder/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin text-3xl px-6 text-blue-700 hover:text-gray-300"></i>
              </a>
              {/* github  */}
              <a
                href="https://github.com/mukitcoder"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github text-3xl hover:text-gray-300"></i>
              </a>
            </ul>
          </div>
        </div>
      </div>
    {/* send message area */}
      <div>
      <Fade duration={4000}>
          {" "}
          <h1 className="text-5xl text-center text-white py-2 mt-5">
            Send <span className="text-yellow-500">Me</span> Message
            <hr className="mt-4 w-2/3 mx-auto" />
          </h1>
        </Fade>
        <section class="w-full text-gray-900 bg-center bg-cover bg-no-repeat mt-4">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 flex items-center justify-center">
        <div class="p-8 flex flex-col lg:ml-auto w-full mt-10 lg:mt-0 rounded-md">
            <div class="relative mb-4">
                <label for="full-name" class="leading-7 text-sm text-gray-100">Name</label>
                <input type="text" id="name" name="name" class="w-full bg-white rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out"/>
            </div>
            <div class="relative mb-4">
                <label for="email" class="leading-7 text-sm text-gray-100">Email</label>
                <input type="email" id="email" name="email" class="w-full bg-white rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out"/>
            </div>
            <div class="relative mb-4">
                <label for="email" class="leading-7 text-sm text-gray-100">Message</label>
                <textarea id="message" name="message" rows="4" class="w-full bg-white rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out"> </textarea>
            </div>
            <button class="text-white font-bold bg-yellow-500 rounded-md border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 text-lg"><i class="fas fa-paper-plane mr-2"></i> Send</button>
        </div>
    </div>
</section>
      </div>
    </div>
  );
};

export default Contact;
