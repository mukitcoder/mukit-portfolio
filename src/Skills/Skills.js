import React from "react";
import Fade from "react-reveal/Fade";
import html from "../images/html.png";
import css from "../images/css.png";
import boot from "../images/bootstrap.png";
import tail from "../images/tailwaind.png";
import mui from "../images/metarial-ui.png";
import javascript from "../images/js.png";
import react from "../images/react.png";
import node from "../images/node js.png";
import mongo from "../images/mongodb.png";
import express from "../images/express.png";
import firebase from "../images/firebase.png";
import github from "../images/github.png";

const Skills = () => {
  return (
    <div className="text-white pt-12" id="skills">
      <Fade duration={4000}>
        {" "}
        <h1 className="text-5xl text-center py-5 mt-5 mb-10 font-bold">
          My <span className="text-yellow-500">Professional</span> Skills{" "}
          <hr className="mt-4 w-2/3 mx-auto" />
        </h1>
      </Fade>

      {/* card start */}
      <div className="w-full">
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
            <div className="w-full bg-gray-900 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center transform hover:scale-110 transition delay-300 duration-300 ease-in-out hover:bg-gray-800">
              <div className="mb-8">
                <img
                  className="object-center object-cover h-36 w-36"
                  src={html}
                  alt="skillPhoto"
                />
              </div>
              <div className="text-center">
                <p className="text-xl text-white font-bold mb-2">HTML5</p>
              </div>
            </div>
            <div className="w-full bg-gray-900 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center transform hover:scale-110 transition delay-300 duration-300 ease-in-out hover:bg-gray-800">
              <div className="mb-8">
                <img
                  className="object-center object-cover h-36 w-36"
                  src={css}
                  alt="skillPhoto"
                />
              </div>
              <div className="text-center">
                <p className="text-xl text-white font-bold mb-2">CSS3</p>
              </div>
            </div>
            <div className="w-full bg-gray-900 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center transform hover:scale-110 transition delay-300 duration-300 ease-in-out hover:bg-gray-800">
              <div className="mb-8">
                <img
                  className="object-center object-cover h-36 w-36"
                  src={boot}
                  alt="skillPhoto"
                />
              </div>
              <div className="text-center">
                <p className="text-xl text-white font-bold mb-2">BOOTSTRAP</p>
              </div>
            </div>
            <div className="w-full bg-gray-900 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center transform hover:scale-110 transition delay-300 duration-300 ease-in-out hover:bg-gray-800">
              <div className="mb-8">
                <img
                  className="object-center object-cover h-36 w-36"
                  src={tail}
                  alt="skillPhoto"
                />
              </div>
              <div className="text-center">
                <p className="text-xl text-white font-bold mb-2">TAILWIND CSS</p>
              </div>
            </div>
            <div className="w-full bg-gray-900 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center transform hover:scale-110 transition delay-300 duration-300 ease-in-out hover:bg-gray-800">
              <div className="mb-8">
                <img
                  className="object-center object-cover h-36 w-36"
                  src={javascript}
                  alt="skillPhoto"
                />
              </div>
              <div className="text-center">
                <p className="text-xl text-white font-bold mb-2">JAVASCRIPT</p>
              </div>
            </div>
            <div className="w-full bg-gray-900 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center transform hover:scale-110 transition delay-300 duration-300 ease-in-out hover:bg-gray-800">
              <div className="mb-8">
                <img
                  className="object-center object-cover h-36 w-36"
                  src={react}
                  alt="skillPhoto"
                />
              </div>
              <div className="text-center">
                <p className="text-xl text-white font-bold mb-2">REACT.JS</p>
              </div>
            </div>
            <div className="w-full bg-gray-900 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center transform hover:scale-110 transition delay-300 duration-300 ease-in-out hover:bg-gray-800">
              <div className="mb-8">
                <img
                  className="object-center object-cover h-36 w-36"
                  src={mui}
                  alt="skillPhoto"
                />
              </div>
              <div className="text-center">
                <p className="text-xl text-white font-bold mb-2">MATERIAL UI</p>
              </div>
            </div>
            <div className="w-full bg-gray-900 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center transform hover:scale-110 transition delay-300 duration-300 ease-in-out hover:bg-gray-800">
              <div className="mb-8">
                <img
                  className="object-center object-cover h-36 w-36"
                  src={node}
                  alt="skillPhoto"
                />
              </div>
              <div className="text-center">
                <p className="text-xl text-white font-bold mb-2">NODE.JS</p>
              </div>
            </div>
            <div className="w-full bg-gray-900 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center transform hover:scale-110 transition delay-300 duration-300 ease-in-out hover:bg-gray-800">
              <div className="mb-8">
                <img
                  className="object-center object-cover h-36 w-36"
                  src={express}
                  alt="skillPhoto"
                />
              </div>
              <div className="text-center">
                <p className="text-xl text-white font-bold mb-2">EXPRESS.JS</p>
              </div>
            </div>
            <div className="w-full bg-gray-900 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center transform hover:scale-110 transition delay-300 duration-300 ease-in-out hover:bg-gray-800">
              <div className="mb-8">
                <img
                  className="object-center object-cover h-36 w-36"
                  src={mongo}
                  alt="skillPhoto"
                />
              </div>
              <div className="text-center">
                <p className="text-xl text-white font-bold mb-2">MONGODB</p>
              </div>
            </div>
            <div className="w-full bg-gray-900 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center transform hover:scale-110 transition delay-300 duration-300 ease-in-out hover:bg-gray-800">
              <div className="mb-8">
                <img
                  className="object-center object-cover h-36 w-36"
                  src={firebase}
                  alt="skillPhoto"
                />
              </div>
              <div className="text-center">
                <p className="text-xl text-white font-bold mb-2">FIREBASE</p>
              </div>
            </div>
            <div className="w-full bg-gray-900 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center transform hover:scale-110 transition delay-300 duration-300 ease-in-out hover:bg-gray-800">
              <div className="mb-8">
                <img
                  className="object-center object-cover h-36 w-36"
                  src={github}
                  alt="skillPhoto"
                />
              </div>
              <div className="text-center">
                <p className="text-xl text-white font-bold mb-2">GITHUB</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Skills;
