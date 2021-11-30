import React from "react";
import { Link } from "react-router-dom";
import { NavHashLink } from 'react-router-hash-link';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="fixed z-50 flex flex-wrap items-center justify-between px-2 py-3 bg-gray-800 w-full">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <span
              className="text-xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              
            >
              <Link to="/">MUKIT PORTFOLIO</Link>
            </span>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none text-black"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars text-white"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <span
                  className="px-3 py-2 flex items-center text-base uppercase font-bold leading-snug text-white hover:text-yellow-500 transform hover:scale-110 motion-reduce:transform-none"
                  
                >
                  <NavHashLink to="/#home">
                    <i className="fas fa-home"></i>
                    <span className="ml-2">Home</span>
                  </NavHashLink>
                </span>
              </li>
              <li className="nav-item">
                <span
                  className="px-3 py-2 flex items-center text-base uppercase font-bold leading-snug text-white hover:text-yellow-500 transform hover:scale-110 motion-reduce:transform-none"
                 
                >
                 <NavHashLink to="/#skills"> <i className="fas fa-fill-drip"></i>
                  <span className="ml-2">Skills</span></NavHashLink>
                </span>
              </li>
              <li className="nav-item">
                <span
                  className="px-3 py-2 flex items-center text-base uppercase font-bold leading-snug text-white hover:text-yellow-500 transform hover:scale-110 motion-reduce:transform-none"
                 
                >
                  <NavHashLink to="/#projects"><i className="fas fa-project-diagram"></i>
                  <span className="ml-2">Projects</span></NavHashLink>
                </span>
              </li>
              <li className="nav-item">
                <span
                  className="px-3 py-2 flex items-center text-base uppercase font-bold leading-snug text-white hover:text-yellow-500 transform hover:scale-110 motion-reduce:transform-none"
                 
                >
                  <Link to="about">
                    <i className="fab fa-pagelines"></i>
                    <span className="ml-2">ABOUT ME</span>
                  </Link>
                </span>
              </li>
              <li className="nav-item">
                <span
                  className="px-3 py-2 flex items-center text-base uppercase font-bold leading-snug text-white hover:text-yellow-500 transform hover:scale-110 motion-reduce:transform-none"
                  
                >
                  <Link to="blog">
                    {" "}
                    <i className="fab fa-blogger-b"></i>
                    <span className="ml-2">BLOG</span>
                  </Link>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
