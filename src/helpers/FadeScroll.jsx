import React, { useEffect, useState, useRef } from 'react';
import './../App.css'; // Crea este archivo CSS para los estilos

const FadingOnScroll = ({ children }) => {
  const [scrollOpacity, setScrollOpacity] = useState(0);
  const fadingRef = useRef(null);

  const handleScroll = () => {
    if (fadingRef.current) {
      const { top, bottom } = fadingRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calcula la altura del componente en relación con la ventana del navegador
      const componentHeight = bottom - top;

      // Calcula la fracción de visibilidad del componente en la ventana
      const visibilityFraction = Math.min(Math.max((windowHeight - top) / componentHeight, 0), 1);

      // Ajusta la opacidad en función de la fracción de visibilidad
      setScrollOpacity(visibilityFraction);
    }
  };

  useEffect(() => {
    // Agrega el evento de scroll al montar el componente
    window.addEventListener('scroll', handleScroll);
    return () => {
      // Limpia el evento al desmontar el componente
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="fading-on-scroll" ref={fadingRef} style={{ opacity: scrollOpacity }}>
      {children}
    </div>
  );
};

export default FadingOnScroll;
