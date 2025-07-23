import { Router } from "express";
import PetController from "../controller/PetController";

const petRouter = Router();

const petController = new PetController();

petRouter.get("/", (req, res) => petController.listaPets(req, res));
petRouter.post("/", (req, res) => petController.criaPet(req, res));
petRouter.put("/:id", (req, res) => petController.atualizaPet(req, res));
petRouter.delete("/:id", (req, res) => petController.deletaPet(req, res));

export default petRouter;
