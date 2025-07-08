import express from "express";

const router = express.Router();

import plantAction from "./modules/plant/plantAction";
router.get("/api/plant", plantAction.browse);

import tutorialActions from "./modules/tutorial/tutorialActions";
router.get("/api/tutorials", tutorialActions.readAll);

import gardenActions from "./modules/garden/gardenActions";
router.get("/api/garden/:gardenId/plant/:plantId", gardenActions.readPlant);

import plantGardenAction from "./modules/plantGarden/plantGardenAction";
router.post("/plant_garden/:gardenId", plantGardenAction.addMany);

export default router;
