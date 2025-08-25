import { Router } from "express";
import PetController from "../controller/PetController";
import PetRepository from "../repositories/PetRepository";
import { AppDataSource } from "../config/dataSource";
import { PetEntity } from "../entities/PetEntity";
import { AdotanteEntity } from "../entities/AdotanteEntity";

const petRouter = Router();
const petRepository = new PetRepository(
    AppDataSource.getRepository(PetEntity),
    AppDataSource.getRepository(AdotanteEntity)
);
const petController = new PetController(petRepository);

petRouter.get("/", (req, res) => petController.listaPets(req, res));
petRouter.post("/", (req, res) => petController.criaPet(req, res));
petRouter.put("/:id", (req, res) => petController.atualizaPet(req, res));
petRouter.delete("/:id", (req, res) => petController.deletaPet(req, res));
petRouter.put("/:pet_id/:adotante_id", (req, res) =>
    petController.adotaPet(req, res)
);
petRouter.get("/filtroPorte", (req, res) =>
    petController.buscaPetPeloPorte(req, res)
);

export default petRouter;
