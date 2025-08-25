import { Request, Response } from "express";
import AdotanteRepository from "../repositories/AdotanteRepository";
import { AdotanteEntity } from "../entities/AdotanteEntity";
import { EnderecoEntity } from "../entities/EnderecoEntity";

//camada que vai fazer a comunicação com o usuario
export default class AdotanteController {
    constructor(private adotanteRepository: AdotanteRepository) {
        this.adotanteRepository = adotanteRepository;
    }

    async criaAdotante(req: Request, res: Response): Promise<Response> {
        try {
            const { nome, senha, celular, foto, endereco } =
                req.body as AdotanteEntity;

            const obrigatorios = { nome, senha, celular };
            const camposFaltando = Object.entries(obrigatorios)
                .filter(([_, v]) => !v)
                .map(([k]) => k);
            if (camposFaltando.length) {
                return res.status(400).json({
                    erro: `Os seguintes campos são obrigatórios: ${camposFaltando.join(
                        ", "
                    )}`,
                });
            }

            //adicionar mais validações

            const novoAdotante = new AdotanteEntity({
                nome,
                senha,
                celular,
                foto,
                endereco,
            });

            const adotante = await this.adotanteRepository.criaAdotante(
                novoAdotante
            );
            return res.status(201).json(adotante);
        } catch (error) {
            return res.status(500).json({ erro: "Erro interno do servidor" });
        }
    }

    async listaAdotantes(req: Request, res: Response): Promise<Response> {
        try {
            const adotantes = await this.adotanteRepository.listaAdotantes();
            return res.status(200).json(adotantes);
        } catch (error) {
            return res.status(500).json({ erro: "Erro interno do servidor" });
        }
    }

    async atualizaAdotante(req: Request, res: Response): Promise<Response> {
        try {
            const id = Number(req.params.id);
            if (isNaN(id))
                return res.status(400).json({ message: "Invalid ID" });

            const { success, message } =
                await this.adotanteRepository.atualizaAdotante(
                    id,
                    req.body as AdotanteEntity
                );
            if (!success) return res.status(404).json({ message });
            return res
                .status(204)
                .json({ message: "Adotante updated successfully" });
        } catch (error) {
            return res.status(500).json({ message: "Internal server error" });
        }
    }

    async deletaAdotante(req: Request, res: Response): Promise<Response> {
        try {
            const id = Number(req.params.id);
            if (isNaN(id))
                return res.status(400).json({ message: "Invalid ID" });

            const { success, message } =
                await this.adotanteRepository.deletaAdotante(id);
            if (!success) return res.status(404).json({ message });
            return res
                .status(204)
                .json({ message: "Adotante deleted successfully" });
        } catch (error) {
            return res.status(500).json({ message: "Internal server error" });
        }
    }

    async atualizaEnderecoAdotante(
        req: Request,
        res: Response
    ): Promise<Response> {
        try {
            const id = Number(req.params.id);
            if (isNaN(id))
                return res.status(400).json({ message: "Invalid ID" });

            const { success, message } =
                await this.adotanteRepository.atualizaEnderecoAdotante(
                    id,
                    req.body as EnderecoEntity
                );
            if (!success) return res.status(404).json({ message });
            return res
                .status(204)
                .json({ message: "Adotante updated successfully" });
        } catch (error) {
            return res.status(500).json({ message: "Internal server error" });
        }
    }
}
