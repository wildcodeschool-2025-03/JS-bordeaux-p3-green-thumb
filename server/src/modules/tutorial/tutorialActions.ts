import type { RequestHandler } from "express";
import { getAllTutorials } from "./tutorialRepository";

export const readAllTutorials: RequestHandler = async (req, res, next) => {
  try {
    const tutorials = await getAllTutorials();
    res.status(200).json(tutorials);
  } catch (error) {
    next(error);
  }
};
