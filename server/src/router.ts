import express from "express";
import db from "../database/client";

const router = express.Router();

/* ************************************************************************* */

router.get("/plant_garden", async (req, res) => {
  try {
    const [rows] = await db.query(
      "SELECT id, name, type, image_url AS image, last_watered FROM plants WHERE is_dead = 0",
    );

    res.json(rows);
  } catch (err) {
    console.error("Error fetching plants:", err);
    res.status(500).json({ error: "Failed to fetch plants" });
  }
});

/* ************************************************************************* */

export default router;
