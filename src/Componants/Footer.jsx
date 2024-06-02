
import data from "../data.json"
import { McLogo } from "./McLogo";

export const Footer = () => {
  const { footer } = data.infos;
  

  return (
    <div className="footer-container"  style={{ userSelect: 'none' }} >
      <footer className="bg-black text-white h-32 flex items-center justify-between">
        <McLogo color={'text-white'} />
        <ul className="mt-8 flex justify-center items-center gap-10 sm:mt-0 sm:justify-end px-10">
              {
                footer.map(({ Name, link, icon},i) =>(
                  <li key={i}>
                    <a
                      href={link}
                      rel="noreferrer"
                      target="_blank"
                      className="text-white transition hover:opacity-75"
                    >
                    <span className="sr-only">{Name}</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" dangerouslySetInnerHTML={{ __html: icon }}>
                      
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
