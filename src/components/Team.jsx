import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const imagePaths = {
  juan: "https://cdn.genomax.app/images/fotos_web/juan/juan.jpg",
  juan2: "https://cdn.genomax.app/images/fotos_web/juan/juan2.jpg",
  juan3: "https://cdn.genomax.app/images/fotos_web/juan/juan3.jpg",
  // 
  angelica: "https://cdn.genomax.app/images/fotos_web/angelica/1.jpg",
  angelica2: "https://cdn.genomax.app/images/fotos_web/angelica/2.jpg",
  angelica3: "https://cdn.genomax.app/images/fotos_web/angelica/3.jpg",
  //
  melany: "https://cdn.genomax.app/images/fotos_web/melany/melany.jpg",
  melany2:  "https://cdn.genomax.app/images/fotos_web/melany/melany2.jpg",
  melany3:  "https://cdn.genomax.app/images/fotos_web/melany/melany3.jpg",
  //
  keren:  "https://cdn.genomax.app/images/fotos_web/keren/keren.jpg",
  keren2:  "https://cdn.genomax.app/images/fotos_web/keren/keren2.jpg",
  keren3:  "https://cdn.genomax.app/images/fotos_web/keren/keren3.jpg",
  //
  jean: "https://cdn.genomax.app/images/fotos_web/jean/jean.jpg",
  jean2: "https://cdn.genomax.app/images/fotos_web/jean/jean2.jpg",
  jean3: "https://cdn.genomax.app/images/fotos_web/jean/jean3.jpg",
  //
  andres: "https://cdn.genomax.app/images/fotos_web/andres/andres.jpg",
  andres2: "https://cdn.genomax.app/images/fotos_web/andres/andres2.jpg",
  andres3: "https://cdn.genomax.app/images/fotos_web/andres/andres3.jpg",
  //
  eduardo: "https://cdn.genomax.app/images/fotos_web/pelao/pelao.jpg",
  eduardo2:  "https://cdn.genomax.app/images/fotos_web/pelao/pelao2.jpg",
  eduardo3: "https://cdn.genomax.app/images/fotos_web/pelao/pelao3.jpg",
  //
  browin: "https://cdn.genomax.app/images/fotos_web/browin/BROWIN-LOPEZ.jpg",
  browin2: "https://cdn.genomax.app/images/fotos_web/browin/BROWIN-LOPEZ2.jpg",
  browin3: "https://cdn.genomax.app/images/fotos_web/browin/BROWIN-LOPEZ3.jpg",
  // 
  nicolle: "https://cdn.genomax.app/images/fotos_web/gafas/gafas.jpg",
  nicolle2: "https://cdn.genomax.app/images/fotos_web/gafas/gafas2.jpg",
  nicolle3: "https://cdn.genomax.app/images/fotos_web/gafas/gafas3.jpg",
  //
  david: "https://cdn.genomax.app/images/fotos_web/david/davidM.jpg",
  david2: "https://cdn.genomax.app/images/fotos_web/david/davidM2.jpg", 
  david3: "https://cdn.genomax.app/images/fotos_web/david/davidM3.jpg", 

};

