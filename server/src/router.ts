import express from "express";

const router = express.Router();

import validateLogin from "./modules/auth/validateLogin";
import authActions from "../src/modules/auth/authActions";
router.post("/api/login", validateLogin, authActions.login);

import plantAction from "./modules/Plant/plantAction";
router.get("/api/plant", plantAction.browse);

import tutorialActions from "./modules/tutorial/tutorialActions";
router.get("/api/tutorials", tutorialActions.readAll);

import gardenActions from "./modules/garden/gardenActions";
router.get("/api/garden/:gardenId/plant/:plantId", gardenActions.readPlant);

import plantGardenAction from "./modules/plantGarden/plantGardenAction";
router.post("/plant_garden/:gardenId", plantGardenAction.addMany);

export default router;
