import type { RequestHandler } from "express";
import userRepository from "./userRepository";

const addNewUser: RequestHandler = async (req, res, next) => {
  try {
    const newUser = {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      username: req.body.username,
      city: req.body.city,
      email: req.body.email,
      hashed_password: req.body.hashed_password,
    };

    const insertId = await userRepository.create(newUser);

    res.status(201).json({ insertId });
    console.log(insertId);
  } catch (err) {
    next(err);
  }
};

export default { addNewUser };
