import { Repository } from "typeorm";
import { PetEntity } from "../entities/PetEntity";
import InterfacePetRepository from "./InterfacePetRepository";

export default class PetRepository implements InterfacePetRepository {
  private repository: Repository<PetEntity>; // repository é uma instância do tipo Repository<PetEntity>

  constructor(repository: Repository<PetEntity>) {
    this.repository = repository;
  }

  async criaPet(pet: PetEntity): Promise<PetEntity> {
    const novoPet = await this.repository.save(pet);
    return novoPet;
  }

  async listaPet(): Promise<Array<PetEntity>> {
    return await this.repository.find();
  }

  async atualizaPet(
    id: number,
    pet: PetEntity
  ): Promise<{ success: boolean; message?: string }> {
    try {
      const petToUpdate = await this.repository.findOne({ where: { id } });

      if (!petToUpdate) {
        return { success: false, message: "Pet não encontrado" };
      }

      Object.assign(petToUpdate, pet);

      await this.repository.save(petToUpdate);

      return { success: true };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        message: "Ocorreu um erro ao tentar atualizar o pet.",
      };
    }
  }

  async deletaPet(id: number): Promise<{ success: boolean; message?: string }> {
    try {
      const petToDelete = await this.repository.findOne({ where: { id } });
      if (!petToDelete) {
        return { success: false, message: "Pet não encontrado" };
      }
      await this.repository.remove(petToDelete);
      return { success: true };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        message: "Ocorreu um erro ao tentar deletar o pet.",
      };
    }
  }
}
