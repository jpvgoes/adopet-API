import { Request, Response } from "express";
import { EnumEspecie } from "../types/EnumEspecie";
import PetRepository from "../repositories/PetRepository";
import { PetEntity } from "../entities/PetEntity";

// const listaDePets: TipoPet[] = [];

function geraId(): number {
  // return listaDePets.length > 0
  //   ? Math.max(...listaDePets.map((pet) => pet.id)) + 1
  //   : 1;
  return 1;
}

export default class PetController {
  constructor(private petRepository: PetRepository) {
    this.petRepository = petRepository;
  }

  async criaPet(req: Request, res: Response): Promise<Response> {
    const { adotado, especie, dataNascimento, nome } = <PetEntity>req.body;
    // const novaDataNascimento = new Date(dataNascimento);

    if (!Object.values(EnumEspecie).includes(especie)) {
      return res.status(400).json({ erro: "Espécie inválida" });
    }
    const novoPet = new PetEntity();
    novoPet.adotado = adotado;
    novoPet.id = geraId();
    novoPet.especie = especie;
    novoPet.dataNascimento = dataNascimento;
    novoPet.nome = nome;

    await this.petRepository.criaPet(novoPet);

    return res.status(201).json(novoPet);
  }

  // listaPets(req: Request, res: Response) {
  //   return res.status(200).json(listaDePets);
  // }

  // atualizaPet(req: Request, res: Response) {
  //   const { id } = req.params;
  //   const { adotado, especie, dataNascimento, nome } = req.body as TipoPet;
  //   const pet = listaDePets.find((pet) => pet.id === Number(id));
  //   if (!pet) {
  //     return res.status(404).json({ erro: "Pet não encontrado" });
  //   }

  //   pet.nome = nome;
  //   pet.dataNascimento = dataNascimento;
  //   pet.especie = especie;
  //   pet.adotado = adotado;
  //   return res.status(200).json(pet);
  // }

  // // código omitido

  // deletaPet(req: Request, res: Response) {
  //   const { id } = req.params;
  //   const pet = listaDePets.find((pet) => pet.id === Number(id));
  //   if (!pet) {
  //     return res.status(404).json({ erro: "Pet não encontrado" });
  //   }
  //   const index = listaDePets.indexOf(pet);
  //   listaDePets.splice(index, 1);
  //   return res.status(200).json({ mensagem: "Pet deletado com sucesso" });
  // }
}
