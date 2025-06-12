import express from "express";

const router = express.Router();

import plantActions from "./modules/plant/plantActions";

router.get("/api/plant", plantActions.browse);
router.get("/api/plant/:id", plantActions.read);

export default router;
