import type { RequestHandler } from "express";
import plantGardenRepository from "./plantGardenRepository";

type PlantQuantityMap = Record<string, number>;

const addMany: RequestHandler = async (req, res) => {
  const gardenId = Number.parseInt(req.params.gardenId, 10);
  const plantMap = req.body as PlantQuantityMap;

  if (!plantMap || Object.keys(plantMap).length === 0) {
    res.status(400).json({ error: "Aucune plante fournie dans la requête." });
    return;
  }

  try {
    for (const [plantIdStr, quantity] of Object.entries(plantMap)) {
      const plantId = Number.parseInt(plantIdStr, 10);
      for (let i = 0; i < quantity; i++) {
        await plantGardenRepository.insert({
          garden_id: gardenId,
          plant_id: plantId,
        });
      }
    }

    res.status(201).json({ message: "Plantes ajoutées au jardin." });
  } catch (error) {
    console.error("Erreur lors de l'insertion :", error);
    res.status(500).json({ error: "Erreur lors de l'ajout des plantes." });
  }
};

export default { addMany };
