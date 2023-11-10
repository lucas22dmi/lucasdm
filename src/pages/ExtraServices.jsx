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
          <h2 className='my-4 textH2'>Trabajo interdisciplinario</h2>
          <p>Considero que la forma mas eficiente y segura de alcanzar nuestros objetivos es trabajar de forma conjunta con todas las areas que complementan al entrenamiento.</p>

          <ul class="list-group list-group-flush text-center">
            <li class="list-group-item "><b>Nutrición</b>, para optimizar nuestra composicion corporal, nuestra salud y nuestra performance.</li>
            <li class="list-group-item "><b>Movilidad</b>, para alcanzar y mantener posiciones sin dolor, compensaciones y disfunciones.</li>
          </ul>

          <p className='mt-3'>Al comenzar a trabajar conmigo accedes inmediatamente a un descuento especial en estos servicios de la mano de mi equipo de trabajo.</p>

        </div>

        <div className='col-10 col-sm-8 col-xxl-6 hidden'>

          <Persons />

        </div>

      </article>

      <article className="row justify-content-center">

        <div className='col-12 my-4 hidden'>
          <h2 className='my-4 text-center textH2'>Sponsors que nos acompañan</h2>

          <div className='row justify-content-center'>
            <div className='col-10 col-sm-8'>
              <Sponsors />
            </div>
          </div>

        </div>
      </article>

    </main>
  );
};

export default ExtraServices;
