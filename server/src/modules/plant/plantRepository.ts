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

  async updateIcon(id: number, icon: string) {
    const [rows] = await databaseClient.query<Rows>(
      "UPDATE plant SET icon = ? WHERE id = ?",
      [icon, id],
    );
    return rows;
  }

  async updateName(id: number, name: string) {
    const [rows] = await databaseClient.query<Rows>(
      "UPDATE plant SET name = ? WHERE id = ?",
      [name, id],
    );
    return rows;
  }
}

export default new PlantRepository();
