import { PetEntity } from "../entities/PetEntity";
import EnumPortePet from "../types/EnumPortePet";
//interface para os metodos do repositorio de pet
export default interface InterfacePetRepository {
    criaPet(pet: PetEntity): Promise<PetEntity>;
    listaPet(): Promise<Array<PetEntity>>;
    atualizaPet(
        id: number,
        pet: PetEntity
    ): Promise<{ success: boolean; message?: string }>;
    deletaPet(id: number): Promise<{ success: boolean; message?: string }>;
    adotaPet(
        idPet: number,
        idAdotante: number
    ): Promise<{ success: boolean; message?: string }>;
    buscaPetPeloPorte(porte: EnumPortePet): Promise<Array<PetEntity>>;
}
