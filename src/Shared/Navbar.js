import React from 'react';
import { TailwindNavbar } from 'tailwind-navbar-react';
import logo from '../images/mukit_logo.png'

const Navbar = () => {
    return (
        <TailwindNavbar
        brand={
          <img src={logo} width="150" height="40" alt="Brand logo" />
        }
        className="py-1"
      >
        <nav>
          <ul className="items-center justify-between pt-4 text-base lg:flex lg:pt-0">
            <li>
              <a className="block px-0 py-3 border-b-2 border-transparent lg:p-4 hover:border-indigo-400" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="block px-0 py-3 border-b-2 border-transparent lg:p-4 hover:border-indigo-400" href="/home">
                My Projects
              </a>
            </li>
            <li>
              <a className="block px-0 py-3 border-b-2 border-transparent lg:p-4 hover:border-indigo-400" href="/home">
                Resume
              </a>
            </li>
            <li>
              <a className="block px-0 py-3 border-b-2 border-transparent lg:p-4 hover:border-indigo-400" href="/">
                Reviews
              </a>
            </li>
          </ul>
        </nav>
      </TailwindNavbar>
    );
};

export default Navbar;