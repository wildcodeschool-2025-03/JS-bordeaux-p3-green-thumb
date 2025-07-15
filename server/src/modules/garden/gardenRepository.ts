import databaseClient, { type Rows } from "../../../database/client";
import type { Plant } from "../../types/plant";

class GardenRepository {
  async findPlant(gardenId: number, plantId: number) {
    const query = `
      SELECT p.*, DATE_FORMAT(pg.born_at, '%d.%m.%y') AS born_at
      FROM plant AS p
      JOIN plant_garden AS pg ON p.id = pg.plant_id
      WHERE pg.garden_id = ? AND pg.plant_id = ?
  `;
    const [rows] = await databaseClient.query<Rows>(query, [gardenId, plantId]);

    return rows[0] as Plant;
  }
}

export default new GardenRepository();
