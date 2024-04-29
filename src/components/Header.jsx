import React, { useEffect, useState } from "react";
import { Navbar as Navegation, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, Button, Select, SelectItem } from "@nextui-org/react";
import { Link as LinkScroll } from "react-scroll";
import LogoNexus from "../assets/images/logo-header.svg";
import { useTranslation } from "react-i18next";

const menuItems = [
  {
    pathname: '¿Quiénes somos?',
    path: 'inicio-section'
  },
  {
    pathname: 'Servicios',
    path: 'servicios-section'
  },
  {
    pathname: 'Equipo',
    path: 'equipo-section'
  },
  {
    pathname: 'Success stories',
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
  const [text, i18n] = useTranslation("global");

  const lenguages = [
    { 
      value: "en", 
      label: text("header.english"),
      icon: (
        <svg
        className="w-4 h-4"
        enableBackground="new 0 0 512 512"
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="256" cy="256" fill="#f0f0f0" r="256"/>
        <g fill="#d80027">
          <path d="m244.87 256h267.13c0-23.106-3.08-45.49-8.819-66.783h-258.311z"/>
          <path d="m244.87 122.435h229.556c-15.671-25.572-35.708-48.175-59.07-66.783h-170.486z"/>
          <path d="m256 512c60.249 0 115.626-20.824 159.356-55.652h-318.712c43.73 34.828 99.107 55.652 159.356 55.652z"/>
          <path d="m37.574 389.565h436.852c12.581-20.529 22.338-42.969 28.755-66.783h-494.362c6.417 23.814 16.174 46.254 28.755 66.783z"/>
        </g>
        <path d="m118.584 39.978h23.329l-21.7 15.765 8.289 25.509-21.699-15.765-21.699 15.765 7.16-22.037c-19.106 15.915-35.852 34.561-49.652 55.337h7.475l-13.813 10.035c-2.152 3.59-4.216 7.237-6.194 10.938l6.596 20.301-12.306-8.941c-3.059 6.481-5.857 13.108-8.372 19.873l7.267 22.368h26.822l-21.7 15.765 8.289 25.509-21.699-15.765-12.998 9.444c-1.301 10.458-1.979 21.11-1.979 31.921h256c0-141.384 0-158.052 0-256-50.572 0-97.715 14.67-137.416 39.978zm9.918 190.422-21.699-15.765-21.699 15.765 8.289-25.509-21.7-15.765h26.822l8.288-25.509 8.288 25.509h26.822zm-8.289-100.083 8.289 25.509-21.699-15.765-21.699 15.765 8.289-25.509-21.7-15.765h26.822l8.288-25.509 8.288 25.509h26.822zm100.115 100.083-21.699-15.765-21.699 15.765 8.289-25.509-21.7-15.765h26.822l8.288-25.509 8.288 25.509h26.822zm-8.289-100.083 8.289 25.509-21.699-15.765-21.699 15.765 8.289-25.509-21.7-15.765h26.822zm0-74.574 8.289 25.509-21.699-15.765-21.699 15.765 8.289-25.509-21.7-15.765h26.822z" fill="#0052b4"/>
      </svg>
      )
    },
    { 
      value: "es", 
      label: text("header.spanish"),
      icon: (
        <svg
        className="w-4 h-4"
        enableBackground="new 0 0 512 512"
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="m0 256c0-141.384 114.616-256 256-256s256 114.616 256 256l-256 22.261z" fill="#ffda44" />
        <path d="m34.256 384c44.265 76.516 126.989 128 221.744 128s177.479-51.484 221.744-128l-221.744-16.696z" fill="#d80027" />
        <path d="m477.744 384c21.782-37.654 34.256-81.369 34.256-128h-512c0 46.631 12.474 90.346 34.256 128z" fill="#0052b4" />
      </svg>
      )
    },
  ];


  useEffect(() => {
    window.addEventListener("scroll", () => {
      // setScrollActive(window.scrollY > 20);
    });
  }, []);

  return (
    <>
      <Navegation aria-label="menu" isBlurred={true} isBordered className={"bg-thirdColor text-secondaryColor"}  >
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle aria-label="menu" />
        </NavbarContent>

        <NavbarContent className="sm:hidden" justify="center">
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
              <img className='rounded-none' width={150} src={LogoNexus} alt='logo nexus' />
            </LinkScroll>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
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
              <img className='rounded-none' width={150} src={LogoNexus} alt='logo nexus' />
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
                "py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "inicio-section"
                  ? " font-semibold animation-active "
                  : " text-black-500 a")
              }
            >
              {text("header.who-are-we")}
            </LinkScroll>
          </NavbarItem>
          <NavbarItem >
            <LinkScroll
              activeClass="active"
              to="servicios-section"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("servicios-section");
              }}
              className={
                "py-2 mx-2 cursor-pointer animation-hover relative" +
                (activeLink === "servicios-section"
                  ? " font-semibold animation-active "
                  : " text-black-500 a")
              }
            >
              {text("header.services")}
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
              {text("header.team")}
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
              {text("header.success-stories")}
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
        <NavbarContent justify="end">
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
              {text("header.contact-us")}
            </Button>
          </NavbarItem>

          <NavbarItem>

            <Select
              label="Lenguage"
              className="max-w-md md:flex w-32"
            >
              {lenguages.map((lenguage) => (
                <SelectItem key={lenguage.value} value={lenguage.value} onClick={() => i18n.changeLanguage(lenguage.value)} >
                  <div className="flex items-center">
                    <span>{lenguage.label}</span>
                    <span className="ml-2">{lenguage.icon}</span>
                  </div>
                </SelectItem>
              ))}
            </Select>

          </NavbarItem>

        </NavbarContent>
        <NavbarMenu>
          {menuItems.map(({ pathname, path }, index) => (
            <NavbarMenuItem key={`${pathname}-${index}`}>
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
                  "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                  (activeLink === path
                    ? " text-green-500 font-semibold animation-active "
                    : " text-black-500 a")
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