import express from "express";
import { readAllTutorials } from "./modules/tutorial/tutorialActions";

const router = express.Router();

router.get("/tutorials", readAllTutorials);

export default router;
