import {
    Banda
} from "./banda.model";
import {
    Cancion
} from "./cancion.model";

export interface Album {
    Id: number;
    Nombre: string;
    AnioCreacion: number;
    Genero: string;
    Banda: Banda;
    Canciones: Cancion[];
    Error?: any;
}