import Whatsapp from "../components/Whatsapp";
import {Servicios} from "../components/Servicios";
import {Inicio} from "../components/Inicio";
import {Team} from "../components/Team";
import {Clientes} from "../components/Clientes";
import {Contactanos} from "../components/Contactanos";
import {Blog} from "../components/Blog";


export const NexusPage = () => {
    return (
        <>
            <Inicio />
            <Servicios />
            <Team />
            <Clientes />
            <Blog />
            <Contactanos />
            <Whatsapp />

        </>
    )
}