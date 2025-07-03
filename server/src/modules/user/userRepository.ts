import databaseClient from "../../../database/client";
import type { Result } from "../../../database/client";
import type { User } from "../../types/user";

class userRepository {
  async create() {
    const [result] = await databaseClient.query<Result>(
      "INSERT INTO user (firstname, lastname, username, city, email, hashed_password) values (?, ?, ?, ?, ?, ?)",
    );
  }
}
