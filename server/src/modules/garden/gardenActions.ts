import type { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import gardenRepository from "./gardenRepository";

const findOnePlantInGarden: RequestHandler = async (req, res) => {
  const gardenId = Number(req.params.gardenId);
  const plantId = Number(req.params.plantId);

  if (Number.isNaN(gardenId) || Number.isNaN(plantId)) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ error: "I don't think this garden exists" });
  }

  const plant = await gardenRepository.findOnePlantInGarden(gardenId, plantId);

  if (!plant) {
    res
      .status(StatusCodes.NOT_FOUND)
      .json({ error: "You haven't planted anything yet in this garden !" });
  }
  res.json(plant);
};

export default { findOnePlantInGarden };
