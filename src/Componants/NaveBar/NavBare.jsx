
import { McLogo } from "../McLogo";
import "../Style/NavBar.css";
import { Dropdown } from "./Dropdown";
import { useState, useEffect, useRef } from "react";

export const NavBare = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="Nav-Container"  style={{ userSelect: 'none' }} >
      <div className="Section-Container">
        <McLogo color={'text-black'} />
        
            {
              windowWidth > 885?
              <div className="clicks-Sections">
                <h1><button onClick={() => {
                  const skills = document.getElementById('Skills');
                  skills?.scrollIntoView({ behavior:'smooth' });
                }} 
                className='border-black'>About //</button></h1>
                
                <h1><button 
                onClick={() => {
                  const Projects = document.getElementById('Projects');
                  Projects?.scrollIntoView({ behavior:'smooth' });
                }} 
                className="border-black">Portfolio</button></h1>
                {/* <h1><a href="#option3" className="border-black">Hire Me</a></h1> */}
              </div>
              : <Dropdown />
            }
        
      </div>
    </div>
  )
}