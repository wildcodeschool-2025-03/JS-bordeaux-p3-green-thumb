import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";
import type { Plant } from "../../types/plant";

class PlantRepository {
  async readAll() {
    const [rows] = await databaseClient.query<Rows>("SELECT * FROM plant");
    return rows as Plant[];
  }

  async read(id: number) {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT * from plant where id = ?",
      [id],
    );
    return rows[0] as Plant;
  }
}

export default new PlantRepository();