export const Team = () => {
  const [text, i18n] = useTranslation("global");

  const [loadedImages, setLoadedImages] = useState({
    juan: false,
    juan2: false,
    juan3: false,
    // 
    angelica: false,
    angelica2: false,
    angelica3: false,
    //
    melany: false,
    melany2: false,
    melany3: false,
    //
    keren: false,
    keren2: false,
    keren3: false,
    //
    jean: false,
    jean2: false,
    jean3: false,
    //
    andres: false,
    andres2: false,
    andres3: false,
    //
    eduardo: false,
    eduardo2: false,
    eduardo3: false,
    //
    browin: false,
    browin2: false,
    browin3:false,
    //
    nicolle: false,
    nicolle2: false,
    nicolle3: false,
    //
    david: false,
    david2: false,
    david3: false,
  });

  const teamMembers = [
    {
      name: "Juan Palacio",
      title: "CEO",
      image: "juan",
      additionalImages: ["juan2", "juan3"],
    },
    {
      name: "Angelica Márquez",
      title: text("team.administrative-director"),
      image: "angelica",
      additionalImages: ["angelica2", "angelica3"],
    },
    {
      name: "Melany Aguilar",
      title: text("team.administrative-assistant"),
      image: "melany",
      additionalImages: ["melany2", "melany3"],
    },
    {
      name: "Keren Pérez",
      title: text("team.director-of-communications-and-marketing"),
      image: "keren",
      additionalImages: ["keren2", "keren3"],
    },
    {
      name: "Jean Correa",
      title: "Lead Developer",
      image: "jean",
      additionalImages: ["jean2", "jean3"],
    },
    {
      name: "Andres Leones",
      title: "BackEnd Leader",
      image: "andres",
      additionalImages: ["andres2", "andres3"],
    },
    {
      name: "Eduardo Márquez",
      title: "FrontEnd Developer",
      image: "eduardo",
      additionalImages: ["eduardo2", "eduardo3"],
    },
    {
      name: "Browin Lopéz",
      title: "BackEnd Junior",
      image: "browin",
      additionalImages: ["browin2", "browin3"],
    },
    {
      name: "Nicoll Zambrano",
      title: text("team.support"),
      image: "nicolle",
      additionalImages: ["nicolle2", "nicolle3"],
    },
    {
      name: "David Márquez",
      title: text("team.commercial-manager"),
      image: "david",
      additionalImages: ["david2", "david3"],
    },
  ];

  const [currentImage, setCurrentImage] = useState({});
  const [currentAdditionalImageIndex, setCurrentAdditionalImageIndex] = useState(0);

  useEffect(() => {
    const preloadImages = async () => {
      const promises = Object.entries(imagePaths).map(async ([key, path]) => {
        const image = new Image();
        image.src = path;
        image.onload = () => setLoadedImages((prevLoadedImages) => ({ ...prevLoadedImages, [key]: true }));
        image.onerror = () => {
          console.error(`Error loading image: ${path}`);
        };
      });
      await Promise.all(promises);
    };

    preloadImages();
  }, []);

  const handleMouseLeave = () => {
    setCurrentImage({});
  };


  const handleMouseEnter = (member) => {
    setCurrentImage(member);
  
    let intervalId = setInterval(() => {
      setCurrentAdditionalImageIndex((prevIndex) => (prevIndex + 1) % member.additionalImages.length);
    }, 2000);
  
    setTimeout(() => {
      clearInterval(intervalId);
    }, 2000);
  
    return () => clearInterval(intervalId);
  };


  return (
    <section id="equipo-section" className="bg-secondaryColor">
      <div className='container mx-auto px-12 py-12'>
        <div className='mx-auto text-center mb-10 lg:mb-14'> 
          <h2 className="text-2xl font-bold text-gray-800">
            {text("team.this-is-our-amazing")}{' '}
            <span className="text-green-500 mr-2">{text("team.team")}</span>
            <span className="text-gray-800 mr-2">{text("team.work")}</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div className="relative group">
                <img
                  className="rounded-2xl transition duration-300 ease-in-out hover:opacity-75"
                  src={loadedImages[member.image] ? imagePaths[member.image] : ''}
                  alt="imagen perfil"
                  onMouseEnter={() => handleMouseEnter(member)}
                  onMouseLeave={handleMouseLeave}
                />
                <div className="hidden absolute inset-0 transition-opacity duration-300 ease-in-out items-center justify-center group-hover:flex">
                  {member.additionalImages.map((additionalImage, idx) => (
                    <img
                      key={idx}
                      id={`additional-image-${idx}`}
                      className={
                        currentAdditionalImageIndex === idx
                          ? "w-full h-full object-cover additional-image rounded-2xl scale-110"
                          : "hidden"
                      }
                      src={loadedImages[additionalImage] ? imagePaths[additionalImage] : ''}
                      alt={`imagen adicional ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
              <div className="mt-4 sm:mt-4">
                    <h3 className="mt-6 font-semibold text-gray-800">{member.name}</h3>
                    <p className="text-sm text-gray-600">{member.title}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Team;


