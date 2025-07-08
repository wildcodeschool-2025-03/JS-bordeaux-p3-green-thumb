import type { RequestHandler } from "express";
import jwt from "jsonwebtoken";

import userRepository from "../user/userRepository";

const login: RequestHandler = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await userRepository.readByEmailWithPassword(email);

    if (!user) {
      res.status(401).json({ message: "Utilisateur non trouvé" });
      return;
    }

    const { password: _, ...userWithoutPassword } = user;

    const payload = {
      sub: user.id.toString(),
    };

    const token = jwt.sign(payload, process.env.APP_SECRET as string, {
      expiresIn: "24h",
    });

    res.json({
      token,
      user: userWithoutPassword,
    });
  } catch (err) {
    next(err);
  }
};

export default { login };
