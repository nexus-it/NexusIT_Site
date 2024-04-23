import Image3 from "../assets/images/imagen-3.svg";

import Icono1 from "../assets/iconos/icono-1.svg";
import Icono2 from "../assets/iconos/icono-2.svg";
import Icono3 from "../assets/iconos/icono-3.svg";
import Icono4 from "../assets/iconos/icono-4.svg";
import Icono5 from "../assets/iconos/icono-5.svg";
import Icono6 from "../assets/iconos/icono-6.svg";
import Icono7 from "../assets/iconos/icono-7.svg";

export const Servicios = () => {

  return (
    <section id="servicios-section">

      <div className="relative flex">
        <div className="container mx-auto px-4 py-12 flex flex-col justify-center items-center w-full">
          <div className="lg:flex lg:items-center">

            <div data-aos="fade-right" data-aos-duration="2000" className="overflow-hidden">
              <img aria-label="imagen equipo" className="object-cover object-center w-full lg:w-[32rem] rounded-2xl h-96" src={Image3} alt="imagen equipo" />
            </div>

            <div className="mt-8 lg:px-10 lg:mt-0">
              <div>
                <h2 className="text-4xl font-bold text-gray-800 mb-4">
                  Tu sueño es nuestra  <br />principal <span className="text-green-500">misión</span>.
                </h2>
                <h3 className="text-2xl font-semibold text-gray-800 ">Creemos en el excelente trabajo y la dedicación</h3>
              </div>

              <p className="text-mg max-w-lg mt-6 text-black">
                Abordamos minuciosamente todos los aspectos necesarios para desarrollar productos digitales innovadores y de primera categoría, desde la formulación de estrategias hasta el diseño de productos. Aplicamos estándares de codificación excepcionales y llevamos a cabo pruebas continuas, lo que da como resultado productos de alta calidad que son fáciles de mantener.
              </p>

              <div >
                <h3 className="inline-block mt-6 text-lg font-semibold text-secondaryColor bg-thirdColor rounded-xl p-2  text-center">
                  ¡Tú administras, nosotros manejamos la solicitud!
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="absolute inset-0s md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none" aria-hidden="true"></div>

        <div className="relative container mx-auto px-4 py-12">



          <div className="mx-auto text-center">
            <h2 className="text-4xl pb-8 font-bold">
              <span className="text-green-500">Beneficios</span> de trabajar con nosotros
            </h2>
          </div>

          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">

            {/* 1nd item */}
            <div data-aos="zoom-in" data-aos-duration="1500" className="relative flex flex-col items-center p-6 bg-white rounded-2xl border border-secondaryColor shadow-xl">
              <img data-aos="zoom-in" data-aos-delay="500" src={Icono1} className="w-16 h-16 p-1 -mt-1 mb-2" width={'64'} alt="icono" />
              <h3 className="text-xl font-bold leading-snug tracking-tight mb-1">Experiencia Especializada</h3>
              <p className="text-gray-600 text-center text-lg">Tenemos un equipo de profesionales altamente capacitados y especializados en diversas áreas de desarrollo.</p>
              <br></br><br></br>
            </div>

            {/* 2nd item */}
            <div data-aos="zoom-in" data-aos-duration="1500" className="relative flex flex-col items-center p-6 bg-white rounded-2xl border border-secondaryColor shadow-xl h-full">
              <img data-aos="zoom-in" data-aos-delay="500" src={Icono2} className="w-16 h-16 p-1 -mt-1 mb-2" width={'64'} alt="icono" />
              <h3 className="text-xl font-bold leading-snug tracking-tight mb-1">Eficiencia y Cumplimiento</h3>
              <p className="text-gray-600 text-center text-lg">Trabajamos con procesos establecidos para planificar, ejecutar y controlar proyectos de manera eficiente, cumpliendo con los plazos establecidos.</p>
            </div>

            {/* 3rd item */}
            <div data-aos="zoom-in" data-aos-duration="1500" className="relative flex flex-col items-center p-6 bg-white rounded-2xl border border-secondaryColor shadow-xl h-full">
              <img data-aos="zoom-in" data-aos-delay="500" src={Icono3} className="w-16 h-16 p-1 -mt-1 mb-2" width={'64'} alt="icono" />
              <h3 className="text-xl font-bold leading-snug tracking-tight mb-1">Soporte a Clientes</h3>
              <p className="text-gray-600 text-center text-lg">Garantizamos una atención de calidad y satisfacción de las necesidades de nuestros clientes, construyendo relaciones sólidas y fomentando el éxito empresarial.</p>

            </div>
          </div>
        </div>
      </div>
      <section id="servicioss-section">
        <div className="container mx-auto px-4 py-12">

          <div className="w-full">
            <div className="my-8 md:my-12">
              <div className="w-full">
                <div className="my-8 md:my-12">
                  <h2 className="pb-8 text-center text-4xl font-bold text-gray-800">Conoce nuestros{' '}
                    <span className="text-green-500 mr-2">servicios</span>
                  </h2>
                </div>
              </div>

            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {/* 1th item */}
            <div data-aos="zoom-in" data-aos-duration="1500" aria-label="card servicio" className="border-2 border-secondaryColor border-opacity-50  rounded-2xl p-4 shadow-lg">
              <div className="flex justify-center">
                <div className=" w-[70px] h-[70px] flex items-center justify-center bg-primaryColor rounded-2xl mb-8 relative z-10">
                  <span className=" w-[70px] h-[70px] flex items-center justify-center bg-primaryColor bg-opacity-40 rounded-2xl mb-8 absolute z-[-1] top-0 left-0 rotate-[25deg] group-hover:rotate-45 duration-300"></span>
                  <img data-aos="zoom-in" data-aos-delay="500" src={Icono4} width={'35'} alt="icono" />
                </div>
              </div>
              <h4 className="font-bold text-lg text-dark mb-3 text-center">
                Desarrollo de Software
              </h4>
              <p className="text-lg lg:text-medium text-center">
                Ofrecemos soluciones de desarrollo de software personalizadas para adaptarse a las necesidades de su organización, creando productos digitales que van desde aplicaciones hasta programas.
              </p>
            </div>

            {/* 2th item */}
            <div data-aos="zoom-in" data-aos-duration="1500" aria-label="card servicio" className="border-2 border-secondaryColor border-opacity-50  rounded-2xl p-4 shadow-lg">
              <div className="flex justify-center">
                <div
                  className=" w-[70px] h-[70px] flex items-center justify-center bg-primaryColor rounded-2xl mb-8 relative z-10">
                  <span
                    className=" w-[70px] h-[70px] flex items-center justify-center bg-primaryColor bg-opacity-30 rounded-2xl mb-8 absolute z-[-1] top-0 left-0 rotate-[25deg] group-hover:rotate-45 duration-300"></span>
                  <img data-aos="zoom-in" data-aos-delay="500" src={Icono5} width={'35'} alt="icono" />
                </div>
              </div>
              <h4 className="font-bold text-lg text-dark mb-3 text-center">
                Consultoría Informática
              </h4>
              <p className="text-lg text-center">
                Proporcionamos orientación clave para tu empresa, centrándonos en áreas principales como Tecnologías de la Información (TI), Computación en la Nube, etc.
              </p>
            </div>

            {/* 3th item */}
            <div data-aos="zoom-in" data-aos-duration="1500" aria-label="card servicio" className="border-2 border-secondaryColor border-opacity-50  rounded-2xl p-4 shadow-lg">
              <div className="flex justify-center">
                <div
                  className=" w-[70px] h-[70px] flex items-center justify-center bg-primaryColor rounded-2xl mb-8 relative z-10">
                  <span
                    className=" w-[70px] h-[70px] flex items-center justify-center bg-primaryColor bg-opacity-30 rounded-2xl mb-8 absolute z-[-1] top-0 left-0 rotate-[25deg] group-hover:rotate-45 duration-300"></span>
                  <img data-aos="zoom-in" data-aos-delay="500" src={Icono6} width={'35'} alt="icono" />
                </div>
              </div>
              <h4 className="font-bold text-lg text-dark mb-3 text-center">
                Alta Tecnología
              </h4>
              <p className="text-lg text-center">
                Trabajamos para mantenernos a la vanguardia de la revolución tecnológica y estamos listos para compartir nuestro conocimiento con su empresa.
              </p>
            </div>

            {/* 4th item */}
            <div data-aos="zoom-in" data-aos-duration="1500" aria-label="card servicio" className="border-2 border-secondaryColor border-opacity-50 rounded-3xl p-4 shadow-lg">
              <div className="flex justify-center">
                <div className="w-[70px] h-[70px] flex items-center justify-center bg-primaryColor rounded-2xl mb-8 relative z-10">
                  <span className=" w-[70px] h-[70px] flex items-center justify-center bg-primaryColor bg-opacity-30 rounded-2xl mb-8 absolute z-[-1] top-0 left-0 rotate-[25deg] group-hover:rotate-45 duration-300"></span>
                  <img data-aos="zoom-in" data-aos-delay="500" src={Icono7} width={'35'} alt="icono" />
                </div>

              </div>
              <h4 className="font-bold text-lg text-dark mb-3 text-center">
                Servicios Relacionados
              </h4>
              <p className="text-lg text-center">
                Nuestro equipo brinda diversos servicios de desarrollo, como pruebas de control de calidad, gestión de proyectos y más.
              </p>
            </div>
          </div>

          <div className="my-8">
            <h3 className='text-center text-2xl font-semibold'>¡Si tienes una necesidad digital, Nexus está aquí para ayudarte a resolver el problema!</h3>
          </div>

        </div>
      </section>

    </section>
  )
}