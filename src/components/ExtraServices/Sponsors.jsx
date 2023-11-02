import { useEffect, useState } from "react";
import SponsorsData from '../../services/sponsors.json'

const GymsAdd = () =>{

  const [sponsorsData, setSponsorsData] = useState([])

  useEffect(() => {
    setSponsorsData(SponsorsData)
  });

  return (
    <div className="row row-cols-1 row-cols-md-2 g-4">
    {sponsorsData.map(element => (
      <div key={element.name} className="col">
        <div className="card h-100">
          <img
            src={element.img}
            className="card-img-top imgNormalize"
            alt={element.name}
          />
          <div className="card-body text-center">
            <h3 className="card-title">{element.name}</h3>
            <div className="card-text row justify-content-center mt-3">
              <a href={element.contact} className="btn mainColor col-6">
                Ver Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
  
  )
}

export default GymsAdd