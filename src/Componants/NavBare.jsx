
import "./Style/NavBar.css";

export const NavBare = () => {
  return (
    <div className="Nav-Container">
      <div className="Section-Container">
        <div className="name-Section">
          <div className="container">
            <div className="content">
              <div className="content__container">
                <p className="content__container__text">
                  Hello
                </p>
              
                <ul className="content__container__list">
                  <li className="content__container__list__item">world !</li>
                  <li className="content__container__list__item">coder !</li>
                  <li className="content__container__list__item">users !</li>
                  <li className="content__container__list__item">Yacine </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="clicks-Sections">
            <h1>About //</h1>
            <h1>Portfolio</h1>
            <h1>Hire Me</h1>
        </div>
      </div>
    </div>
  )
}
