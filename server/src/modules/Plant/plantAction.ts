import type { RequestHandler } from "express";
import plantRepository from "./plantRepository";

export const browse: RequestHandler = async (req, res, next) => {
  try {
    const plants = await plantRepository.findAll();

    if (!plants || plants.length === 0) {
      return res.status(404).json({ message: "Aucune plante trouvée." });
    }

    res.status(200).json(plants);
  } catch (err) {
    console.error("Erreur lors de la récupération des plantes :", err);
    res
      .status(500)
      .json({ message: "Erreur serveur lors de la récupération des plantes." });
  }
};
