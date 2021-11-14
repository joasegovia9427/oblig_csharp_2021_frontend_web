import {
    Persona
} from "./persona.model";

export interface Integrante {
    Id: number;
    FechaNacimiento: Date;
    Foto: string;
    Persona: Persona;
    BandaId: number;
    Error?: any;
}