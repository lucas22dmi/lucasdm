import { useEffect, useState } from "react";

import LucasImg from "./../pictures/ABOUT-ME/PHOTOABOUTME.jpg";
import Instagram from "./../pictures/SOCIAL MEDIA/instagram.png";
import Whatssap from "./../pictures/SOCIAL MEDIA/whatsapp.png";
import TikTok from "./../pictures/SOCIAL MEDIA/tik-tok.png";
import Youtube from "./../pictures/SOCIAL MEDIA/youtube.png";

const AboutMe = () => {

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
            <div className="row justify-content-center ">
                <div class="card mb-3 col-10 border-0 mt-5 ">
                    <div class="row align-items-center g-0 hidden">
                        <div class="col-md-3 ">
                            <img
                                src={LucasImg}
                                class="img-fluid rounded-start "
                                alt="..."
                            />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body text-center">
                                <h2 class="card-title my-4">Lucas Dmitruk</h2>
                                <p class="card-text mx-2">
                                    Lucas Dmitruk es un entrenador especializado
                                    en el área del entrenamiento de fuerza.
                                    Actualmente es atleta de Strongman (Cat
                                    Open) y de Powerlifting (Cat -125kg). Con 10
                                    años de experiencia y de estudio en el mundo
                                    del entrenamiento pudo desarrollar un
                                    criterio único de periodización que lo llevó
                                    a obtener títulos nacionales tanto para él
                                    como para sus atletas y participaciones en
                                    eventos internacionales como el Arnold
                                    Classic Strongman de Brasil.
                                </p>
                                <div class="row justify-content-center mt-5">
                                    <h3 className="col-8">
                                        Comunicate conmigo mediante instagram o
                                        whatsapp
                                    </h3>
                                    <div className="col-12 col-sm-6">
                                        <div className="row justify-content-center mt-4">
                                            <div class="col-6 ">
                                                <a
                                                    href="https://www.instagram.com/lucas_dmitruk/"
                                                    title="instagram"
                                                >
                                                    <img
                                                        className="img-fluid vv"
                                                        src={Instagram}
                                                        alt="Instagram"
                                                    />
                                                </a>
                                            </div>

                                            <div class="col-6 ">
                                                <a
                                                    href="https://wa.me/message/UNFXLR6ZJKV3C1"
                                                    title="whatssap"
                                                >
                                                    <img
                                                        className="img-fluid vv"
                                                        src={Whatssap}
                                                        alt="Whatssap"
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-10 col-sm-6 text-center my-3">

                    <div className='row justify-content-center my-4 hidden'>
                        <h3 className="col-12 mb-4">También podes encontarme en mis redes sociales</h3>
                        <div class="col-6 ">
                            <a href="https://www.youtube.com/@dmitrukstrengthsystems" title="instagram icons">
                              <img className='img-fluid vv' src={Youtube} alt="Youtube" />

                            </a>
                        </div>

                        <div class="col-6 ">
                            <a href="https://www.tiktok.com/@lucas_dmitruk" title="instagram icons">
                              <img className='img-fluid vv' src={TikTok} alt="Tiktok" />

                            </a>
                        </div>

                </div>

                </div>
            </div>

            <article className="row justify-content-center text-center mx-3 mt-3">
                <div className="mainColor mb-3 p-5 rounded-4 hidden">
                    <h2 className="text-light">
                        ¿Interesado en entrenamiento presencial?
                    </h2>
                    <p className="text-light">
                        Podes encontrarme unicamente en Ripper (GBA zona sur).
                    </p>

                    <p className="text-light">
                        Mandáme un whatsapp para coordinar dias y horarios.
                    </p>
                    <a className="btn btn-success text-light">Whatssap</a>
                </div>

                <div className="hidden">
                    <ul class="list-group list-group-flush text-center">
                        <li class="list-group-item ">Sede de entrenamiento</li>
                        <li class="list-group-item ">Ripper Gym</li>
                        <li class="list-group-item ">
                            Juan Díaz de Solís 325 - Quilmes
                        </li>
                    </ul>
                </div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13116.20224351764!2d-58.2488622!3d-34.7291199!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a32f2e88142f3f%3A0x9b7fbeed8aa89c7c!2sRipper%20Gym!5e0!3m2!1ses-419!2sar!4v1691092799853!5m2!1ses-419!2sar"
                    className="my-4 hidden"
                    height={350}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </article>
        </main>
    );
};

export default AboutMe;
