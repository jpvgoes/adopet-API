import { EnumRaca } from "./EnumRaca";

export type TipoPet = {
  id: number;
  nome: string;
  especie: EnumRaca;
  adotado: boolean;
  dataNascimento: Date;
};
