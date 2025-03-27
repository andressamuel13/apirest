import { Router } from "express";
import {
  getEmployes,
  createEmploye,
} from "../controllers/employes.controller.js";

const routers = Router();

routers.get("/employees", getEmployes);
routers.post("/employees", createEmploye);

export default routers;
