import express from "express";
import tutorialActions from "./modules/tutorial/tutorialActions";

const router = express.Router();

router.get("/api/tutorials", tutorialActions.readAll);

export default router;
