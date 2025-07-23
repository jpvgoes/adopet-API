import { PetEntity } from "../entities/PetEntity";

export default interface InterfacePetRepository {
  criaPet(pet: PetEntity): Promise<void>;
  listaPet(): Promise<Array<PetEntity>>;
  atualizaPet(id: number, pet: PetEntity): Promise<void>;
  deletaPet(id: number, pet: PetEntity): Promise<void>;
}
