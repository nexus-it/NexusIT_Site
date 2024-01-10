import { Input, Textarea, Button, RadioGroup, Radio } from "@nextui-org/react";
import { useForm } from "react-hook-form";

export const Contactanos = () => {

  const {
    register,
    handleSubmit,
    formState: { errors, },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <section id="contactanos-section" >

      <div className="container mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold text-secondaryColor">Agenda tu llamada ahora</h2>
        <p className="my-4 text-2xl text-secondaryColor">¡Nos encantaría saber de ti!</p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <Input
              {...register("name", { required: true })}
              variant="underlined"
              type="text"
              label="Nombre"
              name="name"
              defaultValue=""
              className="max-w-xs"
              isRequired
              isInvalid={errors.name && true}
              errorMessage={errors.name && "Este campo es obligatorio"} />

            <Input
              {...register("lastName", { required: true })}
              variant="underlined"
              type="text"
              label="Apellido"
              defaultValue=""
              className="max-w-xs"
              isRequired
              isInvalid={errors.lastName && true}
              errorMessage={errors.lastName && "Este campo es obligatorio"} />

            <Input
              {...register("email", {
                required: true, pattern: {
                  value: /^(?=.{1,256})(?=.{1,64}@.{1,255}$)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                }
              })}
              variant="underlined"
              type="email"
              label="Email"
              defaultValue=""
              className="max-w-xs"
              isRequired
              isInvalid={errors.email && true}
              errorMessage={errors.email && "Por favor, ingresa una dirección de correo electrónico válida."} />

            <Input
              {...register("phone", {
                required: true, pattern: {
                  value: /^\+?[0-9\s.-]+$/,
                  message: 'Por favor, ingresa un número de teléfono válido',
                }
              })}
              variant="underlined"
              type="tel"
              label="Teléfono"
              defaultValue=""
              className="max-w-xs"
              isRequired
              isInvalid={errors.phone && true}
              errorMessage={errors.phone && "Por favor, ingresa un número de teléfono válido."} />

            <Input
              {...register("company", { required: false })}
              variant="underlined"
              type="text"
              label="Empresa"
              defaultValue=""
              className="max-w-xs" />

            <RadioGroup
              {...register("budget", { required: false })}
              label="¿Tienes un presupuesto asignado para tu proyecto?"
              orientation="horizontal"
              color="success" >
              <Radio value="si">Si</Radio>
              <Radio value="no">No</Radio>
            </RadioGroup>

            <Textarea
              {...register("company", { required: false })}
              variant="underlined"
              label="Cuéntanos acerca de tu idea"
              placeholder=""
              description="Proporciona una descripción concisa de tu proyecto."
              className="col-span-full" />
          </div>

          <Button type="submit" size="lg" radius="full" className="font-semibold bg-thirdColor text-secondaryColor my-4">Enviar Formulario</Button>
        </form>
      </div>
    </section>
  )
}