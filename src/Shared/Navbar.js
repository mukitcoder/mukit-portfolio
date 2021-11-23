import React from 'react';
import { TailwindNavbar } from 'tailwind-navbar-react';

const Navbar = () => {
    return (
        <TailwindNavbar
        brand={
          <img src="https://media.discordapp.net/attachments/694834406493257762/729067815499202651/matthew_border.png" width="40" height="40" alt="Brand logo" />
        }
        className="py-1"
      >
        <nav>
          <ul className="items-center justify-between pt-4 text-base lg:flex lg:pt-0">
            <li>
              <a className="block px-0 py-3 border-b-2 border-transparent lg:p-4 hover:border-indigo-400" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="block px-0 py-3 border-b-2 border-transparent lg:p-4 hover:border-indigo-400" href="/">
                My Projects
              </a>
            </li>
            <li>
              <a className="block px-0 py-3 border-b-2 border-transparent lg:p-4 hover:border-indigo-400" href="/">
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