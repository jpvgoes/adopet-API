import { Request, Response } from "express";
import { EnumEspecie } from "../types/EnumEspecie";
import PetRepository from "../repositories/PetRepository";
import { PetEntity } from "../entities/PetEntity";
import EnumPortePet from "../types/EnumPortePet";

export default class PetController {
    constructor(private petRepository: PetRepository) {
        this.petRepository = petRepository;
    }

    async criaPet(req: Request, res: Response): Promise<Response> {
        try {
            const { adotado, especie, dataNascimento, nome, porte } =
                req.body as PetEntity;

            // Validate required fields
            if (
                !nome ||
                !especie ||
                !dataNascimento ||
                adotado === undefined ||
                !porte
            ) {
                return res
                    .status(400)
                    .json({ erro: "Todos os campos são obrigatórios" });
            }

            // Validate species
            if (!Object.values(EnumEspecie).includes(especie)) {
                return res.status(400).json({ erro: "Espécie inválida" });
            }

            if (!(porte in EnumPortePet)) {
                return res.status(400).json({ erro: "Porte inválido" });
            }

            // Validate date
            const novaDataNascimento = new Date(dataNascimento);
            if (isNaN(novaDataNascimento.getTime())) {
                return res
                    .status(400)
                    .json({ erro: "Data de nascimento inválida" });
            }

            const novoPet = new PetEntity({
                adotado,
                especie,
                porte,
                dataNascimento: novaDataNascimento,
                nome,
            });

            const pet = await this.petRepository.criaPet(novoPet);
            return res.status(201).json(pet);
        } catch (error) {
            return res.status(500).json({ erro: "Erro interno do servidor" });
        }
    }

    async listaPets(req: Request, res: Response): Promise<Response> {
        try {
            const pets = await this.petRepository.listaPet();
            return res.status(200).json(pets);
        } catch (error) {
            return res.status(500).json({ erro: "Erro interno do servidor" });
        }
    }

    async atualizaPet(req: Request, res: Response): Promise<Response> {
        try {
            const id = Number(req.params.id);
            if (isNaN(id))
                return res.status(400).json({ message: "Invalid ID" });

            const { success, message } = await this.petRepository.atualizaPet(
                id,
                req.body as PetEntity
            );
            if (!success) return res.status(404).json({ message });
            return res
                .status(204)
                .json({ message: "Pet updated successfully" });
        } catch (error) {
            return res.status(500).json({ message: "Internal server error" });
        }
    }

    async deletaPet(req: Request, res: Response): Promise<Response> {
        try {
            const id = Number(req.params.id);
            if (isNaN(id))
                return res.status(400).json({ message: "Invalid ID" });

            const { success, message } = await this.petRepository.deletaPet(id);
            if (!success) return res.status(404).json({ message });
            return res
                .status(204)
                .json({ message: "Pet deleted successfully" });
        } catch (error) {
            return res.status(500).json({ message: "Internal server error" });
        }
    }
    async adotaPet(req: Request, res: Response): Promise<Response> {
        try {
            const { pet_id, adotante_id } = req.params;

            const { success, message } = await this.petRepository.adotaPet(
                Number(pet_id),
                Number(adotante_id)
            );

            if (!success) {
                return res.status(404).json({ message });
            }
            return res.sendStatus(204);
        } catch (error) {
            return res.status(500).json({ message: "Internal server error" });
        }
    }

    async buscaPetPeloPorte(req: Request, res: Response): Promise<Response> {
        try {
            const { porte } = req.query;
            if (typeof porte !== "string" || !(porte in EnumPortePet)) {
                return res.status(400).json({ erro: "Porte inválido" });
            }
            const listaDePets = await this.petRepository.buscaPetPeloPorte(
                porte as EnumPortePet
            );

            return res.status(200).json(listaDePets);
        } catch (error) {
            return res.status(500).json({ message: "Internal server error" });
        }
    }
}
