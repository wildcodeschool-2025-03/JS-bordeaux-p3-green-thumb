import type { RequestHandler } from "express";
import Joi from "joi";
import jwt from "jsonwebtoken";
import userRepository from "../user/userRepository";

const loginSchema = Joi.object({
  email: Joi.string().email().required().messages({
    "string.empty": "Email is required",
    "string.email": "Email must be valid",
  }),
  password: Joi.string()
    .min(12)
    .required()
    .custom((value, helpers) => {
      if (!/[0-9]/.test(value)) {
        return helpers.error("password.noNumber");
      }
      if (!/[!@#$%^&*]/.test(value)) {
        return helpers.error("password.noSpecial");
      }
      return value;
    })
    .messages({
      "string.empty": "Password is required",
      "string.min": "Password must be at least 12 characters long",
      "password.noNumber": "Password must contain at least one number",
      "password.noSpecial":
        "Password must contain at least one special character",
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

    const user = await userRepository.readByEmailWithPassword(email);

    if (!user) {
      res.status(401).json({ message: "No user found" });
      return;
    }
    if (user.password !== password) {
      res.status(401).json({ message: "Invalid password" });
      return;
    }

    const { password: _, ...userWithoutPassword } = user;

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
