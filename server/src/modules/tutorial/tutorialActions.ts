import type { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import tutorialRepository from "./tutorialRepository";

const readAll: RequestHandler = async (req, res, next) => {
  try {
    const tutorials = await tutorialRepository.findAll();
    res.status(StatusCodes.OK).json(tutorials);
  } catch (error) {
    next(error);
  }
};

export default { readAll };
