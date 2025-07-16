import databaseClient, { type Rows } from "../../../database/client";
import type { Result } from "../../../database/client";
import type { User } from "../../types/user";

class userRepository {
  async findByEmail(email: string): Promise<User | undefined> {
    const [user] = await databaseClient.query<Rows>(
      "SELECT id, email, hashed_password FROM user WHERE email = ?",
      [email],
    );

    if (user.length === 0) return undefined;

    return user[0] as User;
  }

  async create(user: Omit<User, "id">) {
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
