import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [menuOpen, setMenuOpen] = useState(true);


  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-blue-500 py-4 md:py-4 sticky top-0 z-50">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center sticky">
        <Link
          to="/"
          className="text-xl md:text-xl hover:text-blue-300 text-white font-extrabold p-2 px-4 md:px-16 text-center md:text-left">EYES
        </Link>
        <div className="md:hidden">
        <div className="flex justify-between items-center">
  <button
    className="text-white text-xl p-2 px-4"
    onClick={toggleMenu}
    aria-label="Toggle Menu"
  >
    ☰
  </button>
</div>

        </div>
        <nav className={`mt-2 mr-10 p-2   md:mt-0  ${menuOpen ? 'block' : 'hidden'} md:block`}>
          <ul className="flex flex-co  md:flex-row space-y-2 md:space-y-0 md:space-x-4 justify-center md:justify-start">
            <li>
              <Link to="/" className="text-white hover:text-blue-300 text-base md:text-me p-2  ">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-white hover:text-blue-300 text-base md:text-me p-2 ">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="text-white hover:text-blue-300 text-base md:text-me p-2 ">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-white hover:text-blue-300 text-base md:text-me p-2 ">
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
