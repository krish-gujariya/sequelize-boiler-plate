import { Router } from "express";
import { home } from "../controllers/home";
export const routes = Router();

// index routes....
routes.get("/", home);

