import { Router } from "express";
import PetController from "../controller/PetController";
import PetRepository from "../repositories/PetRepository";
import { AppDataSource } from "../config/dataSource";
import { PetEntity } from "../entities/PetEntity";

const petRouter = Router();
const petRepository = new PetRepository(AppDataSource.getRepository(PetEntity));
const petController = new PetController(petRepository);

// petRouter.get("/", (req, res) => petController.listaPets(req, res));
petRouter.post("/", async (req, res) => await petController.criaPet(req, res));
// petRouter.put("/:id", (req, res) => petController.atualizaPet(req, res));
// petRouter.delete("/:id", (req, res) => petController.deletaPet(req, res));

export default petRouter;
