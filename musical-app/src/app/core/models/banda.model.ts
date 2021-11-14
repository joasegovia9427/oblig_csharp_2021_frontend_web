import {
    Integrante
} from "./integrante.model";

export interface Banda {
    /*     Id: string;
        Genero: string;
        Nombre: string;
        AnioCreacion: number;
        AnioSeparacion: number;
        Integrantes: any[]; */
    Id: number;
    Nombre: string;
    AnioCreacion: number;
    AnioSeparacion: number;
    Genero: string;
    Integrantes: Integrante[];
    Error?: any;

}

