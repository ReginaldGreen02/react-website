import React, { useState } from 'react';
import hamburgerImage from './images/Hamburger_vector.svg'; 

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
              <a href="#name-occupation" className="block px-4 py-2">
                Name and Occupation
              </a>
            </li>
            <li>
              <a href="#about" className="block px-4 py-2">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="block px-4 py-2">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#contact" className="block px-4 py-2">
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
