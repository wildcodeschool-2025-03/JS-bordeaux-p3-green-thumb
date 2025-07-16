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
    console.error("Error while retrieving plants:", err);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "Server error while retrieving plants." });
  }
};

export default { browse };
