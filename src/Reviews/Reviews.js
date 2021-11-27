import React from "react";
import Fade from "react-reveal/Fade";

const Reviews = () => {
  return (
    <div id="reviews" className="container mx-auto px-4 pt-12 mt-16">
   <Fade duration={4000}>   <h1 className="text-5xl text-center text-white py-2 mt-5 mb-10">
        My <span className="text-yellow-500">Client</span> Review
        <hr className="mt-4 w-2/3 mx-auto" />
      </h1>
</Fade>
      <div className="container flex flex-col md:flex-row gap-4 mx-auto">
        <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
          <div className="flex justify-center md:justify-end -mt-16">
            <img
              className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
              src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt=""
            />
          </div>
          <div>
            <h2 className="text-gray-800 text-3xl font-semibold">
              Design Tools
            </h2>
            <p className="mt-2 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              dolores deserunt ea doloremque natus error, rerum quas odio
              quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus
              consequuntur!
            </p>
          </div>
          <div className="flex justify-end mt-4">
            <a href="#home" className="text-xl font-medium text-indigo-500">
              John Doe
            </a>
          </div>
        </div>
        <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
          <div className="flex justify-center md:justify-end -mt-16">
            <img
              className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
              src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt=""
            />
          </div>
          <div>
            <h2 className="text-gray-800 text-3xl font-semibold">
              Design Tools
            </h2>
            <p className="mt-2 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              dolores deserunt ea doloremque natus error, rerum quas odio
              quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus
              consequuntur!
            </p>
          </div>
          <div className="flex justify-end mt-4">
            <a href="#home" className="text-xl font-medium text-indigo-500">
              John Doe
            </a>
          </div>
        </div>
        <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
          <div className="flex justify-center md:justify-end -mt-16">
            <img
              className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
              src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt=""
            />
          </div>
          <div>
            <h2 className="text-gray-800 text-3xl font-semibold">
              Design Tools
            </h2>
            <p className="mt-2 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              dolores deserunt ea doloremque natus error, rerum quas odio
              quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus
              consequuntur!
            </p>
          </div>
          <div className="flex justify-end mt-4">
            <a href="#home" className="text-xl font-medium text-indigo-500">
              John Doe
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
