import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="fixed z-50 flex flex-wrap items-center justify-between px-2 py-3 bg-gray-800 w-full">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="#pablo"
            >
              MUKIT PORTFOLIO
            </a>
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
                <a
                  className="px-3 py-2 flex items-center text-base uppercase font-bold leading-snug text-white hover:text-yellow-500 transform hover:scale-110 motion-reduce:transform-none"
                  href="#home"
                >
                  <Link to="home">
                    <i className="fas fa-home"></i>
                    <span className="ml-2">Home</span>
                  </Link>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-base uppercase font-bold leading-snug text-white hover:text-yellow-500 transform hover:scale-110 motion-reduce:transform-none"
                  href="#skills"
                >
                  <i className="fas fa-fill-drip"></i>
                  <span className="ml-2">Skills</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-base uppercase font-bold leading-snug text-white hover:text-yellow-500 transform hover:scale-110 motion-reduce:transform-none"
                  href="#projects"
                >
                  <i className="fas fa-project-diagram"></i>
                  <span className="ml-2">Projects</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-base uppercase font-bold leading-snug text-white hover:text-yellow-500 transform hover:scale-110 motion-reduce:transform-none"
                  href="#reviews"
                >
                  <Link to="about">
                    <i class="fab fa-pagelines"></i>
                    <span className="ml-2">ABOUT ME</span>
                  </Link>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-base uppercase font-bold leading-snug text-white hover:text-yellow-500 transform hover:scale-110 motion-reduce:transform-none"
                  href="#reviews"
                >
                  <Link to="blog">
                    {" "}
                    <i class="fab fa-blogger-b"></i>
                    <span className="ml-2">BLOG</span>
                  </Link>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
