import databaseClient, { type Rows } from "../../../database/client";
import type { Tutorial } from "../../types/tutorial";

class TutorialRepository {
  async findAll(): Promise<Tutorial[]> {
    const query = `
      SELECT * FROM tutorial
    `;
    const [tutorials] = await databaseClient.query<Rows>(query);
    return tutorials as Tutorial[];
  }
}

export default new TutorialRepository();
