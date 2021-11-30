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
        <div className="">
         <div class="flex justify-center items-center w-screen h-screen bg-gray-800">

	<div class="container mx-auto mt-10 mb-10 lg:mb-40 lg:px-20">
		<div class="relative w-full my-4 lg:w-9/12 mr-auto rounded-2xl shadow-2xl">
			<img alt="Card" src="https://cdn.pixabay.com/photo/2015/06/08/15/06/woman-801872_960_720.jpg" class="max-w-full rounded-lg shadow-lg"/>
        </div>
		<div class="relative w-full lg:-mt-96 lg:w-3/6 p-8 ml-auto bg-blue-800 rounded-2xl z-50">
		    <div class="flex flex-col text-white">
				<div>
                <h3 class="font-bold text-2xl">{pro?.name}</h3>
                </div>
                <p class="text-white my-5 px-2">
                   {pro?.description}
                </p>
                <div class="flex justify-between pl-2">
                <a
                      href={pro?.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 pl-5 pr-5 bg-transparent border-2 font-bold border-yellow-500 text-white text-lg rounded-lg transition-colors duration-700 transform hover:bg-yellow-500 hover:text-white focus:border-4 focus:border-indigo-300 mr-6"
                    >
                      Live Site
                    </a>
                    
                    <a
                      href={pro?.clientLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 pl-5 pr-5 bg-transparent border-2 font-bold border-yellow-500 text-white text-lg rounded-lg transition-colors duration-700 transform hover:bg-yellow-500 hover:text-white focus:border-4 focus:border-indigo-300 mr-6"
                    >
                      Github
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>

{/* <!-- BUY ME A PIZZA AND HELP SUPPORT OPEN-SOURCE RESOURCES --> */}
{/* <div class="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
	<div>
		<a title="Buy me a pizza" href="https://www.buymeacoffee.com/Dekartmc" target="_blank"
			class="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
			<img class="object-cover object-center w-full h-full rounded-full" src="https://img.icons8.com/emoji/48/000000/pizza-emoji.png"/>
    </a>
	</div>
</div> */}
        </div>
  );
};

export default SingleProject;
