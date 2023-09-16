import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [menuOpen, setMenuOpen] = useState(true);


  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-white py-4 md:py-4 sticky top-0 z-50">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center sticky">
        <Link
          to="/"
          className="text-xl md:text-xl hover:text-blue-300 text-black font-extrabold p-2 px-4 md:px-16 text-center md:text-left">EYES
        </Link>
        <div className="md:hidden">
          <div className="flex justify-between items-center">
            <button
              className="text-black text-xl absolute left-5 mb-11"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              ☰
            </button>

          </div>
        </div>
        <nav className={`mt-2 mr-10 p-2   md:mt-0  ${menuOpen ? 'block' : 'hidden'} md:block`}>
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-0 justify-center md:justify-start">
            <li>
              <Link to="/" className="text-black hover:text-blue-300 text-base md:text-me p-2 font-bold ">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-black hover:text-blue-300 text-base md:text-me p-2 font-bold">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="text-black hover:text-blue-300 text-base md:text-me p-2 font-bold">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-black hover:text-blue-300 text-base md:text-me p-2 font-bold">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
