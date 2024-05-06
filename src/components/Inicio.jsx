import Image1 from "../assets/images/imagen-1.svg";
import Image2 from "../assets/images/imagen-2.svg";
import { Link as LinkScroll } from "react-scroll";
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Background from "../assets/images/background.jpg";
import { Input, Button } from "@nextui-org/react";
import { useTranslation } from "react-i18next";
import terminos_condiciones from "../assets/pdfs/tratamiento_de_datos.pdf";
import axios from 'axios';

export const Inicio = () => {

  const [activeLink, setActiveLink] = useState(null);
  const [text, i18n] = useTranslation("global");

  const [formSubmitted, setFormSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset 
  } = useForm();

  const [formData, setFormData] = useState({
    name: "",
    last_name: "",
    company: "",
    email: "",
    policies: true
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;
    setFormData(prevState => ({
      ...prevState,
      [name]: val
    }));
  };

  const sendEmail = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/post/requests", formData);
      console.log(response.data);
      // Cambiar el estado a true cuando el formulario se envía exitosamente
      setFormSubmitted(true);
      // Limpiar los campos del formulario después de enviar
      setFormData({
        name: "",
        last_name: "",
        company: "",
        email: "",
        policies: ""
      });
      reset();
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  const onSubmit = async () => {
    sendEmail();
  };

  return (
    <>
      <section id="inicio-section" className="bg-primaryColor">

        <div className="container mx-auto px-4 py-12 sm:py-16 lg:py-20 xl:py-24">

          <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-10 xl:gap-x-12 lg:items-center" >



            <div className="mt-5 sm:ml-8 lg:mt-0">
              <h2 className="text-2xl lg:text-4xl font-bold text-primaryColor mb-4"> {text("start.we-develop-software-solutions")} <span className="font-normal text-white"> {text("start.tailored-to-your-needs.")} </span></h2>
              <Button
                as={LinkScroll}
                to="contactanos-section"
                spy={true}
                smooth={true}
                duration={1000}
                aria-label="ir a formulario de agendar llamada"
                onSetActive={() => setActiveLink("contactanos-section")}
                size="lg"
                className="bg-thirdColor text-secondaryColor font-semibold transition delay-150 duration-300 ease-in-out"
                variant="flat"> {text("start.contact-us")} </Button>
            </div>



            <div className="lg:col-span-1 mt-5">
              <img className="w-full max-w-x1 lg:max-w-none mx-auto " data-aos-duration="2000" data-aos="flip-up" src={Image1} alt="Image Description" />
            </div>

            <div className="relative lg:col-span-1 mt-5">
              <div aria-label="card servicio" className="p-4 lg:p-7 bg-white rounded-3xl hover:bg-gray-100 border border-secondaryColor shadow-sm w-full sm:max-w-md mx-auto lg:ml-0 lg:mr-0 lg:w-auto">
                <h2 className="text-2xl lg:text-4xl font-bold text-secondaryColor"> {text("start.schedule-your-call-now")} </h2>
                <p className="my-2 text-lg lg:text-2xl text-secondaryColor"> {text("start.We'd-love-to-hear-from-you!")} </p>


                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="grid gap-2 lg:gap-4">
                    <Input
                      {...register("name", { required: true })}
                      variant="underlined"
                      type="text"
                      label={text("start.name")}
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      isInvalid={errors.name && true}
                      errorMessage={errors.name && text("start.this-field-is-required")} />
                    <Input
                      {...register("last_name", { required: true })}
                      variant="underlined"
                      type="text"
                      label={text("start.last-name")}
                      name="last_name"
                      value={formData.last_name}
                      onChange={handleChange}
                      isInvalid={errors.last_name && true}
                      errorMessage={errors.last_name && text("start.this-field-is-required")} />
                    <Input
                      {...register("company", { required: false })}
                      variant="underlined"
                      type="text"
                      label={text("start.company")}
                      name="company"
                      value={formData.company}
                      onChange={handleChange} />
                    <Input
                      {...register("email", {
                        required: true,
                        pattern: {
                          value: /^(?=.{1,256})(?=.{1,64}@.{1,255}$)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        }
                      })}
                      variant="underlined"
                      type="email"
                      label="Email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      isInvalid={errors.email && true}
                      errorMessage={errors.email && text("start.please-enter-a-valid-email-address")} />
                  </div>
                  <div className="flex mt-4 lg:mt-5 items-center mb-2 lg:mb-4">
                    <input
                      {...register("acceptTerms", { required: true })}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      id="accept-terms-checkbox"
                      type="checkbox"
                      value={formData.policies}
                      onChange={handleChange}
                    />
                    <label htmlFor="accept-terms-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                      {text("start.by-clicking-the-button-you-are-accepting-the")}{" "}
                      <a
                        href={terminos_condiciones}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline"
                      >
                        {text("start.data-policies")}
                      </a>
                    </label>
                  </div>
                  <Button type="submit" radius="full" className="bg-primaryColor hover:bg-gray-800 text-white px-4 py-2 mt-2 mx-auto lg:ml-0 lg:mt-6"> {text("start.send")} </Button>
                  {errors.email && <span> {text("start.please-enter-a-valid-email-address")} </span>}
                </form>


              </div>
            </div>

          </div>

          {formSubmitted && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
              <strong className="font-bold"> {text("start.success")} </strong>
              <span className="block sm:inline"> {text("start.the-form-was-submitted-successfully")} </span>
              <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                <svg className="fill-current h-6 w-6 text-green-500" role="button" onClick={() => setFormSubmitted(false)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <title>Close</title>
                  <path fillRule="evenodd" d="M14.35 5.65a.5.5 0 00-.7 0L10 9.29 6.35 5.65a.5.5 0 10-.7.7L9.29 10l-3.64 3.65a.5.5 0 00.7.7L10 10.71l3.65 3.64a.5.5 0 00.71-.7L10.71 10l3.64-3.65a.5.5 0 000-.7z" clipRule="evenodd" />
                </svg>
              </span>
            </div>
          )}

        </div>

        <div className="relative">
          <img aria-label="imagen nexus" src={Background} className="absolute inset-0 object-cover w-full h-full" alt="imagen nexus" />
          <div className="relative bg-gray-900 bg-opacity-75">
            <div className="container mx-auto px-4 py-14">
              <div className="flex justify-center items-center xl:flex-row">
                <div className="w-full max-w-xl mb-6 lg:mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                  <h2 className="mb-2 text-green-500  font-bold text-center lg:text-start text-lg lg:text-4xl">
                    {text("start.What-is-NEXUS-IT?")}
                  </h2>
                  <p className="mb-2 text-white  text-center lg:text-start text-sm lg:text-lg">
                    {text("start.introduction-what-is-nexusit")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
            <div className="lg:col-span-3">
              <h2 className="mb-2 text-green-500 font-bold text-center lg:text-start text-lg lg:text-4xl"> {text("start.what-do-we-do?")} </h2>
              <p className="mt-2 text-lg text-white  text-center lg:text-start"> {text("start.introduction-what-do-we-do?")} </p>
            </div>
            <div className="lg:col-span-4 mt-6 lg:mt-0">
              <img data-aos="flip-up" data-aos-duration="2000" className="w-[570px] md:w-[570px] lg:w-[570px] xl:w-[570px] rounded-xl" src={Image2} alt="Image Description" />
            </div>
          </div>
        </div>

      </section>
    </>
  );
};


export default Inicio;
