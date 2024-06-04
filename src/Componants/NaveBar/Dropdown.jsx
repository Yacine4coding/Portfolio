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
          <ul className="dropdown-menu border-2 border-black">
            <h1><a onClick={() => {
              const skills = document.getElementById('Skills');
              skills?.scrollIntoView({ behavior:'smooth' });
              setIsOpen(!isOpen);
            }} 
            className='border-b-2 border-black'>About //</a></h1>
            
            <h1><a 
            onClick={() => {
              const Projects = document.getElementById('Projects');
              Projects?.scrollIntoView({ behavior:'smooth' });
              setIsOpen(!isOpen);
            }} 
            className="border-b-2 border-black">Portfolio</a></h1>
          </ul>
        )}
      </div>
    );
}
