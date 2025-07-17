import argon2 from "argon2";
import type { RequestHandler } from "express";
import Joi from "joi";
import jwt from "jsonwebtoken";
import userRepository from "../user/userRepository";

const loginSchema = Joi.object({
  email: Joi.string().email().required().messages({
    "string.empty": "Email is required",
    "string.email": "Email must be valid",
  }),
  password: Joi.string().required().messages({
    "string.empty": "Password is required",
  }),
});

const validateUser: RequestHandler = (req, res, next) => {
  const { error } = loginSchema.validate(req.body, { abortEarly: false });

  if (error) {
    const errors = error.details.map((detail) => detail.message);
    res.status(422).json({ errors });
    return;
  }

  next();
};

const login: RequestHandler = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await userRepository.findByEmail(email);

    if (!user) {
      res.status(404).json({ message: "No user found" });
      return;
    }

    const isPasswordValid = await argon2.verify(user.hashed_password, password);

    if (!isPasswordValid) {
      res.status(401).json({ message: "Invalid password" });
      return;
    }

    const { hashed_password: _, ...userWithoutPassword } = user;

    const payload = {
      sub: user.id.toString(),
    };

    const token = jwt.sign(payload, process.env.APP_SECRET as string, {
      expiresIn: "72h",
    });

    res.json({
      token,
      user: userWithoutPassword,
    });
  } catch (err) {
    next(err);
  }
};

const verifyToken: RequestHandler = (req, res, next) => {
  try {
    const authorizationHeader = req.get("Authorization");

    if (authorizationHeader == null) {
      throw new Error("Authorization header is missing");
    }

    const [type, token] = authorizationHeader.split(" ");

    if (type !== "Bearer") {
      throw new Error("Authorization header has not the 'Bearer' type");
    }

    req.auth = jwt.verify(token, process.env.APP_SECRET as string) as MyPayload;

    next();
  } catch (err) {
    console.error(err);
    res.sendStatus(401);
  }
};

export default { login, validateUser, verifyToken };
