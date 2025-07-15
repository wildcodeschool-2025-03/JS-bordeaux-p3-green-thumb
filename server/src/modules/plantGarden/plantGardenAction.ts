import type { RequestHandler } from "express";
import plantGardenRepository from "./plantGardenRepository";

type PlantQuantityMap = Record<string, number>;

const addMany: RequestHandler = async (req, res) => {
  const gardenId = Number(req.params.gardenId);
  const plantMap = req.body as PlantQuantityMap;

  if (!plantMap || Object.keys(plantMap).length === 0) {
    res.status(400).json({ error: "No plants provided in the request." });
    return;
  }

  try {
    for (const [plantIdStr, quantity] of Object.entries(plantMap)) {
      const plantId = Number(plantIdStr);
      for (let i = 0; i < quantity; i++) {
        await plantGardenRepository.insert({
          garden_id: gardenId,
          plant_id: plantId,
        });
      }
    }

    res
      .status(201)
      .json({ message: "Plants successfully added to the garden." });
  } catch (error) {
    console.error("Error while inserting plants:", error);
    res
      .status(500)
      .json({ error: "An error occurred while adding the plants." });
  }
};

export default { addMany };
