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

export default router;
