import argon2 from "argon2";
import type { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import userRepository from "./userRepository";

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 19 * 2 ** 10,
  timeCost: 2,
  parallelism: 1,
};

const add: RequestHandler = async (req, res, next) => {
  try {
    const { password, firstname, lastname, username, city, email } = req.body;

    if (!password) {
      res.status(StatusCodes.BAD_REQUEST).json({ error: "password invalid" });
      return;
    }

    const hashed_password = await argon2.hash(password, hashingOptions);

    const newUser = {
      firstname,
      lastname,
      username,
      city,
      email,
      hashed_password,
    };

    const insertId = await userRepository.create(newUser);

    res.status(StatusCodes.CREATED).json({ insertId });
  } catch (err) {
    next(err);
  }
};

export default { add };
