import {
    Persona
} from "./persona.model";


export interface Usuario {
    Id: number;
    NombreUsuario: string;
    Contrasenia: string;
    Persona: Persona;
    // Error?: any;
}