import { EnumEspecie } from "./EnumEspecie";

export type TipoPet = {
  id: number;
  nome: string;
  especie: EnumEspecie;
  adotado: boolean;
  dataNascimento: Date;
};
