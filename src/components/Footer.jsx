import { Image } from "@nextui-org/react";
import { Link as LinkScroll } from "react-scroll";
import LogoNexus from "../assets/images/logo-footer.png";

import Instagram from "../assets/iconos/instagram.svg";
import Whatsapp from "../assets/iconos/whatsapp.svg";
import Linkedin from "../assets/iconos/linkedin.svg";
import { useTranslation } from "react-i18next";


// Obtén la fecha actual
const currentDate = new Date();

// Obtiene el año de la fecha actual
const currentYear = currentDate.getFullYear();

export const Footer = () => {
  
  const [text, i18n] = useTranslation("global")

  return (

    <footer className="bg-primaryColor">
      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-5">
          
          {/* Column Start */}
          <div className="sm:col-span-2">
            <LinkScroll
              activeClass="active"
              aria-label="Go home"
              title="Nexus it"
              to="inicio-section"
              spy={true}
              smooth={true}
              duration={1000}
              className="inline-flex items-center hover:cursor-pointer" >
              <Image src={LogoNexus} alt='logo nexus' className="rounded-none" />
            </LinkScroll>

            <div className="mt-6 lg:max-w-sm">
              <p className="text-sm text-white">
                {text("footer.description-nexus")}
                
                {text("footer.description-nexus-contact-us")}
              </p>
            </div>
          </div>
          {/* Column End */}

          {/* Column Start */}
          <div className="space-y-2 text-sm">
            <p className="text-base font-bold tracking-wide text-white pb-2">
              {text("footer.quick-links")}
            </p>

            <div className="flex">
              <LinkScroll
                activeClass="active"
                to="inicio-section"
                spy={true}
                smooth={true}
                duration={1000}
                className={"hover:text-green-500 text-white cursor-pointer font-semibold"} >
                {text("footer.who-are-we")}
              </LinkScroll>
            </div>

            <div className="flex">
              <LinkScroll
                activeClass="active"
                to="servicios-section"
                spy={true}
                smooth={true}
                duration={1000}
                className={"hover:text-green-500 text-white cursor-pointer font-semibold"} >
                  {text("footer.services")}
              </LinkScroll>
            </div>

            <div className="flex">
              <LinkScroll
                activeClass="active"
                to="equipo-section"
                spy={true}
                smooth={true}
                duration={1000}
                className={"hover:text-green-500 text-white cursor-pointer font-semibold"} >
                  {text("footer.team")}
              </LinkScroll>
            </div>

            <div className="flex">
              <LinkScroll
                activeClass="active"
                to="clientes-section"
                spy={true}
                smooth={true}
                duration={1000}
                className={"hover:text-green-500 text-white cursor-pointer font-semibold"} >
                  {text("footer.success-stories")}
              </LinkScroll>
            </div>

            <div className="flex">
              <LinkScroll
                activeClass="active"
                to="contactanos-section"
                spy={true}
                smooth={true}
                duration={1000}
                className={"hover:text-green-500 text-white cursor-pointer font-semibold"} >
                Blog
              </LinkScroll>
            </div>
          </div>
          {/* Container End */}

          {/* Column Start */}
          <div className="space-y-2 text-sm">
            <p className="text-base font-bold tracking-wide text-white pb-2">
              {text("footer.contacts")}
            </p>

            <div className="flex">
              <p className="mr-1 text-white">{text("footer.phone")}:</p>
              <a
                href="tel:+57 3017522772"
                aria-label="Our phone"
                title="Our phone"
                className="text-white hover:text-primaryColor" >
                +57 3017522772
              </a>
            </div>

            <div className="flex">
              <p className="mr-1 text-white">Email:</p>
              <a
                href="mailto:correo@correo.com"
                aria-label="Our email"
                title="Our email"
                className="text-white hover:text-primaryColor" >
                info@nexus-it.co
              </a>
            </div>

            <div className="">
              <p className="mr-1 text-white">{text("footer.address")}:</p>
              <a
                href="https://maps.app.goo.gl/ooyV38N2pCDdre8a9"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Our address"
                title="Our address"
                className="text-white hover:text-primaryColor" >
                LYD House, Cra. 49c #75 - 74, Nte. Centro Historico, Barranquilla, Atlántico.
              </a>
            </div>
          </div>
          {/* Column End */}

          {/* Column Start */}
          <div>
            <span className="text-base font-bold tracking-wide text-white">
              Social
            </span>

            <div className="flex items-center mt-1 space-x-3 pt-2">

              {/* Whatsapp */}
              <a aria-label="red social whatsapp" href="https://wa.me/3017522772" target="_blank" className="text-gray-500 hover:text-deep-purple-accent-400 transition duration-300 ease-in-out hover:scale-110" >
                <img src={Whatsapp} width={'35'} alt="icono whatsapp" />
              </a>

              {/* Instagram */}
              <a aria-label="red social Instagram" href="https://www.instagram.com/nexus_it.co/" target="_blank" className="text-gray-500 hover:text-deep-purple-accent-400 transition duration-300 ease-in-out hover:scale-110" >
                <img src={Instagram} width={'35'} alt="icono instagram" />
              </a>

              {/* Linkedin */}
              <a aria-label="red social Linkedin" href="https://www.linkedin.com/company/nexus-it-co/mycompany/" target="_blank" className="text-gray-500 hover:text-deep-purple-accent-400 transition duration-300 ease-in-out hover:scale-110" >
                <img src={Linkedin} width={'35'} alt="icono linkedin" />
              </a>
            </div>
            
            <p className="mt-4 text-sm text-white ">
              {text("footer.description-social")} 🚀
            </p>
          </div>
          {/* Column End */}
        </div>
        
        <div className="flex flex-col-reverse justify-center pt-5 pb-10 lg:flex-row">
          <p className="text-sm text-white">
            © {text("footer.nexus-it")} {currentYear}, {text("footer.all-rights-reserved")}
          </p>
        </div>
      </div>
    </footer>
  )
}