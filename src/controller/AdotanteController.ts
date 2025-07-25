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

      if (!nome || !senha || !celular || !foto || !endereco) {
        return res
          .status(400)
          .json({ erro: "Todos os campos são obrigatórios" });
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
