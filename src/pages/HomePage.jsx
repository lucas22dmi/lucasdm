import { useEffect, useState } from "react";

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import ProgramsData from '../services/programs.js'
import MainImg from './../pictures/MAINPAGEWEB.jpg'

import Bank from './../pictures/MEDIOS-DE-PAGO/bank.png'
import MercadoPago from './../pictures/MEDIOS-DE-PAGO/mercado-pago.png'
import Visa from '../pictures/MEDIOS-DE-PAGO/visa.png'
import Mastercard from '../pictures/MEDIOS-DE-PAGO/mastercard.png'
import Paypal from '../pictures/MEDIOS-DE-PAGO/paypal.png'

const HomePage = () => {

  const [programsData, setProgramsData] = useState([])

  useEffect(() => {
    setProgramsData(ProgramsData)
  });

  const settings = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    pauseOnHover: false,
    swipe: false,
    touchMove: false,
    autoplay: true,
    draggable: false,
    speed: 2000,
    autoplaySpeed: 200,
    cssEase: "linear"
  };

  

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

    // Cleanup the observer when the component unmounts
    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []); // Empty dependency array to run the effect only once on mount

  
  return (
    <main className="container-fluid " >
        
      <div className="row justify-content-center ">

        <div className="col-8 my-3 ">

          <ul class="list-group list-group-flush text-center hidden">
            <li class="list-group-item ">Powerlifting</li>
            <li class="list-group-item ">Strongman</li>
            <li class="list-group-item ">Acondicionamiento físico</li>
          </ul>

        </div>

         
        <div className="row justify-content-center hidden">

          <div className="col-10 col-sm-7">
            <h2 class="text-center mb-3">Programas de entrenamiento</h2>
            <p class="text-center ">
                Mis programas búscan llevar tus resultados al siguiente nivel. Por ello, se adaptan a tus objetivos y disponibilidad, así como al equipamiento del que dispongas. Están escritos de forma individual y no son genéricos. Cada cliente y alumno tienen sus propios objetivos y mis programas lo reflejan.
            </p>
          </div>


          <div className="col-12 col-md-6 ">

            <div class="row row-cols-1 row-cols-md-2 g-5 hidden">
              {programsData.map(element => 
              
              <div class="col ">
                  <div class="card ">
                    <img src={element.img} class="card-img-top heigthPhotos" alt={element.name} />
                    <div class="card-body text-center">
                      <h2 class="card-title">{element.name}</h2>
                        <ul class="list-group list-group-flush text-center">
                          <li class="list-group-item "><i class="bi bi-check-circle-fill"></i> {element.item1}</li>
                          <li class="list-group-item "><i class="bi bi-check-circle-fill"></i> {element.item2}</li>
                          <li class="list-group-item "><i class="bi bi-check-circle-fill"></i> {element.item3}</li>
                          <li class="list-group-item "><i class="bi bi-check-circle-fill"></i> {element.item4}</li>
                          <li class="list-group-item "><i class="bi bi-check-circle-fill"></i> {element.item5}</li>
                        </ul>                    
                      </div>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>

        <div class="main-container row-justify-content-center mt-5 ">
          <div class="col-11 col-sm-6  main-logo-container py-3 ">
            <div class="px-3 backgroundStart backgroundButtons hidden">

                <div className=" text-center ">
                  <h2 class="text-center mt-5 mb-4 ">Estás a dos pasos de empezar:</h2>
                  <p class="text-center my-3 ">Elegí tu objetivo y dejame todos tus datos en este formulario de inscripción</p>
                </div>

                <div  className=" text-center pb-5">
                  <a target="_blank" class=" btn backgroundForm text-center" href="https://docs.google.com/forms/d/1TeyTgMONt9HhektqOs2gAt44KXLIJFQ7DuCd5bYSOnw/edit?usp=drivesdk">Completar formulario</a>
                  <p class="text-center my-4">Comunicate directamente conmigo por Whatsapp para abonar tu programa y empezar a sumar kilos a la barra </p>
                  <a target="_blank" class="btn backgroundWhatssap text-center " href="https://wa.me/message/UNFXLR6ZJKV3C1">Whatsapp</a>

                </div>

            </div>
          </div>
          <img class="main-photo" src={MainImg} alt="Lucas Dmitruk" />
        </div>


      </div>
     
        <article className="container-fluid">
          

          <div className="row justify-content-center align-items-center hidden">
              <div className="col-8 text-center my-4">
                  <h2 className="mb-3">Medios de pago</h2>
                  <p className="mb-3">Todos los medios de pago disponibles. Queremos que te preocupes por tu entrenamiento, por lo que la forma en la que abones, no sea un impedimento a la hora de comenzar.</p>
              </div>

              <div className="col-12 col-sm-6 ">

                <Slider {...settings} className="d-flex align-items-center" >
                  <div>
                    <img className="widthSlider" src={Bank} alt="Imagen 1" />
                  </div>
                  <div>
                    <img className="widthSlider" src={MercadoPago} alt="Imagen 1" />
                  </div>

                  <div>
                    <img className="widthSlider" src={Paypal} alt="Imagen 1" />
                  </div>

                  <div>
                    <img className="widthSlider" src={Visa} alt="Imagen 1" />
                  </div>

                  <div>
                    <img className="widthSlider" src={Mastercard} alt="Imagen 1" />
                  </div>
                </Slider>
                
              </div>
                        
            </div>
        </article>
      
    </main>
  );
};

export default HomePage;
