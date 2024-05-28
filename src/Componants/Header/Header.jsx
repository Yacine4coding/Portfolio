
import "../Style/Header.css"
import BtnPart from "./BtnPart"
import data from '../../data.json' 

export const Header = () => {
  const { infos } = data
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
          <img src={infos.Picture} alt="" />
      </div>
    </div>
  )
}