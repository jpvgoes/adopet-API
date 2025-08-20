import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToOne,
    JoinColumn,
} from "typeorm";
import { TipoAdotante } from "../types/TipoAdotante";
import { EnderecoEntity } from "./EnderecoEntity";

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
    @OneToOne(() => EnderecoEntity, {
        nullable: true,
        cascade: true,
        eager: true,
    })
    @JoinColumn()
    @Column({ nullable: true })
    endereco?: EnderecoEntity;

    constructor(adotante?: TipoAdotante) {
        this.nome = adotante?.nome;
        this.senha = adotante?.senha;
        this.celular = adotante?.celular;
        this.foto = adotante?.foto;
        this.endereco = adotante?.endereco;
    }
}
