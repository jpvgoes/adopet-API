import { Request, Response } from "express";
import { TipoPet } from "../types/TipoPet";
import { EnumRaca } from "../types/EnumRaca";

const listaDePets: TipoPet[] = [];

function geraId(): number {
  return listaDePets.length > 0
    ? Math.max(...listaDePets.map((pet) => pet.id)) + 1
    : 1;
}

export default class PetController {
  criaPet(req: Request, res: Response): Response {
    const { adotado, especie, dataNascimento, nome } = <TipoPet>req.body;
    // const novaDataNascimento = new Date(dataNascimento);

    if (!Object.values(EnumRaca).includes(especie)) {
      return res.status(400).json({ erro: "Espécie inválida" });
    }

    const novoPet: TipoPet = {
      id: geraId(),
      adotado,
      especie,
      dataNascimento,
      nome,
    };
    listaDePets.push(novoPet);
    return res.status(201).json(novoPet);
  }

  listaPets(req: Request, res: Response) {
    return res.status(200).json(listaDePets);
  }

  atualizaPet(req: Request, res: Response) {
    const { id } = req.params;
    const { adotado, especie, dataNascimento, nome } = req.body as TipoPet;
    const pet = listaDePets.find((pet) => pet.id === Number(id));
    if (!pet) {
      return res.status(404).json({ erro: "Pet não encontrado" });
    }

    pet.nome = nome;
    pet.dataNascimento = dataNascimento;
    pet.especie = especie;
    pet.adotado = adotado;
    return res.status(200).json(pet);
  }

  // código omitido

  deletaPet(req: Request, res: Response) {
    const { id } = req.params;
    const pet = listaDePets.find((pet) => pet.id === Number(id));
    if (!pet) {
      return res.status(404).json({ erro: "Pet não encontrado" });
    }
    const index = listaDePets.indexOf(pet);
    listaDePets.splice(index, 1);
    return res.status(200).json({ mensagem: "Pet deletado com sucesso" });
  }
}
