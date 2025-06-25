import express from "express";

const router = express.Router();

import plantAction from "./modules/Plant/plantAction";
router.get("/api/plant", plantAction.browse);

export default router;
