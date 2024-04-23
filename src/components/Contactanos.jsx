
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Input, Button, Textarea } from "@nextui-org/react";

export const Contactanos = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();


  const [formSubmitted, setFormSubmitted] = useState(false);



  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    idea: ""

  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const enviarCorreo2 = async () => {
    const formdata = new FormData();
    formdata.append("name", formData.name);
    formdata.append("lastName", formData.lastName);
    formdata.append("email", formData.email);
    formdata.append("phone", formData.phone);
    formdata.append("company", formData.company);
    formdata.append("idea", formData.idea);

    const requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };

    try {
      const response = await fetch("https://nexus-it.co/api/enviarCorreo2", requestOptions);
      const result = await response.text();
      console.log(result);
      // Cambiar el estado a true cuando el formulario se envía exitosamente
      setFormSubmitted(true);
    } catch (error) {
      console.log('Error:', error);
    }
  };

  const onSubmit = async () => {
    enviarCorreo2();
  };


  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('Timer finished');
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [formSubmitted]);


  const handleButtonClick = () => {
    enviarCorreo2();
  };

  return (
    <section id="contactanos-section" className="flex sm:justify-center sm:items-center sm:h-screen md:justify-start md:items-start md:h-auto lg:justify-end lg:items-end lg:h-1/2 xl:justify-around xl:items-around xl:h-3/4">

      <div className="container mx-auto px-4 py-8 md:px-8 lg:px-20 ">
        <h2 className="text-2xl md:text-4xl font-bold text-secondaryColor mb-4 md:mb-8">Agenda tu llamada ahora</h2>
        <p className="text-lg md:text-2xl text-secondaryColor mb-8">¡Nos encantaría saber de ti!</p>

        <form action="enviar_correo2.php" method="post" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid md:gap-8 grid-cols-2 md:grid-cols-2">
            {/* Inputs del formulario */}
            <Input {...register("name", { required: true })} variant="underlined" type="text" onChange={handleChange} label="Nombre" defaultValue="" value={formData.name} className="max-w-md" isRequired isInvalid={errors.name && true} errorMessage={errors.name && "Este campo es obligatorio"} />
            <Input {...register("lastName", { required: true })} variant="underlined" type="text"  onChange={handleChange} label="Apellido" defaultValue="" value={formData.lastName} className="max-w-md" isRequired isInvalid={errors.lastName && true} errorMessage={errors.lastName && "Este campo es obligatorio"} />
            <Input {...register("email", { required: true })} variant="underlined" type="email" onChange={handleChange} label="Email" defaultValue="" value={formData.email} className="max-w-md" isRequired isInvalid={errors.email && true} errorMessage={errors.email && "Por favor, ingresa una dirección de correo electrónico válida."} />
            <Input {...register("phone", { required: true })} variant="underlined" type="tel" onChange={handleChange} label="Teléfono" defaultValue="" value={formData.phone} className="max-w-md" isRequired isInvalid={errors.phone && true} errorMessage={errors.phone && "Por favor, ingresa un número de teléfono válido."} />
            <Input {...register("company")} variant="underlined" type="text" label="Empresa" onChange={handleChange} defaultValue=""  value={formData.company} className="max-w-md mb-9 md:mb-0 lg:mb-6" />
            <Textarea {...register("idea")} variant="outlined" label="Cuéntanos acerca de tu idea" onChange={handleChange} value={formData.idea} placeholder="" description="Proporciona una descripción concisa de tu proyecto." className="col-span-full max-w-md" />
            <div className="col-span-full  ">
              <input id="accept-terms-checkbox" type="checkbox" {...register("acceptTerms", { required: true })} className="w-4 h-4 col-span-full max-w-md text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="accept-terms-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Al hacer clic en el botón estás aceptando las <a href="pdfs/terminos_condiciones.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">políticas de datos</a></label>
            </div>
            <Button type="submit" size="lg" radius="full" className="font-semibold bg-thirdColor mt-5 text-secondaryColor mb-4 col-span-full md:w-56 lg:w-56">Enviar Formulario</Button>
          </div>
        </form>
      </div>
    </section>
  );
};

