import databaseClient, { type Rows } from "../../../database/client";
import type { GardenPlant, Plant } from "../../types/plant";

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

  async findAllPlants(gardenId: number): Promise<GardenPlant[]> {
    const query = `
    SELECT
      p.icon                       AS icon,
      p.name                        AS name,
      p.toxic = 1                  AS toxic,
      pg.nickname                   AS nickname,
      pg.id                        AS plant_garden_id,
      DATE_FORMAT(pg.born_at, '%d.%m.%Y') AS born_at
    FROM plant            AS p
    INNER JOIN plant_garden AS pg ON pg.plant_id = p.id
    WHERE pg.garden_id = ?
  `;

    const [rows] = await databaseClient.query<Rows>(query, [gardenId]);
    return rows as GardenPlant[];
  }
}

export default new GardenRepository();
