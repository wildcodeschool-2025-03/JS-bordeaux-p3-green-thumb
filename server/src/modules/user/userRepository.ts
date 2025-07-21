import databaseClient, {
  type Rows,
  type Result,
} from "../../../database/client";
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
    const connection = await databaseClient.getConnection();
    try {
      await connection.beginTransaction();
      const [result] = await connection.query<Result>(
        "INSERT INTO user (firstname, lastname, username, city, email, hashed_password) VALUES (?, ?, ?, ?, ?, ?)",
        [
          user.firstname,
          user.lastname,
          user.username,
          user.city,
          user.email,
          user.hashed_password,
        ],
      );
      const userId = result.insertId;
      await connection.query("INSERT INTO garden (id, user_id) VALUES (?, ?)", [
        userId,
        userId,
      ]);
      await connection.commit();
      return userId;
    } catch (err) {
      await connection.rollback();
      throw err;
    } finally {
      connection.release();
    }
  }
}

export default new userRepository();
