import React from "react";
import Typical from "react-typical";
import Zoom from "react-reveal/Zoom";
import Wobble from "react-reveal/Wobble";
import bannerImage from "../images/mukit1.png";

const Banner = () => {
  return (
    <div
      className="grid sm:grid-cols-2 md:grid-cols-2 gap-4 container mx-auto px-4 text-white py-5"
      id="home"
    >
      <div className="m-auto text-center">
        <Zoom>
          {" "}
          <div>
            <h4 className="text-1xl mb-6">WELCOME TO MY WORLD !</h4>
            <h1 className="text-5xl mb-6">
              Hello, I'M <span className="text-yellow-500 text-6xl">Mukit</span>
            </h1>
          </div>
        </Zoom>
        <Typical
          className="text-4xl mb-6"
          steps={[
            "Professional Coder ✔",
            2000,
            "React Developer 😎",
            2200,
            "Front-End Developer 😍",
            2400,
            "MERN Stack Developer ✔",
            2600,
          ]}
          loop={Infinity}
          wrapper="p"
        ></Typical>

        <Wobble delay={4000}>
          {" "}
          <blockquote className="text-yellow-500">
            “To win big, you sometimes have to take big risks.” --- Bill Gates
          </blockquote>
        </Wobble>

        <div className="mt-16">
    {/* <!-- buttons --> */}
    <div className="text-center">
        <a href="https://drive.google.com/uc?export=download&id=1IM0O2Hb_5Ast4rNxO9i9DED5MHeeBXc_" className="p-2 pl-5 pr-5 bg-transparent border-2 font-bold border-yellow-500 text-yellow-500 text-lg rounded-lg transition-colors duration-700 transform hover:bg-yellow-500 hover:text-white focus:border-4 focus:border-indigo-300">Download Resume</a>
    </div>
        </div>
      </div>
      <div className="bg-no-repeat bg-center ">
        <img className="" src={bannerImage} alt="bannerImage" />
      </div>
    </div>
  );
};

export default Banner;
