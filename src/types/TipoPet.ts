import { AdotanteEntity } from "../entities/AdotanteEntity";
import { EnumEspecie } from "./EnumEspecie";
import EnumPortePet from "./EnumPortePet";

export type TipoPet = {
    id?: number;
    nome: string;
    especie: EnumEspecie;
    porte?: EnumPortePet;
    adotado: boolean;
    dataNascimento: Date;
    adotante?: AdotanteEntity;
};
