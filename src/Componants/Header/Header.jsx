
import "../Style/Header.css"
import BtnPart from "./BtnPart"
import data from '../../data.json' 

import myimg from  '../../../public/CardPicHeader.png'
import myimg2 from  '../../../public/YacinArw.svg'


export const Header = () => {
  const yacien = data.infos.Picture;
  return (
    <div className="header-container">
      <div className="text-section">
        <div className="text-part">
          <h1>I Create 💻 top notch websites</h1>
        </div>
        <BtnPart />
      </div>
      <div className="picture-section">
          <img src={myimg2} alt="" />
          <img src={myimg} alt="" />
      </div>
    </div>
  )
}
