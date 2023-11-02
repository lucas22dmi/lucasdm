import { useEffect, useState } from "react";
import GymData from './../../services/gyms.json'

const GymsAdd = () =>{

  const [gymsData, setGymsData] = useState([])

  useEffect(() => {
    setGymsData(GymData)
  });

  return (
    <div class="row row-cols-1 row-cols-md-2 g-4">

      {gymsData.map(element =>
        <div key={element.name} class="col">
          <div class="card h-100 d-flex flex-column justify-content-between">
            <img src={element.img} class="card-img-top imgNormalize" alt={element.name} />
            <div class="card-body text-center">
              <div className="mt-3">
                <div className="row justify-content-center">
                  <a href={element.ubication} className="btn mainColor col-6 m-1">Ver ubicación</a>
                  <a href={element.contact} className="btn mainColor col-6 m-1">Instagram</a>
                </div>
              </div>

            </div>
          </div>

        </div> 
      )}
    </div>
  )
}

export default GymsAdd