import React, { useState } from 'react';
import hamburgerImage from './images/Hamburger_vector.svg'; 
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';




function Dropdown() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div  className="relative dropdown">
      <button
        className="text-2xl cursor-pointer focus:outline-none"
        id="dropdown-button"
        onClick={toggleDropdown}
      >
        <img src={hamburgerImage} alt="Hamburger" /> 
      </button>
      {isDropdownOpen && (
        <div
          className="absolute right-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-md"
          id="dropdown-content"
        >
          <ul>
  <li>
    <Link
      activeClass="active"
      to="name-occupation"
      spy={true}
      smooth={true}
      duration={500}
      className="block px-4 py-2"
    >
      Name and Occupation
    </Link>
  </li>
  <li>
    <Link
      activeClass="active"
      to="about"
      spy={true}
      smooth={true}
      duration={500}
      className="block px-4 py-2"
    >
      About
    </Link>
  </li>
  <li>
    <Link
      activeClass="active"
      to="projects"
      spy={true}
      smooth={true}
      duration={500}
      className="block px-4 py-2"
    >
      Projects
    </Link>
  </li>
  <li>
    <Link
      activeClass="active"
      to="contact"
      spy={true}
      smooth={true}
      duration={500}
      className="block px-4 py-2"
    >
      Contact Me
    </Link>
  </li>
 
</ul>

        </div>
      )}
    </div>
  );
}

export default Dropdown;
