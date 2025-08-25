import { Repository } from "typeorm";
import { PetEntity } from "../entities/PetEntity";
import InterfacePetRepository from "../interfaces/InterfacePetRepository";
import { AdotanteEntity } from "../entities/AdotanteEntity";

//camada que vai fazer a comunicação com o banco de dados
export default class PetRepository implements InterfacePetRepository {
    private petRepository: Repository<PetEntity>;
    private adotanteRepository: Repository<AdotanteEntity>; // repository é uma instância do tipo Repository<PetEntity>

    constructor(
        petRepository: Repository<PetEntity>,
        adotanteRepository: Repository<AdotanteEntity>
    ) {
        this.petRepository = petRepository;
        this.adotanteRepository = adotanteRepository;
    }

    async criaPet(pet: PetEntity): Promise<PetEntity> {
        const novoPet = await this.petRepository.save(pet);
        return novoPet;
    }

    async listaPet(): Promise<Array<PetEntity>> {
        return await this.petRepository.find();
    }

    async atualizaPet(
        id: number,
        pet: PetEntity
    ): Promise<{ success: boolean; message?: string }> {
        try {
            const petToUpdate = await this.petRepository.findOne({
                where: { id },
            });

            if (!petToUpdate) {
                return { success: false, message: "Pet não encontrado" };
            }

            Object.assign(petToUpdate, pet);

            await this.petRepository.save(petToUpdate);

            return { success: true };
        } catch (error) {
            console.log(error);
            return {
                success: false,
                message: "Ocorreu um erro ao tentar atualizar o pet.",
            };
        }
    }

    async deletaPet(
        id: number
    ): Promise<{ success: boolean; message?: string }> {
        try {
            const petToDelete = await this.petRepository.findOne({
                where: { id },
            });
            if (!petToDelete) {
                return { success: false, message: "Pet não encontrado" };
            }
            await this.petRepository.remove(petToDelete);
            return { success: true };
        } catch (error) {
            console.log(error);
            return {
                success: false,
                message: "Ocorreu um erro ao tentar deletar o pet.",
            };
        }
    }

    async adotaPet(
        idPet: number,
        idAdotante: number
    ): Promise<{ success: boolean; message?: string }> {
        const pet = await this.petRepository.findOne({ where: { id: idPet } });
        if (!pet) {
            return { success: false, message: "Pet não encontrado" };
        }

        const adotante = await this.adotanteRepository.findOne({
            where: { id: idAdotante },
        });
        if (!adotante) {
            return { success: false, message: "Adotante não encontrado" };
        }

        pet.adotante = adotante;
        pet.adotado = true;
        await this.petRepository.save(pet);
        return { success: true };
    }
}
