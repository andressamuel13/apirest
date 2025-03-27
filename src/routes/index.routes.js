import { Router } from "express";
import { ping } from "../controllers/index.controller.js";

const routers = Router();

routers.get("/ping", ping);

export default routers;
