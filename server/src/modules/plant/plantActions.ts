import type { RequestHandler } from "express";
import plantRepository from "./plantRepository";

const browse: RequestHandler = async (req, res) => {
  const plantDB = await plantRepository.readAll();
  res.json(plantDB);
};

const read: RequestHandler = async (req, res) => {
  const plantId = Number(req.params.id);
  const selectedplant = await plantRepository.read(plantId);
  res.json(selectedplant);
};

export default { browse, read };
