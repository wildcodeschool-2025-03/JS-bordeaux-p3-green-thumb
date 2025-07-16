import type { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import gardenRepository from "./gardenRepository";

const readPlant: RequestHandler = async (req, res) => {
  const gardenId = Number(req.params.gardenId);
  const plantId = Number(req.params.plantId);

  if (Number.isNaN(gardenId) || Number.isNaN(plantId)) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ error: "I don't think this garden exists" });
  }

  const plant = await gardenRepository.findPlant(gardenId, plantId);

  if (!plant) {
    res
      .status(StatusCodes.NOT_FOUND)
      .json({ error: "You haven't planted anything yet in this garden !" });
  }
  res.json(plant);
};

const readAllPlants: RequestHandler = async (req, res) => {
  const id = Number(req.params.id);

  if (Number.isNaN(id)) {
    res.status(StatusCodes.BAD_REQUEST).json({ error: "Invalid gardenId" });
    return;
  }

  try {
    const plants = await gardenRepository.findAllPlants(id);
    res.json(plants?.length ? plants : []);
  } catch (err) {
    console.error(err);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "Internal server error" });
  }
};

export default { readPlant, readAllPlants };
