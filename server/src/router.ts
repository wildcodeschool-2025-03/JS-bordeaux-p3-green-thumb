import express from "express";

const router = express.Router();

import plantActions from "./modules/plant/plantActions";

router.get("/api/plant", plantActions.browse);
router.get("/api/plant/:id", plantActions.read);
router.patch("/api/plant/:id/icon", plantActions.updateIcon);
router.patch("/api/plant/:id/name", plantActions.updateName);

export default router;
