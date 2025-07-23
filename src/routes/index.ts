import { Router } from "express";
import petRouter from "./petRouter";

const router = (app: Router) => {
  app.use("/pets", petRouter); // para essa rota use o petRouter
};
export default router;
