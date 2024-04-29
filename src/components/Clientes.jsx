
import { Image } from "@nextui-org/react";
import TestimonialImage from "../assets/images/testimonial.jpg";
import TestimonialImage1 from "../assets/images/WhatsApp Image 2024-02-05 at 11.34.03 AM.jpeg";
import TestimonialImage2 from "../assets/images/WhatsApp Image 2024-02-05 at 11.34.28 AM.jpeg";


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useRef, useState } from 'react';
import Logo1 from "../assets/logos/logo-1.png";
import Logo2 from "../assets/logos/logo-2.png";
import Logo3 from "../assets/logos/logo-3.png";
import Logo4 from "../assets/logos/logo-4.png";
import Logo5 from "../assets/logos/logo-5.png";
import Logo6 from "../assets/logos/logo-6.png";
import Logo7 from "../assets/logos/logo-7.png";
import Logo8 from "../assets/logos/logo-8.png";
import Logo9 from "../assets/logos/logo-9.png";
import Logo10 from "../assets/logos/logo-10.png";
import Logo11 from "../assets/logos/logo-11.png";
import Logo12 from "../assets/logos/logo-12.png";
import Logo13 from "../assets/logos/logo-13.png";
import { useMediaQuery } from 'react-responsive';

import { useTranslation } from "react-i18next";


export const Clientes = () => {
  
  
  const [text, i18n] = useTranslation("global")
  const logos = [Logo1, Logo2, Logo3, Logo4, Logo5, Logo6, Logo7, Logo8, Logo9, Logo10, Logo11, Logo12, Logo13];
  const testimonios = [TestimonialImage, TestimonialImage1, TestimonialImage2];

  const testimoniosArray = [
    {
      testimonio: text("client.HID-testimony"),
      nombre: "Jailin Contreras",
      empresa: "HID",
      imagen: TestimonialImage1,
    },
    {
      testimonio: text("client.Sindica-testimony"),
      nombre: "Jailin Contreras",
      empresa: "Sadinca",
      imagen: TestimonialImage2,
    },

    // {
    //   testimonio: "Me encanta este producto y lo recomendaría a cualquiera. No podría ser más fácil de usar, y nuestros múltiples sitios web son maravillosos. Recibimos comentarios positivos todo el tiempo.",
    //   nombre: "LA",
    //   cargo: "Otro Cargo",
    //   empresa: "@OtraEmpresa",
    //   imagen: TestimonialImage,
    // },
    // ...
  ];

  const sliderRef = useRef(null);
  const sliderRefTestimonial = useRef(null);
  const [sliderIndex, setSliderIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      sliderRef.current.slickNext();
    }, 3000);



    return () => clearInterval(interval);
  }, []);


  const [isMobile, setIsMobile] = useState(false);
  const isLargeScreen = useMediaQuery({ query: '(min-width: 1024px)' });



  
  useEffect(() => {
    setIsMobile(!isLargeScreen);
  }, [isLargeScreen]);

  const settingsLogos = {
    dots: isMobile ? false : true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };


  const settingsTestimonios = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,  // Muestra un testimonio a la vez
    slidesToScroll: 1,
    fade: true, // Añade el efecto de desvanecimiento entre testimonios
    beforeChange: (current, next) => setSliderIndex(next),
  };


  const handlePrev = () => {
    sliderRefTestimonial.current.slickPrev();
  };

  const handleNext = () => {
    sliderRefTestimonial.current.slickNext();
  };

  const containerRef = useRef(null);

useEffect(() => {
  const container = containerRef.current;
  let currentSlide = 0;

  if (container) { // Verificar si container no es null
    const nextSlide = () => {
      currentSlide = (currentSlide + 1) % testimonios.length;
      const offset = currentSlide * container.offsetWidth;
      container.scroll({ left: offset, behavior: 'smooth' });
    };

    const intervalId = setInterval(nextSlide, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }
}, [testimonios]);

  return (
    <section id="clientes-section" className="mb-3">
      {/* Partners */}
      <div className="container mx-auto w-full px-2 pt-16">
        <h2 className="text-center text-4xl font-bold text-gray-800 mb-8">
          {text("client.introduction")}
        </h2>

        {/* Company*/}
        <Slider ref={sliderRef} {...settingsLogos} className="lg:my-20 lg-w-lg  lg:mb-30">
          {logos.map((logo, index) => (

            <div key={index} className="flex  h-64 overflow-hidden" >
              <div className="w-full flex items-center justify-center h-64">
                <Image
                  aria-label={`imagen empresa ${index + 1}`}
                  src={logo}
                  className="h-full max-w-full object-contain" width="400px"
                  loading="lazy "
                  alt={`cliente ${index + 1}`}
                />
              </div>
            </div>

          ))}
        </Slider>

        {/* Testimonials */}
        <div className="mt-20 lg:mt-12 flex flex-col items-center lg:flex-row lg:justify-center lg:mb-8 sm:mb-20 mb-12">
          <button onClick={handlePrev} className=" hidden lg:block focus:outline-none p-3 mx-6 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
              className="h-20 w-8 text-gray-800 ">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="relative w-full  lg:block max-w-[800px] ">


            <Slider ref={sliderRefTestimonial} {...settingsTestimonios}>
              {testimoniosArray.map((item, index) => (
                <div key={index} className={`relative lg:w-52 items-start border-gray-200 rounded bg-white mt-4  ${index !== sliderIndex ? 'opacity-0' : 'opacity-100'}`}>
                  <div className="text-center px-4 py-8 pt-20 mx-4 md:mx-0 bg-gray-900 mt-8 bg-opacity-90 rounded-xl">
                    <div className="absolute flex top-0 -mt-8 left-1/2 transform -translate-x-1/2">
                      <svg className="absolute top-0 right-0 -mt-3 -mr-8 w-16 h-16 fill-current text-primaryColor" viewBox="0 0 64 64"
                        aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                        <path d="M37.89 58.338c-2.648-5.63-3.572-10.045-2.774-13.249.8-3.203 8.711-13.383 23.737-30.538l2.
                       135.532c-6.552 10.033-10.532 17.87-11.939 23.515-.583 2.34.22 6.158 2.41 11.457l-13.57 8.283zm-26.963-6.56c-2.648
                       -5.63-3.572-10.046-2.773-13.25.799-3.203 8.71-13.382 23.736-30.538l2.136.533c-6.552 10.032-10.532 17.87-11.94 23.515-.
                      583 2.339.22 6.158 2.41 11.456l-13.57 8.283z" />
                      </svg>
                      <Image aria-label={`imagen testimonio ${index}`} className="relative rounded-full border-2  my-0 h-28 w-28 object-center" src={item.imagen}
                        alt={`imagen testimonial${index}`} />
                    </div>
                    <blockquote className="lg:text-lg text-sm mb-4 text-white ">{item.testimonio}</blockquote>
                    <cite className="block font-bold text-base md:text-lg lg:text-xl xl:text-2xl leading-normal md:leading-relaxed lg:leading-loose text-primaryColor">{item.nombre}</cite>
                    <div className="text-white">
                      <span>{item.cargo}</span> <a className="text-primaryColor font-semibold" href="#0">{item.empresa}</a>
                    </div>
                  </div>
                </div>

              ))}

            </Slider>


          </div>
          <button onClick={handleNext} className="hidden lg:block focus:outline-none mx-6 p-3 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
              className="h-8 w-8 text-gray-800 ">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M9 5l7 7-7 7" />
            </svg>

          </button>


        </div>


      </div>
    </section >
  )
}