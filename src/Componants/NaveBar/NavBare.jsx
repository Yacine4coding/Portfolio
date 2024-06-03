
import { McLogo } from "../McLogo";
import "../Style/NavBar.css";
import { Dropdown } from "./Dropdown";
import { useState, useEffect } from "react";

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

  

  const wideScreen = ``

  return (
    <div className="Nav-Container"  style={{ userSelect: 'none' }} >
      <div className="Section-Container">
        <McLogo color={'text-black'} />
        
            {
              windowWidth > 885?
              <div className="clicks-Sections">
                <h1>About //</h1>
                <h1>Portfolio</h1>
                <h1>Hire Me</h1> 
              </div>
              : <Dropdown />
            }
        
      </div>
    </div>
  )
}