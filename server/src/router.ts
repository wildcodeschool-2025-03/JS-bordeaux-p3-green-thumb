import express from "express";
import tutorialActions from "./modules/tutorial/tutorialActions";

const router = express.Router();

router.get("/api/tutorials", tutorialActions.readAll);
import gardenActions from "./modules/garden/gardenActions";

router.get("/api/garden/:gardenId/plant/:plantId", gardenActions.readPlant);

export default router;
