import { Repository } from "typeorm";
import { AdotanteEntity } from "../entities/AdotanteEntity";
import InterfaceAdotanteRepository from "../interfaces/InterfaceAdotanteRepository";

//camada que vai fazer a comunicação com o banco de dados
export default class AdotanteRepository implements InterfaceAdotanteRepository {
  private repository: Repository<AdotanteEntity>;

  constructor(repository: Repository<AdotanteEntity>) {
    this.repository = repository;
  }

  async criaAdotante(adotante: AdotanteEntity): Promise<AdotanteEntity> {
    const novoAdotante = await this.repository.save(adotante);
    return novoAdotante;
  }
}
