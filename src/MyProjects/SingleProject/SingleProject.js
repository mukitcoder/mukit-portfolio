import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const SingleProject = () => {
    const {id} = useParams()
    const [project, setProject] = useState([])
    useEffect(() => {
        fetch(`/projects.json`)
          .then((res) => res.json())
          .then((data) => setProject(data));
      }, []);
      // find project id
  const pro = project.find((pd) => pd.id === id);
    return (
        <div class="flex items-center p-10 w-full h-full bg-white">
	<div class="border-t border-b pt-16 grid grid-cols-2 gap-8">
		<div class="flex flex-col justify-start">
			<div class="flex flex-col w-full object-cover h-4/6 justify-items-start border rounded-lg overflow-hidden"
				style={{minHeigth:"320px"}}>
				<img class="w-full h-full object-cover" src={pro?.img} alt='nike shoes' />
            </div>
			</div>
			<div class="flex flex-col">
				<div class="flex flex-col gap-4">
					<h1 class="capitalize text-4xl font-extrabold">{pro?.name}</h1>
					<h2 class="text-3xl">$44</h2>
					<p class="text-lg text-gray-500	">{pro?.description}</p>
					<div class="flex items-center gap-4 my-6 cursor-pointer ">
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
                    ><i className="fab fa-github mr-2"></i>
                      Github Code
                    </a>
						<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-400" viewBox="0 0 20 20"
							fill="currentColor">
							<path fill-rule="evenodd"
								d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
								clip-rule="evenodd" />
						</svg>
					</div>
				</div>
			</div>
		</div>
</div>
    );
};

export default SingleProject;