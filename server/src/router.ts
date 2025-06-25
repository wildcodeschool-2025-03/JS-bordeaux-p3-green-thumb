import express from "express";

const router = express.Router();

import plantAction from "./modules/Plant/plantAction";
router.get("/api/plant", plantAction.browse);

import gardenActions from "./modules/garden/gardenActions";

router.get("/api/garden/:gardenId/plant/:plantId", gardenActions.readPlant);

export default router;
