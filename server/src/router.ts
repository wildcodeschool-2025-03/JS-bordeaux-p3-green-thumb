import express from "express";
import db from "../database/client";

import plantAction from "./modules/Plant/plantAction";
import tutorialActions from "./modules/tutorial/tutorialActions";
import gardenActions from "./modules/garden/gardenActions";
import plantGardenAction from "./modules/plantGarden/plantGardenAction";

const router = express.Router();

/* ************************************************************************* */

router.get("/", async (req, res) => {
  try {
    const [rows] = await db.query(
      `SELECT 
        id, 
        name, 
        icon AS image 
      FROM plant`,
    );

    res.json(rows);
  } catch (err) {
    console.error("Error fetching plants:", err);
    res.status(500).json({ error: "Failed to fetch plants" });
  }
});

/* ************************************************************************* */

router.get("/api/plant", plantAction.browse);

router.get("/api/tutorials", tutorialActions.readAll);

router.get("/api/garden/:gardenId/plant/:plantId", gardenActions.readPlant);

router.post("/plant_garden/:gardenId", plantGardenAction.addMany);

export default router;
