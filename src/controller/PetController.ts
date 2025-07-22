import { Request, Response } from "express";

let listaDePets = [];

export default class PetController {
  inicio(req: Request, res: Response) {
    return res.send("Bem vindo ao curso de TypeScript!");
  }
  criaPet(req: Request, res: Response) {
    const novoPet = req.body;
    listaDePets.push(novoPet);
    return res.status(201).json(novoPet);
  }
}
