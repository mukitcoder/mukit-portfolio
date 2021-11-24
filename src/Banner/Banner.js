import React from "react";
import Typical from "react-typical";
import bannerImage from "../images/banner.jpg";

const Banner = () => {
  return (
    <div
      className="grid sm:grid-cols-2 md:grid-cols-2 gap-4 md:container md:mx-auto text-white py-5"
      id="home"
    >
      <div className="m-auto text-center">
        <div>
            <h4 className="text-1xl">WELCOME TO MY WORLD !</h4>
          <h1 className="text-5xl mb-6">Hello, I'M <span className="text-yellow-500 text-6xl">Mukit</span></h1>
        </div>

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

        <blockquote className="text-yellow-500">
        “To win big, you sometimes have to take big risks.”
        --- Bill Gates
        </blockquote>
      </div>
      <div className="bg-no-repeat bg-center ">
        <img className="rounded-full" src={bannerImage} alt="bannerImage" />
      </div>
    </div>
  );
};

export default Banner;
