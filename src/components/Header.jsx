import React, { useEffect, useState } from "react";
import { Navbar as Navegation, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, Button } from "@nextui-org/react";
import { Link as LinkScroll } from "react-scroll";
import LogoNexus from "../assets/images/logo-header.svg";

const menuItems = [
  {
    pathname: '¿Quiénes somos?',
    path: 'inicio-section'
  },
  {
    pathname: 'Servicios',
    path: 'servicioss-section'
  },
  {
    pathname: 'Equipo',
    path: 'equipo-section'
  },
  {
    pathname: 'Historias de exito',
    path: 'clientes-section'
  },
  {
    pathname: 'Blog',
    path: 'blog-section'
  },
];

export const Header = () => {

  const [activeLink, setActiveLink] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollActive, setScrollActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      // setScrollActive(window.scrollY > 20);
    });
  }, []);

  return (
    <>
      {/**<Whatsapp /> */}

      <Navegation aria-label="menu" isBlurred={true} isBordered className={"bg-thirdColor text-secondaryColor "}  >
        <NavbarContent className="sm:hidden p-0" justify="start">
          <NavbarMenuToggle aria-label="menu" />
        </NavbarContent>

        <NavbarContent className="sm:hidden justify-start ">
          <NavbarBrand>
            <LinkScroll
              activeClass="active"
              to="inicio-section"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("inicio-section");
              }}
              className={
                "cursor-pointer" +
                (activeLink === "inicio-section"
                  ? ""
                  : "")
              }
            >
              <img className='rounded-none medium-size-logo ' width={150} src={LogoNexus} alt='logo nexus' />
            </LinkScroll>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex md-30 lg:ml-[-2rem] " justify="star">
          <NavbarBrand>
            <LinkScroll
              activeClass="active"
              to="inicio-section"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("inicio-section");
              }}
              className={
                "cursor-pointer" +
                (activeLink === "inicio-section"
                  ? ""
                  : "")
              }
            >
              <img className='rounded-none lg:ml-[-7rem]' width={280} src={LogoNexus} alt='logo nexus' />
            </LinkScroll>
          </NavbarBrand>

          <NavbarItem>
            <LinkScroll
              activeClass="active"
              to="inicio-section"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("inicio-section");
              }}
              className={
                "py-2 mx-1 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "inicio-section"
                  ? " font-semibold animation-active "
                  : " text-black-500 a ")
              }
            >
              ¿Quiénes somos?
            </LinkScroll>
          </NavbarItem>
          <NavbarItem >
            <LinkScroll
              activeClass="active"
              to="servicioss-section"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("servicioss-section");
              }}
              className={
                "py-2 mx-6 cursor-pointer animation-hover relative" +
                (activeLink === "servicioss-section"
                  ? " font-semibold animation-active "
                  : " text-black-500 a")
              }
            >
              Servicios
            </LinkScroll>
          </NavbarItem>
          <NavbarItem>
            <LinkScroll
              activeClass="active"
              to="equipo-section"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("equipo-section");
              }}
              className={
                "py-2 mx-2 cursor-pointer animation-hover relative" +
                (activeLink === "equipo-section"
                  ? " font-semibold animation-active "
                  : " text-black-500 a")
              }
            >
              Equipo
            </LinkScroll>
          </NavbarItem>
          <NavbarItem>
            <LinkScroll
              activeClass="active"
              to="clientes-section"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("clientes-section");
              }}
              className={
                "py-2 mx-2 cursor-pointer animation-hover relative" +
                (activeLink === "clientes-section"
                  ? " font-semibold animation-active "
                  : " text-black-500 a")
              }
            >
              Historias de exito
            </LinkScroll>
          </NavbarItem>
          <NavbarItem className="hidden md:flex">
            <LinkScroll
              activeClass="active"
              to="blog-section"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("blog-section");
              }}
              className={
                "py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "blog-section"
                  ? " font-semibold animation-active "
                  : " text-black-500 a")
              }
            >
              Blog
            </LinkScroll>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent className="lg:mr-[-7rem]" justify="end">
          <NavbarItem>
            <Button as={LinkScroll} to="contactanos-section" spy={true}
              smooth={true}
              duration={1000}
              aria-label="ir a formulario de agendar llamada"
              onSetActive={() => {
                setActiveLink("contactanos-section");
              }} className={"bg-primaryColor text-white font-semibold hidden md:flex" + (activeLink === "contactanos-section"
                ? " font-semibold animation-active "
                : "  a")} variant="flat">
              Contáctanos
            </Button>
          </NavbarItem>
        </NavbarContent >
        <NavbarMenu >
          {menuItems.map(({ pathname, path }, index) => (
            <NavbarMenuItem  key={`${pathname}-${index}`}>
              <LinkScroll
                activeClass="active"
                to={path}
                spy={true}
                smooth={true}
                duration={1000}
                onSetActive={() => {
                  setActiveLink({ path });
                }}
                className={
                  "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative text-lg  " +
                  (activeLink === path
                    ? " text-green-500 font-semibold animation-active "
                    : " text-black-500 a ")
                }
              >
                {pathname}
              </LinkScroll>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navegation>


    </>


  );
}