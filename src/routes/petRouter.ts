import { Router } from "express";
import PetController from "../controller/PetController";

const router = Router();

const petController = new PetController();

router.post("/", (req, res) => {
  petController.criaPet(req, res);
});
router.get("/", (req, res) => petController.inicio(req, res));

export default router;
