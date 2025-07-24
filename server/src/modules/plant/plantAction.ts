import type { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import plantRepository from "./plantRepository";

const browse: RequestHandler = async (req, res, next) => {
  try {
    const plants = await plantRepository.findAll();

    if (!plants || plants.length === 0) {
      res.status(StatusCodes.NOT_FOUND).json({ message: "No plants found." });
      return;
    }

    res.status(StatusCodes.OK).json(plants);
  } catch (err) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "Server error while retrieving plants." });
  }
};

const update: RequestHandler = async (req, res, next) => {
  const { gardenId, plantId } = req.params;
  const { nickname } = req.body;

  try {
    const updatedPlant = await plantRepository.updateNickname(
      nickname,
      Number(gardenId),
      Number(plantId),
    );

    if (!updatedPlant) {
      res.status(StatusCodes.NOT_FOUND).json({ message: "No plant found" });
    }

    res.status(StatusCodes.OK).json(updatedPlant);
  } catch (err) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "Server error while updating nickname" });
  }
};

export default { browse, update };
