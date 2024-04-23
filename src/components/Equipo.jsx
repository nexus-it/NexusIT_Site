import React, { useState, useEffect } from 'react';


import juan from "../assets/images/fotos_web/juan/juan.jpg";
import juan2 from "../assets/images/fotos_web/juan/juan2.jpg";
import juan3 from "../assets/images/fotos_web/juan/juan3.jpg";


import keren from "../assets/images/fotos_web/keren/keren.jpg";
import keren2 from "../assets/images/fotos_web/keren/keren2.jpg";
import keren3 from "../assets/images/fotos_web/keren/keren3.jpg";

import browin from "../assets/images/fotos_web/browin/BROWIN-LOPEZ.jpg";
import browin2 from "../assets/images/fotos_web/browin/BROWIN-LOPEZ2.jpg";
import browin3 from "../assets/images/fotos_web/browin/BROWIN-LOPEZ3.jpg";


import melany from "../assets/images/fotos_web/melany/melany.jpg";
import melany2 from "../assets/images/fotos_web/melany/melany2.jpg";
import melany3 from "../assets/images/fotos_web/melany/melany3.jpg";

import nicolle from "../assets/images/fotos_web/gafas/gafas.jpg";
import nicolle2 from "../assets/images/fotos_web/gafas/gafas2.jpg";
import nicolle3 from "../assets/images/fotos_web/gafas/gafas3.jpg";

import eduardo2 from "../assets/images/fotos_web/pelao/pelao2.jpg";
import eduardo3 from "../assets/images/fotos_web/pelao/pelao3.jpg";
import eduardo from "../assets/images/fotos_web/pelao/pelao.jpg";

import jean from "../assets/images/fotos_web/jean/jean.jpg";
import jean2 from "../assets/images/fotos_web/jean/jean2.jpg";
import jean3 from "../assets/images/fotos_web/jean/jean3.jpg";

import andres from "../assets/images/fotos_web/andres/andres.jpg";
import andres2 from "../assets/images/fotos_web/andres/andres2.jpg";
import andres3 from "../assets/images/fotos_web/andres/andres3.jpg";

import angelica from "../assets/images/fotos_web/angelica/1.jpg";
import angelica2 from "../assets/images/fotos_web/angelica/2.jpg";
import angelica3 from "../assets/images/fotos_web/angelica/3.jpg";





