import { McLogo } from "./McLogo";
import "./Style/NavBar.css";

export const NavBare = () => {
  return (
    <div className="Nav-Container"  style={{ userSelect: 'none' }} >
      <div className="Section-Container">
        <McLogo color={'text-black'} />
        <div className="clicks-Sections">
            <h1>About //</h1>
            <h1>Portfolio</h1>
            <h1>Hire Me</h1>
        </div>
      </div>
    </div>
  )
}
