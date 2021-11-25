import React from "react";

const Skills = () => {
  return (
    <div className="text-white pt-12 mt-16 " id="skills">
      <h1 className="text-5xl text-center py-5 mt-5 mb-10">
        My <span className="text-yellow-500">Professional</span> Skills{" "}
        <hr className="mt-4 w-2/3 mx-auto" />
      </h1>

      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-1 w-1/2 m-auto pb-5">
          <div className="mb-1 flex justify-between">
            <span className="text-2xl text-yellow-500 font-bold">HTML</span>
            <span className="text-xl font-medium text-blue-700">90%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-5">
            <div
              className="bg-blue-600 h-5 rounded-full"
              style={{ width: "90%" }}
            ></div>
          </div>
        </div>
        {/* progress end */}
        <div className="grid grid-cols-1 md:grid-cols-1 w-1/2 m-auto pb-5">
          <div className="mb-1 flex justify-between">
            <span className="text-2xl text-yellow-500 font-bold">CSS</span>
            <span className="text-xl font-medium text-indigo-600">80%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-5">
            <div
              className="bg-indigo-600 h-5 rounded-full"
              style={{ width: "80%" }}
            ></div>
          </div>
        </div>
        {/* progress end */}
        <div className="grid grid-cols-1 md:grid-cols-1 w-1/2 m-auto pb-5">
          <div className="mb-1 flex justify-between">
            <span className="text-2xl text-yellow-500 font-bold">BOOTSTRAP</span>
            <span className="text-xl font-medium text-purple-600">85%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-5">
            <div
              className="bg-purple-600 h-5 rounded-full"
              style={{ width: "85%" }}
            ></div>
          </div>
        </div>
        {/* progress end */}
        <div className="grid grid-cols-1 md:grid-cols-1 w-1/2 m-auto pb-5">
          <div className="mb-1 flex justify-between">
            <span className="text-2xl text-yellow-500 font-bold">TAILWIND</span>
            <span className="text-xl font-medium text-pink-600">80%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-5">
            <div
              className="bg-pink-600 h-5 rounded-full"
              style={{ width: "80%" }}
            ></div>
          </div>
        </div>
        {/* progress end */}
        <div className="grid grid-cols-1 md:grid-cols-1 w-1/2 m-auto pb-5">
          <div className="mb-1 flex justify-between">
            <span className="text-2xl text-yellow-500 font-bold">JAVASCRIPT</span>
            <span className="text-xl font-medium text-red-600">70%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-5">
            <div
              className="bg-red-600 h-5 rounded-full"
              style={{ width: "70%" }}
            ></div>
          </div>
        </div>
        {/* progress end */}
        <div className="grid grid-cols-1 md:grid-cols-1 w-1/2 m-auto pb-5">
          <div className="mb-1 flex justify-between">
            <span className="text-2xl text-yellow-500 font-bold">REACT</span>
            <span className="text-xl font-medium text-yellow-600">75%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-5">
            <div
              className="bg-yellow-600 h-5 rounded-full"
              style={{ width: "75%" }}
            ></div>
          </div>
        </div>
        {/* progress end */}
        <div className="grid grid-cols-1 md:grid-cols-1 w-1/2 m-auto pb-5">
          <div className="mb-1 flex justify-between">
            <span className="text-2xl text-yellow-500 font-bold">NODE</span>
            <span className="text-xl font-medium text-green-600">70%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-5">
            <div
              className="bg-green-600 h-5 rounded-full"
              style={{ width: "70%" }}
            ></div>
          </div>
        </div>
        {/* progress end */}
        <div className="grid grid-cols-1 md:grid-cols-1 w-1/2 m-auto pb-5">
          <div className="mb-1 flex justify-between">
            <span className="text-2xl text-yellow-500 font-bold">GIT</span>
            <span className="text-xl font-medium text-green-700">80%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-5">
            <div
              className="bg-green-700 h-5 rounded-full"
              style={{ width: "80%" }}
            ></div>
          </div>
        </div>
        {/* progress end */}
      </div>
    </div>
  );
};

export default Skills;
