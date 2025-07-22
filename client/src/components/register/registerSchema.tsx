import Joi from "joi";

const passwordRequirementsMessage =
  "Password must contain at least one number and one special character.";

const registerSchema = Joi.object({
  firstname: Joi.string().required().messages({ "string.empty": "" }),

  lastname: Joi.string().required().messages({ "string.empty": "" }),

  username: Joi.string().max(20).required().messages({
    "string.empty": "Username is required.",
    "string.max": "Username must be 20 characters or less.",
  }),

  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      "string.empty": "Email is required.",
      "string.email": "Email must be valid.",
    }),

  password: Joi.string()
    .min(12)
    .pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>]).*$/)
    .required()
    .messages({
      "string.empty": "Password is required.",
      "string.min": "Password must be at least 12 characters long.",
      "string.pattern.base": passwordRequirementsMessage,
    }),

  confirmPassword: Joi.any().equal(Joi.ref("password")).required().messages({
    "any.only": "Passwords don't match.",
    "any.required": "Confirm password is required.",
  }),
}).unknown(true);

export default registerSchema;
