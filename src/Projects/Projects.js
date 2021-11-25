import React from 'react';
import {
  Card,
  Link,
} from 'tailwind-mobile/react';

const Projects = () => {
  return (
  <div className="container">
    <div class="grid grid-cols-1 md:grid-cols-4">
      <div>
      <Card
          header={
            <div
              className="-mx-4 -my-2 h-48 p-4 flex items-end text-white font-bold bg-cover bg-center"
              style={{
                backgroundImage:
                  'url(https://i.ibb.co/rwFY5y0/sunglass-pro.png)',  height:'300px', marginTop:'5px'
              }}
            >
              <h4 className="bg-red-400 px-4 py-1 rounded-full">Sunglass Pro</h4>
            </div>
          }
          footer={
            <div className="flex justify-between">
             <a className="bg-green-500 transform motion-safe:hover:scale-110 px-4 py-1 font-bold text-white rounded" href="http://" target="_blank" rel="noopener noreferrer">Live Link</a>
             {/* Font Awesome */}
              <a className="transform motion-safe:hover:scale-110 px-4 py-1 font-bold text-white rounded" href="http://" target="_blank" rel="noopener noreferrer"><i className="fab fa-github text-black"><span className="ml-2 font-bold font-sans">Github Link</span></i></a>
            </div>
          }
        >
          <div className="text-gray-500">This is a full stack website. Admin & User can add or delete booking.</div>
        </Card>
      </div>
    </div>
  </div>
  );
};

export default Projects;