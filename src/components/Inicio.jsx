import Image1 from "../assets/images/imagen-1.svg";
import Image2 from "../assets/images/imagen-2.svg";
import Background from "../assets/images/background.jpg";
import { Button } from "@nextui-org/react";

export const Inicio = () => {

  return (

    <section id="inicio-section" className="bg-primaryColor">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
          
          <div className="lg:col-span-3">
            <h2 className="mb-6 text-primaryColor text-5xl font-bold">Somos la mejor opción para <span className="font-normal text-white">el desarrollo de tus ideas.</span></h2>

            <div className="my-4">
              <Button size="lg" className="bg-thirdColor text-secondaryColor font-semibold">Contáctanos</Button>
            </div>
          </div>

          <div className="lg:col-span-4 mt-10 lg:mt-0">
            <img data-aos="flip-up" data-aos-duration="2000" className="w-full rounded-xl" src={Image1} alt="Image Description" />
          </div>
        </div>
      </div>

      <div className="relative">
        <img aria-label="imagen nexus" src={Background} className="absolute inset-0 object-cover w-full h-full" alt="imagen nexus" />
        <div className="relative bg-gray-900 bg-opacity-75">
          <div className="container mx-auto px-4 py-16">
            <div className="flex justify-center items-center xl:flex-row">
              <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                <h2 className="mb-6 text-primaryColor text-4xl font-bold text-start md:text-center">
                  ¿Qué es Nexus It?
                </h2>
                <p className="mb-4 text-white text-justify text-lg">
                  Un equipo que se dedica a desarrollar, diseñar, mantener y distribuir productos digitales. Nuestro principal objetivo es crear soluciones informáticas que satisfagan las necesidades de nuestros clientes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
          <div className="lg:col-span-3">
            <h2 className="mb-6 text-primaryColor text-4xl font-bold">¿Qué hacemos?</h2>
            <p className="mt-3 text-lg text-white text-justify">Creamos y ejecutamos soluciones tecnológicas para mejorar la gestión y eficiencia de las empresas. A través de nuestros programas ayudamos a hacer realidad aplicaciones web y móviles que facilitan y optimizan los procesos.</p>
          </div>

          <div className="lg:col-span-4 mt-10 lg:mt-0">
            <img data-aos="flip-up" data-aos-duration="2000" className="w-full rounded-xl" src={Image2} alt="Image Description" />
          </div>
        </div>
      </div>
    </section>
  )
}