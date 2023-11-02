import { useEffect, useState } from "react";
import AthletesData from '../../services/athletes.js'

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const GymsAdd = () =>{

  const [athletesData, setAthletesData] = useState([])

  useEffect(() => {
    setAthletesData(AthletesData)
    console.log(athletesData)
  });

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []); 

  return (
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-5 g-4 hidden">
      
      {athletesData.map(element =>
        <div key={element.name} class="col ">
          <div class="card border-0 border-bottom">
            <img src={element.img} class="card-img-top normalized-image" alt={element.name} />
            <div class="card-body text-center">
              <h3 class="card-title">{element.name}</h3>
              <p className="card-text">{element.category}</p>
            </div>
          </div>

        </div> 
      )}
    </div>
    
  )
}

export default GymsAdd