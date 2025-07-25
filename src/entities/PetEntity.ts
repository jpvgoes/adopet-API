import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { EnumEspecie } from "../types/EnumEspecie";

import { TipoPet } from "../types/TipoPet";

@Entity()
export class PetEntity implements TipoPet {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nome: string;

  @Column()
  especie: EnumEspecie;

  @Column()
  adotado: boolean;

  @Column()
  dataNascimento: Date;

  constructor(pet?: TipoPet) {
    this.nome = pet?.nome;
    this.especie = pet?.especie;
    this.adotado = pet?.adotado;
    this.dataNascimento = pet?.dataNascimento;
  }
}
