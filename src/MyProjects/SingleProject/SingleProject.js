import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const SingleProject = () => {
  const { id } = useParams();
  const [myProject, setMyProject] = useState([]);
  useEffect(() => {
    fetch(`/projects.json`)
      .then((res) => res.json())
      .then((data) => setMyProject(data));
  }, []);
  // find project id
  const pro = myProject.find((pd) => pd.id === id);

  return (
    <div>
      {pro?.length === 0 ? (
        <div class="flex justify-center items-center h-screen">
          <div class="relative w-24 h-24 animate-spin rounded-full bg-gradient-to-r from-purple-400 via-blue-500 to-red-400 ">
            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gray-200 rounded-full border-2 border-white"></div>
          </div>
        </div>
      ) : (
        <div class="flex items-center p-10 w-full h-full bg-white">
          <div class="border-t border-b pt-16 grid grid-cols-2 gap-8">
            <div class="flex flex-col justify-start">
              <div
                class="flex flex-col w-full object-cover h-4/6 justify-items-start border rounded-lg overflow-hidden"
                style={{ minHeigth: "320px" }}
              >
                <img class="w-full h-full object-cover" src={pro?.img} alt="" />
              </div>
            </div>
            <div class="flex flex-col">
              <div class="flex flex-col gap-4">
                <h1 class="capitalize text-4xl font-extrabold">{pro?.name}</h1>
                {/* <h2 class="text-3xl">$44</h2> */}
                <p class="text-lg text-gray-500	">{pro?.description}</p>
                <div class="flex items-center gap-4 my-6 ">
                  <a
                    href={pro?.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 pl-5 pr-5 bg-transparent border-2 font-bold border-yellow-500 text-gray-900 text-sm rounded-lg transition-colors duration-700 transform hover:bg-yellow-500 hover:text-white focus:border-4 focus:border-indigo-300 mr-6"
                  >
                    Live Site
                  </a>
                  <a
                    href={pro?.clientLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 pl-5 pr-5 bg-transparent border-2 font-bold border-yellow-500 text-gray-900 text-sm rounded-lg transition-colors duration-700 transform hover:bg-yellow-500 hover:text-white focus:border-4 focus:border-indigo-300"
                  >
                    <i className="fab fa-github mr-2"></i>
                    Github Code
                  </a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-red-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleProject;
