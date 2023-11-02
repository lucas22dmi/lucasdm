import Persons from './../components/ExtraServices/Persons.jsx'
import GymsAdd from './../components/ExtraServices/GymsAdd.jsx'
import Sponsors from './../components/ExtraServices/Sponsors.jsx'

import { useEffect, useState } from "react";

const ExtraServices = () => {

  
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
    <main className="container-fluid">
      <article className="row justify-content-center ">
        <div className='col-8 text-center mb-3 hidden'>
          <h2 className='my-4'>Servicios extra</h2>
          <p>Hay 3 pilares fundamentales que complementan el exito de un buen programa de entrenamiento.</p>

          <ul class="list-group list-group-flush text-center">
            <li class="list-group-item "><b>Nutrición</b>, es importante darle a tu cuerpo lo necesario para mantener una buena condicion y performance.</li>
            <li class="list-group-item "><b>Movilidad</b>, es la capacidad de tu cuerpo de alcanzar y mantener posiciones sin dolor, compensaciones y disfunciones.</li>
            <li class="list-group-item "><b>Entrenamiento</b>, la importancia de un lugar con la atmosfera correcta y los elementos necesarios.</li>
          </ul>

          <p>Por suerte en #DmitrukStrengthSystems te tenemos cubierto y como alumno automaticamente accedes a un <b>10% de descuento</b> en los servicios de nuestros colegas en nutricion, movilidad y de mensualidad en los gimnasios de fuerza adheridos.</p>

        </div>

        <div className='col-10 col-sm-5 hidden'>

          <Persons />

        </div>

      </article>

      <article className="row justify-content-center">

        <div className='col-12 my-4 hidden'>
          <h2 className='my-4 text-center'>Sponsors</h2>

          <div className='row justify-content-center'>
            <div className='col-10 col-sm-5'>
              <Sponsors />
            </div>
          </div>

        </div>
      </article>

    </main>
  );
};

export default ExtraServices;
