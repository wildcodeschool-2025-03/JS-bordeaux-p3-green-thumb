import type { RequestHandler } from "express";

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
  } catch (err) {
    next(err);
  }
};
