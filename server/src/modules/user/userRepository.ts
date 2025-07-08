import databaseClient, { type Rows } from "../../../database/client";

class userRepository {
  async readByEmailWithPassword(email: string) {
    const [user] = await databaseClient.query<Rows>(
      "select * from user where email = ?",
      [email],
    );

    return user[0] as User;
  }
}

export default new userRepository();
