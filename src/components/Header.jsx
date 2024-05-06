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
          xmlns="http://www.w3.org/2000/svg">
            <circle cx="256" cy="256" fill="#f0f0f0" r="256"/>
            <g fill="#0052b4">
              <path d="m52.92 100.142c-20.109 26.163-35.272 56.318-44.101 89.077h133.178z"/>
              <path d="m503.181 189.219c-8.829-32.758-23.993-62.913-44.101-89.076l-89.075 89.076z"/>
              <path d="m8.819 322.784c8.83 32.758 23.993 62.913 44.101 89.075l89.074-89.075z"/>
              <path d="m411.858 52.921c-26.163-20.109-56.317-35.272-89.076-44.102v133.177z"/>
              <path d="m100.142 459.079c26.163 20.109 56.318 35.272 89.076 44.102v-133.176z"/>
              <path d="m189.217 8.819c-32.758 8.83-62.913 23.993-89.075 44.101l89.075 89.075z"/>
              <path d="m322.783 503.181c32.758-8.83 62.913-23.993 89.075-44.101l-89.075-89.075z"/>
              <path d="m370.005 322.784 89.075 89.076c20.108-26.162 35.272-56.318 44.101-89.076z"/>
              </g><g fill="#d80027">
                <path d="m509.833 222.609h-220.44-.001v-220.442c-10.931-1.423-22.075-2.167-33.392-2.167-11.319 0-22.461.744-33.391 2.167v220.44.001h-220.442c-1.423 10.931-2.167 22.075-2.167 33.392 0 11.319.744 22.461 2.167 33.391h220.44.001v220.442c10.931 1.423 22.073 2.167 33.392 2.167 11.317 0 22.461-.743 33.391-2.167v-220.44-.001h220.442c1.423-10.931 2.167-22.073 2.167-33.392 0-11.317-.744-22.461-2.167-33.391z"/>
                <path d="m322.783 322.784 114.236 114.236c5.254-5.252 10.266-10.743 15.048-16.435l-97.802-97.802h-31.482z"/><path d="m189.217 322.784h-.002l-114.235 114.235c5.252 5.254 10.743 10.266 16.435 15.048l97.802-97.804z"/><path d="m189.217 189.219v-.002l-114.236-114.237c-5.254 5.252-10.266 10.743-15.048 16.435l97.803 97.803h31.481z"/><path d="m322.783 189.219 114.237-114.238c-5.252-5.254-10.743-10.266-16.435-15.047l-97.802 97.803z"/></g><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/></svg>
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
          xmlns="http://www.w3.org/2000/svg">
            <path d="m0 256c0 31.314 5.633 61.31 15.923 89.043l240.077 22.261 240.077-22.261c10.29-27.733 15.923-57.729 15.923-89.043s-5.633-61.31-15.923-89.043l-240.077-22.261-240.077 22.261c-10.29 27.733-15.923 57.729-15.923 89.043z" fill="#ffda44"/><g fill="#d80027"><path d="m496.077 166.957c-36.171-97.484-130.006-166.957-240.077-166.957s-203.906 69.473-240.077 166.957z"/><path d="m15.923 345.043c36.171 97.484 130.006 166.957 240.077 166.957s203.906-69.473 240.077-166.957z"/></g><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/></svg>
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
              className="max-w-xs md:flex w-32"
            >
              {lenguages.map((lenguage) => (
                <SelectItem
                  startContent={lenguage.icon} 
                  key={lenguage.value} 
                  value={lenguage.value} 
                  onClick={() => i18n.changeLanguage(lenguage.value)} >
                    {lenguage.label}
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