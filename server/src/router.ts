import express from "express";
import db from "../database/client";

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
import tutorialActions from "./modules/tutorial/tutorialActions";

router.get("/api/tutorials", tutorialActions.readAll);
import gardenActions from "./modules/garden/gardenActions";

router.get("/api/garden/:gardenId/plant/:plantId", gardenActions.readPlant);

export default router;
