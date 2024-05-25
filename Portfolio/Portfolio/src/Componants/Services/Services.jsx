

import "../Style/Services.css"
import ServiseCard from "./ServiceCard";
import data from '../../data.json'



export const Services = () => {


  return (
    <div className="Services-container">
      <div className="header-text">
        <h1>Services I’m providing
        that derive 99% result</h1>
        <img src="src\assets\Frame 21.svg" alt="" />
      </div>

      <div className="Srvices-Table-Container">
        {
          data.infos.Services?.map((service, i) => (
            <ServiseCard service={service} key={i} />
          ))
        }
        
      </div>
    </div>
  )
}
