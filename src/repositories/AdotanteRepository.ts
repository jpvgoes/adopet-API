import { Repository } from "typeorm";
import { AdotanteEntity } from "../entities/AdotanteEntity";
import InterfaceAdotanteRepository from "../interfaces/InterfaceAdotanteRepository";
import { EnderecoEntity } from "../entities/EnderecoEntity";

//camada que vai fazer a comunicação com o banco de dados
export default class AdotanteRepository implements InterfaceAdotanteRepository {
    private repository: Repository<AdotanteEntity>;

    constructor(repository: Repository<AdotanteEntity>) {
        this.repository = repository;
    }

    async criaAdotante(adotante: AdotanteEntity): Promise<AdotanteEntity> {
        return await this.repository.save(adotante);
    }

    async listaAdotantes(): Promise<AdotanteEntity[]> {
        return await this.repository.find();
    }

    async atualizaAdotante(
        id: number,
        adotante: AdotanteEntity
    ): Promise<{ success: boolean; message?: string }> {
        try {
            const adotanteToUpdate = await this.repository.findOne({
                where: { id },
            });
            if (!adotanteToUpdate) {
                return { success: false, message: "Adotante não encontrado" };
            }
            Object.assign(adotanteToUpdate, adotante);
            await this.repository.save(adotanteToUpdate);
            return { success: true };
        } catch (error) {
            console.log(error);
            return {
                success: false,
                message: "Ocorreu um erro ao tentar atualizar o adotante.",
            };
        }
    }

    async deletaAdotante(
        id: number
    ): Promise<{ success: boolean; message?: string }> {
        try {
            const adotanteToDelete = await this.repository.findOne({
                where: { id },
            });
            if (!adotanteToDelete) {
                return { success: false, message: "Adotante não encontrado" };
            }
            await this.repository.remove(adotanteToDelete);
            return { success: true };
        } catch (error) {
            console.log(error);
            return {
                success: false,
                message: "Ocorreu um erro ao tentar deletar o adotante.",
            };
        }
    }

    async atualizaEnderecoAdotante(
        idAdotante: number,
        endereco: EnderecoEntity
    ): Promise<{ success: boolean; message?: string }> {
        try {
            const adotanteToUpdate = await this.repository.findOne({
                where: { id: idAdotante },
            });
            if (!adotanteToUpdate) {
                return { success: false, message: "Adotante não encontrado" };
            }
            adotanteToUpdate.endereco = endereco;
            await this.repository.save(adotanteToUpdate);
            return { success: true };
        } catch (error) {
            console.log(error);
            return {
                success: false,
                message: "Ocorreu um erro ao tentar atualizar o endereco.",
            };
        }
    }
}
