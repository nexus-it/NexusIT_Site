import {
    Servicios,
    Inicio,
    Equipo,
    Team,
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
            <Team />
            <Clientes />
            <Blog />
            <Contactanos />
            <Whatsapp/>

        </>
    )
}