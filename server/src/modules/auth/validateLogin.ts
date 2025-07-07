import type { RequestHandler } from "express";
import Joi from "joi";

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

const validateLogin: RequestHandler = (req, res, next) => {
  const { error } = loginSchema.validate(req.body, { abortEarly: false });

  if (error) {
    const errors = error.details.map((detail) => detail.message);
    res.status(422).json({ errors });
    return;
  }

  next();
};

export default validateLogin;
