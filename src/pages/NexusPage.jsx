import {
    Servicios,
    Inicio,
    Equipo,
    Clientes,
    Contactanos,
    Blog
} from "../components";
import Whatsapp from "../components/Whatsapp";

export const NexusPage = () => {
    return (
        <>
            <Inicio />
            <Servicios />
            <Equipo />
            <Clientes />
            <Blog />
            <Contactanos />
            <Whatsapp/>

        </>
    )
}