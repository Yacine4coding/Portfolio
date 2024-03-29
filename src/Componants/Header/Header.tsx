
import "../Style/Header.css"
import BtnPart from "./BtnPart"


export const Header = () => {
  return (
    <div className="header-container">
      <div className="text-section">
        <div className="text-part">
          <h1>I Create 💻 top notch websites</h1>
        </div>
        <BtnPart />
      </div>
      <div className="picture-section">
          <img src="src\assets\YacinArw.svg" alt="" />
          <img src="src\assets\CardPicHeader.png" alt="" />
      </div>
    </div>
  )
}
