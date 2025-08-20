import { EnderecoEntity } from "../entities/EnderecoEntity";

export type TipoAdotante = {
    id?: number;
    nome: string;
    senha: string;
    celular: string;
    foto: string;
    endereco?: EnderecoEntity;
};
