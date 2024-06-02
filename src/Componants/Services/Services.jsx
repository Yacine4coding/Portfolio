

import "../Style/Services.css"
import ServiseCard from "./ServiceCard";
import data from '../../data.json'



export const Services = () => {
  const { Services } = data.infos

  return (
    <div className="Services-container"  style={{ userSelect: 'none' }} >
      <div className="header-text">
        <h1>Services I’m providing
        that derive 99% result</h1>
        <img src="src\assets\Frame 21.svg" alt="" />
      </div>

      <div className="Srvices-Table-Container">
        {
          Services.map((service, i) => (
            <ServiseCard service={service} key={i} />
          ))
        }
        
      </div>
    </div>
  )
}
