
import data from "../data.json"
import { McLogo } from "./McLogo";
import { useState, useEffect } from "react";

export const Footer = () => {
  const { footer } = data.infos;
  
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
    <div className="footer-container"  style={{ userSelect: 'none' }}>
      <footer className="bg-black text-white h-20 sm:h-40 flex items-center justify-center sm:justify-around sm:flex-row flex-col">
        {windowWidth > 640 && <McLogo color={'text-white'} />}
        <ul className=" sm:mt-8  flex justify-center items-center gap-10 sm:justify-end">
              {
                footer.map(({ Name, link, icon},i) =>(
                  <li key={i}>
                    <a
                      href={link}
                      rel="noreferrer"
                      target="_blank"
                      className="text-white flex items-center justify-center transition hover:opacity-75"
                    >
                      <span className="sr-only">{Name}</span>
                      <svg className="h-6 w-7 sm:mb-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" dangerouslySetInnerHTML={{ __html: icon }}>
                      </svg>
                    </a>
                  </li>
                ))
              }
        </ul>
      </footer>
    </div>
  )
}
