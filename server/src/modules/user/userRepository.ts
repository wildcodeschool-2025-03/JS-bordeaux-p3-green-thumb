import databaseClient from "../../../database/client";
import type { Result } from "../../../database/client";
import type { User } from "../../types/user";

class userRepository {
  async create(user: User) {
    const [result] = await databaseClient.query<Result>(
      "INSERT INTO user (firstname, lastname, username, city, email, hashed_password) values (?, ?, ?, ?, ?, ?)",
      [
        user.firstname,
        user.lastname,
        user.username,
        user.city,
        user.email,
        user.hashed_password,
      ],
    );

    return result.insertId;
  }
}

export default new userRepository();