export const Equipo = () => {


  const imagenes1 = [keren2, keren3, keren];
  const [imagenIndex1, setImagenIndex1] = useState(0);

  const imagenes2 = [juan2, juan3, juan];
  const [imagenIndex2, setImagenIndex2] = useState(0);

  const imagenes3 = [melany2, melany3, melany];
  const [imagenIndex3, setImagenIndex3] = useState(0);

  const imagenes4 = [nicolle2, nicolle3, nicolle];
  const [imagenIndex4, setImagenIndex4] = useState(0);

  const imagenes5 = [browin2, browin3, browin];
  const [imagenIndex5, setImagenIndex5] = useState(0);

  const imagenes6 = [eduardo2, eduardo3, eduardo];
  const [imagenIndex6, setImagenIndex6] = useState(0);

  const imagenes7 = [jean2, jean3, jean];
  const [imagenIndex7, setImagenIndex7] = useState(0);

  const imagenes8 = [andres2, andres3, andres];
  const [imagenIndex8, setImagenIndex8] = useState(0);

  const imagenes9 = [angelica2, angelica3, angelica];
  const [imagenIndex9, setImagenIndex9] = useState(0);

  useEffect(() => {
    const interval1 = setInterval(() => {
      setImagenIndex1(prevIndex => (prevIndex + 1) % imagenes1.length);
    }, 1000); // Cambia la imagen cada 2 segundos (1000 milisegundos)

    const interval2 = setInterval(() => {
      setImagenIndex2(prevIndex => (prevIndex + 1) % imagenes2.length);
    }, 1000);

    const interval3 = setInterval(() => {
      setImagenIndex3(prevIndex => (prevIndex + 1) % imagenes3.length);
    }, 1000);

    const interval4 = setInterval(() => {
      setImagenIndex4(prevIndex => (prevIndex + 1) % imagenes4.length);
    }, 1000);

    const interval5 = setInterval(() => {
      setImagenIndex5(prevIndex => (prevIndex + 1) % imagenes5.length);
    }, 1000);


    const interval6 = setInterval(() => {
      setImagenIndex6(prevIndex => (prevIndex + 1) % imagenes6.length);
    }, 1000);

    const interval7 = setInterval(() => {
      setImagenIndex7(prevIndex => (prevIndex + 1) % imagenes7.length);
    }, 1000);

    const interval8 = setInterval(() => {
      setImagenIndex8(prevIndex => (prevIndex + 1) % imagenes8.length);
    }, 1000);

    const interval9 = setInterval(() => {
      setImagenIndex9(prevIndex => (prevIndex + 1) % imagenes9.length);
    }, 1000);

    // Limpia los intervalos al desmontar el componente
    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
      clearInterval(interval4);
      clearInterval(interval5);

      clearInterval(interval6);
      clearInterval(interval7);
      clearInterval(interval8);
      clearInterval(interval9);

    };
  }, []);

  return (

    <section id="equipo-section" className="bg-secondaryColor">



      <div className="container mx-auto px-12 py-12">

        <div className="mx-auto text-center mb-10 lg:mb-14">

          <h2 className="text-2xl font-bold text-gray-800">Este es nuestro increíble {' '}
            <span className="text-green-500 mr-2">equipo</span>
            <span className="text-gray-800 mr-2">de trabajo</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* 1 Item */}
          <div className="text-center">
            <div className="relative group">
              <img aria-label="imagen perfil" className="rounded-2xl" src={juan} alt="imagen perfil" />
              <div className="hidden absolute inset-0 transition-opacity items-center justify-center group-hover:flex">
                <img
                  className="w-full h-full object-cover additional-image rounded-2xl scale-110" // Agrega la clase rounded-2xl y scale-110
                  src={imagenes2[imagenIndex2]}
                  alt={`imagen adicional ${imagenIndex2 + 1}`}
                />
              </div>
            </div>
            <div className="mt-4 sm:mt-4">
              <h3 className="mt-6 font-semibold text-gray-800">
                Juan Palacio
              </h3>
              <p className="text-sm text-gray-600">
                CEO
              </p>
            </div>
          </div>


          <div className="text-center">
            <div className="relative group">

              <img aria-label="imagen perfil" className="rounded-2xl" src={angelica} alt="imagen perfil" />
              <div className="hidden absolute inset-0 transition-opacity items-center justify-center group-hover:flex">
                <img
                  className="w-full h-full object-cover additional-image rounded-2xl scale-110" // Agrega la clase rounded-2xl y scale-110
                  src={imagenes9[imagenIndex9]}
                  alt={`imagen adicional ${imagenIndex9 + 1}`}
                />
              </div>
            </div>

            <div className="mt-4 sm:mt-4">
              <h3 className="mt-6 font-semibold text-gray-800">
                Angelica Márquez
              </h3>
              <p className="text-sm text-gray-600">
                Directora administrativa
              </p>
            </div>
          </div>

          {/* 2 Item */}



          {/* 3 Item */}
          <div className="text-center">
            <div className="relative group">

              <img aria-label="imagen perfil" className="rounded-2xl" src={melany} alt="imagen perfil" />
              <div className="hidden absolute inset-0 transition-opacity items-center justify-center group-hover:flex">
                <img
                  className="w-full h-full object-cover additional-image rounded-2xl scale-110" // Agrega la clase rounded-2xl y scale-110
                  src={imagenes3[imagenIndex3]}
                  alt={`imagen adicional ${imagenIndex3 + 1}`}
                />
              </div>
            </div>
            <div className="mt-4 sm:mt-4">
              <h3 className="mt-6 font-semibold text-gray-800">
                Melany Aguilar
              </h3>
              <p className="text-sm text-gray-600">
                Asistente Administrativa
              </p>
            </div>
          </div>

          {/* 4 Item */}
          <div className="text-center">
            <div className="relative group">

              <img aria-label="imagen perfil" className="rounded-2xl" src={keren} alt="imagen perfil" />
              <div className="hidden absolute inset-0 transition-opacity items-center justify-center group-hover:flex">
                <img
                  className="w-full h-full object-cover additional-image rounded-2xl scale-110" // Agrega la clase rounded-2xl y scale-110
                  src={[imagenes1[imagenIndex1]]}
                  alt={`imagen adicional ${imagenIndex1 + 1}`}
                />
              </div>
            </div>
            <div className="mt-4 sm:mt-4">
              <h3 className="mt-6 font-semibold text-gray-800">
                Keren Pérez
              </h3>
              <p className="text-sm text-gray-600">
                Directora de Comunicaciones y Marketing
              </p>
            </div>
          </div>

          {/* 3 Item */}
          <div className="text-center">
            <div className="relative group">

              <img aria-label="imagen perfil" className="rounded-2xl" src={jean} alt="imagen perfil" />
              <div className="hidden absolute inset-0 transition-opacity items-center justify-center group-hover:flex">
                <img
                  className="w-full h-full object-cover additional-image rounded-2xl scale-110" // Agrega la clase rounded-2xl y scale-110
                  src={imagenes7[imagenIndex7]}
                  alt={`imagen adicional ${imagenIndex7 + 1}`}
                />
              </div>
            </div>


            <div className="mt-4 sm:mt-4">

              <h3 className="mt-6 font-semibold text-gray-800">
                Jean Correa
              </h3>
              <p className="text-sm text-gray-600">
                FrontEnd Leader
              </p>
            </div>
          </div>

          {/* 4 Item */}
          <div className="text-center">
            <div className="relative group">

              <img aria-label="imagen perfil" className="rounded-2xl" src={andres} alt="imagen perfil" />
              <div className="hidden absolute inset-0 transition-opacity items-center justify-center group-hover:flex">
                <img
                  className="w-full h-full object-cover additional-image rounded-2xl scale-110" // Agrega la clase rounded-2xl y scale-110
                  src={imagenes8[imagenIndex8]}
                  alt={`imagen adicional ${imagenIndex8 + 1}`}
                />
              </div>
            </div>

            <div className="mt-4 sm:mt-4">
              <h3 className="mt-6 font-semibold text-gray-800">
                Andres Leones
              </h3>
              <p className="text-sm text-gray-600">
                BackEnd Developer
              </p>
            </div>
          </div>

          {/* 5 Item */}
          <div className="text-center">
            <div className="relative group">

              <img aria-label="imagen perfil" className="rounded-2xl" src={eduardo} alt="imagen perfil" />
              <div className="hidden absolute inset-0 transition-opacity items-center justify-center group-hover:flex">
                <img
                  className="w-full h-full object-cover additional-image rounded-2xl scale-110" // Agrega la clase rounded-2xl y scale-110
                  src={imagenes6[imagenIndex6]}
                  alt={`imagen adicional ${imagenIndex6 + 1}`}
                />
              </div>
            </div>
            <div className="mt-4 sm:mt-4">
              <h3 className="mt-6 font-semibold text-gray-800">
                Eduardo Márquez
              </h3>
              <p className=" text-sm text-gray-600">
                FrontEnd Developer
              </p>
            </div>
          </div>

          {/* 6 Item */}
          <div className="text-center">
            <div className="relative group">

              <img aria-label="imagen perfil" className="rounded-2xl" src={browin} alt="imagen perfil" />
              <div className="hidden absolute inset-0 transition-opacity items-center justify-center group-hover:flex">
                <img
                  className="w-full h-full object-cover additional-image rounded-2xl scale-110" // Agrega la clase rounded-2xl y scale-110
                  src={imagenes5[imagenIndex5]}
                  alt={`imagen adicional ${imagenIndex5 + 1}`}
                />
              </div>
            </div>
            <div className="mt-4 sm:mt-4">
              <h3 className="mt-6 font-semibold text-gray-800">
                Browin Lopéz
              </h3>
              <p className="text-sm text-gray-600">
                Fullstack Developer
              </p>
            </div>
          </div>


          {/* 7 Item */}


          {/* 8 Item */}
          <div className="text-center">
            <div className="relative group">

              <img aria-label="imagen perfil" className="rounded-2xl" src={nicolle} alt="imagen perfil" />
              <div className="hidden absolute inset-0 transition-opacity items-center justify-center group-hover:flex">
                <img
                  className="w-full h-full object-cover additional-image rounded-2xl scale-110" // Agrega la clase rounded-2xl y scale-110
                  src={imagenes4[imagenIndex4]}
                  alt={`imagen adicional ${imagenIndex4 + 1}`}
                />
              </div>
            </div>

            <div className="mt-4 sm:mt-4">
              <h3 className="mt-6 font-semibold text-gray-800">
                Nicoll Zambrano
              </h3>
              <p className="text-sm text-gray-600">
                Soporte
              </p>
            </div>
          </div>


      
        </div>
      </div>
    </section>
  )
}