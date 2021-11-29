import React, { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";



const MyProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(`projects.json`)
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  return (
    <div className="w-full" id="projects">
        <Fade duration={4000}>
        {" "}
        <h1 className="text-5xl text-center py-5 mt-5 text-white font-bold">
          Some Of My <span className="text-yellow-500">Projects</span>
          <hr className="mt-4 w-1/2 mx-auto hr-style" />
        </h1>
      </Fade>
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {projects.map((pd) => (
            <div>
              <div
                class="bg-gray-900 relative shadow p-2 rounded-lg text-white hover:scale-95 transition delay-300 duration-300 ease-in-out hover:bg-gray-800"
                pd={pd.key}
              >
                <div class="right-0 mt-4 rounded-l-full absolute text-center font-bold text-xs text-white px-2 py-1 bg-yellow-500">
                  <p>Full Responsive</p>
                </div>
                <img
                  src={pd.img}
                  class=" rounded-lg w-full h-96 object-cover" alt=""
                />
                <div class="flex justify-center">
                  <img
                    src={pd.logo}
                    class="rounded-full -mt-6 border-4 object-center object-cover border-gray-100 mr-2 h-16 w-16 bg-gray-900" alt=""
                  />
                </div>
                <div class="py-2 px-2">
                  <div class=" font-bold font-title text-center">{pd.name}</div>

                  <div class="text-sm font-light text-center my-2">
                    {pd.description}
                  </div>
                  <div className="text-center py-4">
                    <a
                      href={pd.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 pl-5 pr-5 bg-transparent border-2 font-bold border-yellow-500 text-white text-sm rounded-lg transition-colors duration-700 transform hover:bg-yellow-500 hover:text-white focus:border-4 focus:border-indigo-300 mr-6"
                    >
                      Live Site
                    </a>
                    <a
                      href={pd.clientLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 pl-5 pr-5 bg-transparent border-2 font-bold border-yellow-500 text-white text-sm rounded-lg transition-colors duration-700 transform hover:bg-yellow-500 hover:text-white focus:border-4 focus:border-indigo-300"
                    >
                      Github
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MyProjects;
