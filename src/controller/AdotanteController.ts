import { Request, Response } from "express";
import AdotanteRepository from "../repositories/AdotanteRepository";
import { AdotanteEntity } from "../entities/AdotanteEntity";

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
        return res
          .status(400)
          .json({ erro: `Os seguintes campos são obrigatórios: ${camposFaltando.join(", ")}` });
      }

      //adicionar mais validações

      const novoAdotante = new AdotanteEntity({
        nome,
        senha,
        celular,
        foto,
        endereco,
      });

      const adotante = await this.adotanteRepository.criaAdotante(novoAdotante);
      return res.status(201).json(adotante);
    } catch (error) {
      return res.status(500).json({ erro: "Erro interno do servidor" });
    }
  }
}
