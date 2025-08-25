import { Router } from "express";
import AdotanteController from "../controller/AdotanteController";
import AdotanteRepository from "../repositories/AdotanteRepository";
import { AppDataSource } from "../config/dataSource";
import { AdotanteEntity } from "../entities/AdotanteEntity";

const adotanteRouter = Router();
const adotanteRepository = new AdotanteRepository(
    AppDataSource.getRepository(AdotanteEntity)
);
const adotanteController = new AdotanteController(adotanteRepository);

adotanteRouter.post("/", (req, res) =>
    adotanteController.criaAdotante(req, res)
);

adotanteRouter.get("/", (req, res) =>
    adotanteController.listaAdotantes(req, res)
);

adotanteRouter.put("/:id", (req, res) =>
    adotanteController.atualizaAdotante(req, res)
);

adotanteRouter.delete("/:id", (req, res) =>
    adotanteController.deletaAdotante(req, res)
);

adotanteRouter.patch("/:id", (req, res) =>
    adotanteController.atualizaEnderecoAdotante(req, res)
);

export default adotanteRouter;
