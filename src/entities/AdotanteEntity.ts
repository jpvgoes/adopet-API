import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { TipoAdotante } from "../types/TipoAdotante";

@Entity()
export class AdotanteEntity implements TipoAdotante {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column()
  nome: string;
  @Column()
  senha: string;
  @Column()
  celular: string;
  @Column({ nullable: true })
  foto: string;
  @Column({ nullable: true })
  endereco: string;

  constructor(adotante?: TipoAdotante) {
    this.nome = adotante?.nome;
    this.senha = adotante?.senha;
    this.celular = adotante?.celular;
    this.foto = adotante?.foto;
    this.endereco = adotante?.endereco;
  }
}
