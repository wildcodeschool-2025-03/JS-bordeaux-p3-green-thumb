import express from "express";

const router = express.Router();

import gardenActions from "./modules/garden/gardenActions";

router.get(
  "/api/plant/garden/:gardenId/plant/:plantId",
  gardenActions.findOnePlantInGarden,
);

export default router;
