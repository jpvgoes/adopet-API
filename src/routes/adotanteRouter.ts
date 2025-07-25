import { Router } from "express";
import AdotanteController from "../controller/AdotanteController";
import AdotanteRepository from "../repositories/AdotanteRepository";
import { AppDataSource } from "../config/dataSource";
import { AdotanteEntity } from "../entities/AdotanteEntity";

const adotanteRouter = Router();
const adotanteRepository = new AdotanteRepository(AppDataSource.getRepository(AdotanteEntity));
const adotanteController = new AdotanteController(adotanteRepository);

adotanteRouter.post("/", (req, res) => adotanteController.criaAdotante(req, res));

export default adotanteRouter;
