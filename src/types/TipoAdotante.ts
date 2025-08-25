import { EnderecoEntity } from "../entities/EnderecoEntity";
import { PetEntity } from "../entities/PetEntity";

export type TipoAdotante = {
    id?: number;
    nome: string;
    senha: string;
    celular: string;
    foto: string;
    endereco?: EnderecoEntity;
    pets?: PetEntity[];
};
