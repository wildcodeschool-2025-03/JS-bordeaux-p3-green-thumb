import type { RequestHandler } from "express";
import plantRepository from "./plantRepository";

const browse: RequestHandler = async (req, res, next) => {
  try {
    const plants = await plantRepository.findAll();

    if (!plants || plants.length === 0) {
      res.status(404).json({ message: "Aucune plante trouvée." });
      return;
    }

    res.status(200).json(plants);
  } catch (err) {
    console.error("Erreur lors de la récupération des plantes :", err);
    res
      .status(500)
      .json({ message: "Erreur serveur lors de la récupération des plantes." });
  }
};

export default { browse };
