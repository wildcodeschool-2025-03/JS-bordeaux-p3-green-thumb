import express from "express";

const router = express.Router();

import userActions from "./modules/user/userActions";
router.post("/api/users", userActions.add);

import authActions from "../src/modules/auth/authActions";
router.post("/api/login", authActions.validateUser, authActions.login);

router.use(authActions.verifyToken);

import plantAction from "./modules/plant/plantAction";
router.get("/api/plant", plantAction.browse);
router.put("/api/garden/:gardenId/plant/:plantId/nickname", plantAction.update);

import tutorialActions from "./modules/tutorial/tutorialActions";
router.get("/api/tutorials", tutorialActions.readAll);

import gardenActions from "./modules/garden/gardenActions";
router.get("/api/garden/:gardenId/plant/:plantId", gardenActions.readPlant);
router.get("/api/garden/:id", gardenActions.readAllPlants);

import plantGardenAction from "./modules/plantGarden/plantGardenAction";
router.post("/plant_garden/:gardenId", plantGardenAction.addMany);

import plantDoctorAction from "./modules/plantDoctor/plantDoctorAction";
router.post("/api/plant/identify", plantDoctorAction.analyzePlant);

export default router;
