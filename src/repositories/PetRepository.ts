import { Repository } from "typeorm";
import { PetEntity } from "../entities/PetEntity";
import InterfacePetRepository from "./InterfacePetRepository";

export default class PetRepository implements InterfacePetRepository {
  private repository: Repository<PetEntity>; // repository é uma instância do tipo Repository<PetEntity>

  constructor(repository: Repository<PetEntity>) {
    this.repository = repository;
  }

  async criaPet(pet: PetEntity): Promise<void> {
    await this.repository.save(pet);
  }

  listaPet(): Promise<Array<PetEntity>> {
    throw new Error("Method not implemented.");
  }
  atualizaPet(id: number, pet: PetEntity): Promise<void> {
    throw new Error("Method not implemented.");
  }
  deletaPet(id: number, pet: PetEntity): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
