import type { RequestHandler } from "express";
import tutorialRepository from "./tutorialRepository";

const readAll: RequestHandler = async (req, res, next) => {
  try {
    const tutorials = await tutorialRepository.findAll();
    res.status(200).json(tutorials);
  } catch (error) {
    next(error);
  }
};

export default { readAll };
