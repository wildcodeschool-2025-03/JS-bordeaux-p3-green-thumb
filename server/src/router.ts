import express from "express";
import { browse } from "./modules/Plant/plantAction";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */
router.get("/api/plant", browse);
// Define item-related routes

/* ************************************************************************* */

export default router;
