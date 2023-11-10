import { useEffect, useState } from "react";
import DataPersons from '../../services/persons.js'

const Persons = () =>{

  const [personsData, setPersonsData] = useState([])

  useEffect(() => {
    setPersonsData(DataPersons)
  });

  return (
    <div class="row row-cols-1 row-cols-md-2 g-4">

      {personsData.map(element =>
        <div key={element.name} class="col">
          <div class="card">
            <img src={element.img} class="img-fluid card-img-top altoImg " alt={element.name}/>
            <div class="card-body text-center">
              <h3 class="card-title">{element.name}</h3>
              <ul className="list-group list-group-flush text-center">
              {element.descriptionItems.map((item, index) => (
                <li key={index} className="list-group-item">{item}</li>
              ))}
            </ul>
              <a href={element.contact} target="blank" className="btn mainColor col-6">
                  Ver Instagram
              </a>
            </div>
          </div>

        </div> 
      )}
    </div>
  )
}

export default Persons