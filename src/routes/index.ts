import { Express } from "express";
import petRouter from "./petRouter";
import adotanteRouter from "./adotanteRouter";

const router = (app: Express) => {
  app.use("/pets", petRouter); // para essa rota use o petRouter
  app.use("/adotantes", adotanteRouter);
};
export default router;
