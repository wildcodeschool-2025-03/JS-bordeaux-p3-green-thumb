import databaseClient from "../../../database/client";
import type { Plant } from "../../types/plant";

class GardenRepository {
  async findOnePlantInGarden(gardenId: number, plantId: number) {
    const query = `
    SELECT p.*, DATE_FORMAT(pg.plant_born_at, '%d.%m.%y') AS plant_born_at
    FROM plant AS p
    JOIN plant_garden AS pg ON p.id = pg.plant_id
    WHERE pg.garden_id = ? AND pg.plant_id=?
  `;
    const [rows] = await databaseClient.query(query, [gardenId, plantId]);

    return (rows as Plant[])[0];
  }
}

export default new GardenRepository();
