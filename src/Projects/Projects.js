import React from 'react';
import {
  Card
} from 'tailwind-mobile/react';

const Projects = () => {
  return (
  <div className="container mx-auto">
     <h1 className="text-5xl text-center py-5 mt-5 mb-10 text-white">
        Some Of My Projects{" "}
      </h1>
    <div class="grid grid-cols-1 md:grid-cols-4">
      {/* Start Project 1 */}
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
             <a className="bg-green-500 transform motion-safe:hover:scale-110 px-4 py-1 font-bold text-white rounded " href="https://sunglass-pro.web.app/" target="_blank" rel="noopener noreferrer">Live Link</a>
             {/* Font Awesome */}
              <a className="transform motion-safe:hover:scale-110 px-4 py-1 font-bold text-white rounded" href="https://github.com/mukitcoder/sunglass" target="_blank" rel="noopener noreferrer"><i className="fab fa-github text-black"><span className="ml-2 font-bold font-sans">Github Link</span></i></a>
            </div>
          }
        >
          <div className="text-gray-500 shadow-inner font-medium">This is a full stack website. Admin & User can add or delete booking.</div>
        </Card>
      </div>
      {/* End Project 1 */}
       {/* Start Project 2 */}
       <div>
      <Card
          header={
            <div
              className="-mx-4 -my-2 h-48 p-4 flex items-end text-white font-bold bg-cover bg-center"
              style={{
                backgroundImage:
                  'url(https://i.ibb.co/k0xwCpK/the-travel.png)',  height:'300px', marginTop:'5px'
              }}
            >
              <h4 className="bg-red-400 px-4 py-1 rounded-full">Travel Web</h4>
            </div>
          }
          footer={
            <div className="flex justify-between">
             <a className="bg-green-500 transform motion-safe:hover:scale-110 px-4 py-1 font-bold text-white rounded " href="https://sunglass-pro.web.app/" target="_blank" rel="noopener noreferrer">Live Link</a>
             {/* Font Awesome */}
              <a className="transform motion-safe:hover:scale-110 px-4 py-1 font-bold text-white rounded" href="https://github.com/mukitcoder/sunglass" target="_blank" rel="noopener noreferrer"><i className="fab fa-github text-black"><span className="ml-2 font-bold font-sans">Github Link</span></i></a>
            </div>
          }
        >
          <div className="text-gray-500 shadow-inner font-medium">This is a full stack website. User can add or delete booking.</div>
        </Card>
      </div>
      {/* End Project 2 */}
       {/* Start Project 3 */}
       <div>
      <Card
          header={
            <div
              className="-mx-4 -my-2 h-48 p-4 flex items-end text-white font-bold bg-cover bg-center"
              style={{
                backgroundImage:
                  'url(https://i.ibb.co/BC2yzBd/dentistry.png)',  height:'300px', marginTop:'5px'
              }}
            >
              <h4 className="bg-red-400 px-4 py-1 rounded-full">Dentistry</h4>
            </div>
          }
          footer={
            <div className="flex justify-between">
             <a className="bg-green-500 transform motion-safe:hover:scale-110 px-4 py-1 font-bold text-white rounded " href="https://sunglass-pro.web.app/" target="_blank" rel="noopener noreferrer">Live Link</a>
             {/* Font Awesome */}
              <a className="transform motion-safe:hover:scale-110 px-4 py-1 font-bold text-white rounded" href="https://github.com/mukitcoder/sunglass" target="_blank" rel="noopener noreferrer"><i className="fab fa-github text-black"><span className="ml-2 font-bold font-sans">Github Link</span></i></a>
            </div>
          }
        >
          <div className="text-gray-500 shadow-inner font-medium">Authentication project. Dynamic registration and login.</div>
        </Card>
      </div>
       {/* End Project 3 */}
       {/* Start Project 4 */}
       <div>
      <Card
          header={
            <div
              className="-mx-4 -my-2 h-48 p-4 flex items-end text-white font-bold bg-cover bg-center"
              style={{
                backgroundImage:
                  'url(https://i.ibb.co/h866H66/verbalizer.png)',  height:'300px', marginTop:'5px'
              }}
            >
              <h4 className="bg-red-400 px-4 py-1 rounded-full">Verbalizer</h4>
            </div>
          }
          footer={
            <div className="flex justify-between">
             <a className="bg-green-500 transform motion-safe:hover:scale-110 px-4 py-1 font-bold text-white rounded " href="https://sunglass-pro.web.app/" target="_blank" rel="noopener noreferrer">Live Link</a>
             {/* Font Awesome */}
              <a className="transform motion-safe:hover:scale-110 px-4 py-1 font-bold text-white rounded" href="https://github.com/mukitcoder/sunglass" target="_blank" rel="noopener noreferrer"><i className="fab fa-github text-black"><span className="ml-2 font-bold font-sans">Github Link</span></i></a>
            </div>
          }
        >
          <div className="text-gray-500 shadow-inner font-medium">Authentication project. Learning for various type of language</div>
        </Card>
      </div>
       {/* End Project 4 */}
       {/* Start Project 5 */}
       <div>
      <Card
          header={
            <div
              className="-mx-4 -my-2 h-48 p-4 flex items-end text-white font-bold bg-cover bg-center"
              style={{
                backgroundImage:
                  'url(https://i.ibb.co/xMHw1x1/life-skill-devlopment.png)',  height:'300px', marginTop:'5px'
              }}
            >
              <h4 className="bg-red-400 px-4 py-1 rounded-full">Life Skill</h4>
            </div>
          }
          footer={
            <div className="flex justify-between">
             <a className="bg-green-500 transform motion-safe:hover:scale-110 px-4 py-1 font-bold text-white rounded " href="https://sunglass-pro.web.app/" target="_blank" rel="noopener noreferrer">Live Link</a>
             {/* Font Awesome */}
              <a className="transform motion-safe:hover:scale-110 px-4 py-1 font-bold text-white rounded" href="https://github.com/mukitcoder/sunglass" target="_blank" rel="noopener noreferrer"><i className="fab fa-github text-black"><span className="ml-2 font-bold font-sans">Github Link</span></i></a>
            </div>
          }
        >
          <div className="text-gray-500 shadow-inner font-medium">Life Skill Development related project.You can hire a speaker !</div>
        </Card>
      </div>
       {/* End Project 5 */}
        {/* Start Project 6 */}
        <div>
      <Card
          header={
            <div
              className="-mx-4 -my-2 h-48 p-4 flex items-end text-white font-bold bg-cover bg-center"
              style={{
                backgroundImage:
                  'url(https://i.ibb.co/VWXmmmh/book-archive.png)',  height:'300px', marginTop:'5px'
              }}
            >
              <h4 className="bg-red-400 px-4 py-1 rounded-full">Book Archive</h4>
            </div>
          }
          footer={
            <div className="flex justify-between">
             <a className="bg-green-500 transform motion-safe:hover:scale-110 px-4 py-1 font-bold text-white rounded " href="https://sunglass-pro.web.app/" target="_blank" rel="noopener noreferrer">Live Link</a>
             {/* Font Awesome */}
              <a className="transform motion-safe:hover:scale-110 px-4 py-1 font-bold text-white rounded" href="https://github.com/mukitcoder/sunglass" target="_blank" rel="noopener noreferrer"><i className="fab fa-github text-black"><span className="ml-2 font-bold font-sans">Github Link</span></i></a>
            </div>
          }
        >
          <div className="text-gray-500 shadow-inner font-medium">It's a Book API project. You can search book from here.</div>
        </Card>
      </div>
      {/* End Project 6 */}
      {/* Start Project 7 */}
      <div>
      <Card
          header={
            <div
              className="-mx-4 -my-2 h-48 p-4 flex items-end text-white font-bold bg-cover bg-center"
              style={{
                backgroundImage:
                  'url(https://i.ibb.co/zQxf326/ranga-store.png)',  height:'300px', marginTop:'5px'
              }}
            >
              <h4 className="bg-red-400 px-4 py-1 rounded-full">Panda Store</h4>
            </div>
          }
          footer={
            <div className="flex justify-between">
             <a className="bg-green-500 transform motion-safe:hover:scale-110 px-4 py-1 font-bold text-white rounded " href="https://sunglass-pro.web.app/" target="_blank" rel="noopener noreferrer">Live Link</a>
             {/* Font Awesome */}
              <a className="transform motion-safe:hover:scale-110 px-4 py-1 font-bold text-white rounded" href="https://github.com/mukitcoder/sunglass" target="_blank" rel="noopener noreferrer"><i className="fab fa-github text-black"><span className="ml-2 font-bold font-sans">Github Link</span></i></a>
            </div>
          }
        >
          <div className="text-gray-500 shadow-inner font-medium">Simple Bootstrap Project. Have a shopping cart</div>
        </Card>
      </div>
      {/* End Project 7 */}
      {/* Start Project 8 */}
      <div>
      <Card
          header={
            <div
              className="-mx-4 -my-2 h-48 p-4 flex items-end text-white font-bold bg-cover bg-center"
              style={{
                backgroundImage:
                  'url(https://i.ibb.co/5MDXZx6/honda.png)',  height:'300px', marginTop:'5px'
              }}
            >
              <h4 className="bg-red-400 px-4 py-1 rounded-full">Honda CBR</h4>
            </div>
          }
          footer={
            <div className="flex justify-between">
             <a className="bg-green-500 transform motion-safe:hover:scale-110 px-4 py-1 font-bold text-white rounded " href="https://sunglass-pro.web.app/" target="_blank" rel="noopener noreferrer">Live Link</a>
             {/* Font Awesome */}
              <a className="transform motion-safe:hover:scale-110 px-4 py-1 font-bold text-white rounded" href="https://github.com/mukitcoder/sunglass" target="_blank" rel="noopener noreferrer"><i className="fab fa-github text-black"><span className="ml-2 font-bold font-sans">Github Link</span></i></a>
            </div>
          }
        >
          <div className="text-gray-500 shadow-inner font-medium">Honda CBR related simple Bootstrap project. </div>
        </Card>
      </div>
       {/* End Project 8 */}
       {/* Start Project 9 */}
      <div>
      <Card
          header={
            <div
              className="-mx-4 -my-2 h-48 p-4 flex items-end text-white font-bold bg-cover bg-center"
              style={{
                backgroundImage:
                  'url(https://i.ibb.co/x5pH7QS/football.png)',  height:'300px', marginTop:'5px'
              }}
            >
              <h4 className="bg-red-400 px-4 py-1 rounded-full">COPA Football</h4>
            </div>
          }
          footer={
            <div className="flex justify-between">
             <a className="bg-green-500 transform motion-safe:hover:scale-110 px-4 py-1 font-bold text-white rounded " href="https://sunglass-pro.web.app/" target="_blank" rel="noopener noreferrer">Live Link</a>
             {/* Font Awesome */}
              <a className="transform motion-safe:hover:scale-110 px-4 py-1 font-bold text-white rounded" href="https://github.com/mukitcoder/sunglass" target="_blank" rel="noopener noreferrer"><i className="fab fa-github text-black"><span className="ml-2 font-bold font-sans">Github Link</span></i></a>
            </div>
          }
        >
          <div className="text-gray-500 shadow-inner font-medium">Thsi website is only for football lover. Bootstrap Project</div>
        </Card>
      </div>
      {/* End Project 9 */}
      {/* Start Project 10 */}
      <div>
      <Card
          header={
            <div
              className="-mx-4 -my-2 h-48 p-4 flex items-end text-white font-bold bg-cover bg-center"
              style={{
                backgroundImage:
                  'url(https://i.ibb.co/M6QCWQZ/macbook-pro.png)',  height:'300px', marginTop:'5px'
              }}
            >
              <h4 className="bg-red-400 px-4 py-1 rounded-full">Mack Book Pro</h4>
            </div>
          }
          footer={
            <div className="flex justify-between">
             <a className="bg-green-500 transform motion-safe:hover:scale-110 px-4 py-1 font-bold text-white rounded " href="https://sunglass-pro.web.app/" target="_blank" rel="noopener noreferrer">Live Link</a>
             {/* Font Awesome */}
              <a className="transform motion-safe:hover:scale-110 px-4 py-1 font-bold text-white rounded" href="https://github.com/mukitcoder/sunglass" target="_blank" rel="noopener noreferrer"><i className="fab fa-github text-black"><span className="ml-2 font-bold font-sans">Github Link</span></i></a>
            </div>
          }
        >
          <div className="text-gray-500 shadow-inner font-medium">It's a Mac Book Pro web and have a stevekaku coupon code</div>
        </Card>
      </div>
      {/* End Project 10 */}
    </div>
  </div>
  );
};

export default Projects;