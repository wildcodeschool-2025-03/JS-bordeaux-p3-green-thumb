import type { NextFunction, Request, RequestHandler, Response } from "express";
import multer from "multer";
import plantDoctorRepository from "./plantDoctorRepository";

const upload = multer({ storage: multer.memoryStorage() });

interface MulterRequest extends Request {
  file?: Express.Multer.File;
}

const analyzePlant: RequestHandler = async (
  req: MulterRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    if (!req.file) {
      res.status(400).json({ error: "No photo found" });
      return;
    }

    const imageBase64 = req.file.buffer.toString("base64");
    const result = await plantDoctorRepository.identifyPlant(imageBase64);

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export default {
  analyzePlant: [upload.single("image"), analyzePlant],
};
