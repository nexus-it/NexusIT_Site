
import { Image } from "@nextui-org/react";
import TestimonialImage from "../assets/images/testimonial.jpg";

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

export const Clientes = () => {

  return (
    <section id="clientes-section" className="mb-3">
      {/* Partners */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-center text-4xl font-bold text-gray-800 mb-8">
          Conoce alguna de las marcas que confían en nosotros
        </h2>

        <div className="grid gap-3 grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
          <div className="p-4 grayscale transition duration-200 hover:grayscale-0 bg-gray-100 rounded-xl col-span-1">
            <img aria-label="imagen empresa" src={Logo1} className="h-12 w-auto mx-auto" loading="lazy" alt={`cliente ${Logo1}`} width="" height="" />
          </div>

          <div className="p-4 grayscale transition duration-200 hover:grayscale-0 bg-gray-100 rounded-xl col-span-1">
            <img aria-label="imagen empresa" src={Logo2} className="h-12 w-auto mx-auto" loading="lazy" alt={`cliente ${Logo2}`} width="" height="" />
          </div>

          <div className="p-4 grayscale transition duration-200 hover:grayscale-0 bg-gray-100 rounded-xl col-span-1">
            <img aria-label="imagen empresa" src={Logo3} className="h-12 w-auto mx-auto" loading="lazy" alt={`cliente ${Logo3}`} width="" height="" />
          </div>

          <div className="p-4 grayscale transition duration-200 hover:grayscale-0 bg-gray-100 rounded-xl col-span-1">
            <img aria-label="imagen empresa" src={Logo4} className="h-12 w-auto mx-auto" loading="lazy" alt={`cliente ${Logo4}`} width="" height="" />
          </div>

          <div className="p-4 grayscale transition duration-200 hover:grayscale-0 bg-gray-100 rounded-xl col-span-1">
            <img aria-label="imagen empresa" src={Logo5} className="h-12 w-auto mx-auto" loading="lazy" alt={`cliente ${Logo5}`} width="" height="" />
          </div>

          <div className="p-4 grayscale transition duration-200 hover:grayscale-0 bg-gray-100 rounded-xl col-span-1">
            <img aria-label="imagen empresa" src={Logo6} className="h-12 w-auto mx-auto" loading="lazy" alt={`cliente ${Logo6}`} width="" height="" />
          </div>

          <div className="p-4 grayscale transition duration-200 hover:grayscale-0 bg-gray-100 rounded-xl col-span-1">
            <img aria-label="imagen empresa" src={Logo7} className="h-12 w-auto mx-auto" loading="lazy" alt={`cliente ${Logo7}`} width="" height="" />
          </div>

          <div className="p-4 grayscale transition duration-200 hover:grayscale-0 bg-gray-100 rounded-xl col-span-1">
            <img aria-label="imagen empresa" src={Logo8} className="h-12 w-auto mx-auto" loading="lazy" alt={`cliente ${Logo8}`} width="" height="" />
          </div>

          <div className="p-4 grayscale transition duration-200 hover:grayscale-0 bg-gray-100 rounded-xl col-span-1">
            <img aria-label="imagen empresa" src={Logo9} className="h-12 w-auto mx-auto" loading="lazy" alt={`cliente ${Logo9}`} width="" height="" />
          </div>

          <div className="p-4 grayscale transition duration-200 hover:grayscale-0 bg-gray-100 rounded-xl col-span-1">
            <img aria-label="imagen empresa" src={Logo10} className="h-12 w-auto mx-auto" loading="lazy" alt={`cliente ${Logo10}`} width="" height="" />
          </div>

          <div className="p-4 grayscale transition duration-200 hover:grayscale-0 bg-gray-100 rounded-xl col-span-1">
            <img aria-label="imagen empresa" src={Logo11} className="h-12 w-auto mx-auto" loading="lazy" alt={`cliente ${Logo11}`} width="" height="" />
          </div>

          <div className="p-4 grayscale transition duration-200 hover:grayscale-0 bg-gray-100 rounded-xl col-span-1">
            <img aria-label="imagen empresa" src={Logo12} className="h-12 w-auto mx-auto" loading="lazy" alt={`cliente ${Logo12}`} width="" height="" />
          </div>

          <div className="p-4 grayscale transition duration-200 hover:grayscale-0 bg-gray-100 rounded-xl col-span-1">
            <img aria-label="imagen empresa" src={Logo13} className="h-12 w-auto mx-auto" loading="lazy" alt={`cliente ${Logo13}`} width="" height="" />
          </div>
        </div>

        {/* Testimonials */}
        <div className="max-w-3xl mx-auto my-20">
          <div className="relative flex items-start border-gray-200 rounded bg-white">
            <div className="text-center px-4 py-8 pt-20 mx-4 md:mx-0 bg-primaryColor bg-opacity-90 rounded-xl">

              <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
                <svg className="absolute top-0 right-0 -mt-3 -mr-8 w-16 h-16 fill-current text-primaryColor" viewBox="0 0 64 64" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                  <path d="M37.89 58.338c-2.648-5.63-3.572-10.045-2.774-13.249.8-3.203 8.711-13.383 23.737-30.538l2.135.532c-6.552 10.033-10.532 17.87-11.939 23.515-.583 2.34.22 6.158 2.41 11.457l-13.57 8.283zm-26.963-6.56c-2.648-5.63-3.572-10.046-2.773-13.25.799-3.203 8.71-13.382 23.736-30.538l2.136.533c-6.552 10.032-10.532 17.87-11.94 23.515-.583 2.339.22 6.158 2.41 11.456l-13.57 8.283z" />
                </svg>
                <Image aria-label="imagen testimonio" className="relative rounded-full" src={TestimonialImage} width={96} height={96} alt="imagen testimonial" />
              </div>

              <blockquote className="text-lg mb-4 text-white">
                “ Me encanta este producto y lo recomendaría a cualquiera. No podría ser más fácil de usar, y nuestros múltiples sitios web son maravillosos. Recibimos comentarios positivos todo el tiempo. “
              </blockquote>

              <cite className="block font-bold text-lg not-italic mb-1 text-primaryColor">Brigitte Baptiste</cite>

              <div className="text-white">
                <span>CEO & Co-Founder</span> <a className="text-primaryColor font-semibold" href="#0">@Dropbox</a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section >
  )
}