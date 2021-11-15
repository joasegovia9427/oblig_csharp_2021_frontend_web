import {
    Banda
} from "./banda.model";
import {
    Cancione
} from "./cancione.model";

export interface Album {
    Id: number;
    Nombre: string;
    AnioCreacion: number;
    Genero: string;
    Banda: Banda;
    Canciones: Cancione[];
    Error?: any;
}