import express from "express";

const router = express.Router();

import plantActions from "./modules/plant/plantActions";

router.get("/api/plant", plantActions.browse);

export default router;
