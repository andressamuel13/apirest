import { Router } from "express";
import {
  getEmployes,
  getEmployeId,
  createEmploye,
  deleteEmploye,
  actualizarEmpleado,
} from "../controllers/employes.controller.js";

const routers = Router();

routers.get("/employees", getEmployes);
routers.get("/employees/:id", getEmployeId);
routers.post("/employees", createEmploye);
routers.delete("/employees/:id", deleteEmploye);
routers.put("/employees/:id", actualizarEmpleado);

export default routers;
