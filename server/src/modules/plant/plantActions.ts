import type { RequestHandler } from "express";
import plantRepository from "./plantRepository";

const browse: RequestHandler = async (req, res) => {
  const plantDB = await plantRepository.readAll();
  res.json(plantDB);
};

export default { browse };
