import React from 'react';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
      <>
      <nav className="fixed flex flex-wrap items-center justify-between px-2 py-3 bg-gray-700 w-full">
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
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                href="#home"
              >
                <i className="fas fa-home text-lg leading-lg text-white opacity-75"></i><span className="ml-4">Home</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                href="#skills"
              >
                <i className="fas fa-fill-drip text-lg leading-lg text-white opacity-75"></i><span className="ml-4">Skills</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                href="#pablo"
              >
                <i className="fas fa-project-diagram text-lg leading-lg text-white opacity-75"></i><span className="ml-4">Projects</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                href="#pablo"
              >
                <i className="far fa-star text-lg leading-lg text-white opacity-75"></i><span className="ml-4">Reviews</span>
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