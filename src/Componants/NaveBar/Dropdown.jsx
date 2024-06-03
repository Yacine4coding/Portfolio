import React, { useState } from 'react';
import '../Style/NavBar.css';

export const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="dropdown">
        <button className="dropdown-toggle px-4 py-2" onClick={toggleDropdown}>
          <img src="./assets/more.png" className='w-10' alt="" />
        </button>
        {isOpen && (
          <ul className="dropdown-menu border-2  border-black">
            <li><a href="#option1" className='border-b-2 border-black'>About //</a></li>
            <li><a href="#option2" className="border-b-2 border-black">Portfolio</a></li>
            <li><a href="#option3" className="border-b-2 border-black">Hire Me</a></li>
          </ul>
        )}
      </div>
    );
}
