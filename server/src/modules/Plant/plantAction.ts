import type { RequestHandler } from "express";
import plantRepository from "../plant/plantRepository";

const browse: RequestHandler = async (req, res, next) => {
  try {
    const plants = await plantRepository.findAll();

    if (!plants || plants.length === 0) {
      res.status(404).json({ message: "No plants found." });
      return;
    }

    res.status(200).json(plants);
  } catch (err) {
    console.error("Error while retrieving plants:", err);
    res.status(500).json({ message: "Server error while retrieving plants." });
  }
};

export default { browse };
