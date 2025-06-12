import type { RequestHandler } from "express";
import plantRepository from "./plantRepository";
import { StatusCodes } from "http-status-codes";

const browse: RequestHandler = async (req, res) => {
  const plantDB = await plantRepository.readAll();
  res.json(plantDB);
};

const read: RequestHandler = async (req, res) => {
  const plantId = Number(req.params.id);
  const selectedplant = await plantRepository.read(plantId);
  if (!selectedplant) {
    res.status(StatusCodes.NOT_FOUND).json({ error: "plant not found" });
  }
  res.json(selectedplant);
};

const updateIcon: RequestHandler = async (req, res) => {
  const plantId = Number(req.params.id);
  const { icon } = req.body;
  if (!icon) {
    res.status(StatusCodes.BAD_REQUEST).json({ error: "no icon" });
  }
  await plantRepository.updateIcon(plantId, icon);
  res.status(StatusCodes.OK).json({ message: "plant icon updated" });
};

const updateName: RequestHandler = async (req, res) => {
  const plantId = Number(req.params.id);
  const { name } = req.body;
  if (!name) {
    res.status(StatusCodes.BAD_REQUEST).json({ error: "no name" });
  }

  await plantRepository.updateName(plantId, name);
  res.status(StatusCodes.OK).json({ message: "plant name updated" });
};

export default { browse, read, updateIcon, updateName };
