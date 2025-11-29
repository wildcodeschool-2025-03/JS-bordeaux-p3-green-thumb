import db from "../../../database/client";
import databaseClient, { type Rows } from "../../../database/client";
import type { PlantWaterStatus } from "../../types/plant";

const insert = async ({ garden_id, plant_id }: PlantGardenEntry) => {
  await db.query(
    "INSERT INTO plant_garden (garden_id, plant_id) VALUES (?, ?)",
    [garden_id, plant_id],
  );
};

const findPlantsWaterStatus = async (
  userId: number,
): Promise<PlantWaterStatus[]> => {
  const query = `
    SELECT 
      pg.id AS plant_garden_id,
      p.icon,
      p.name,
      pg.nickname
    FROM plant_garden AS pg
    JOIN plant AS p ON pg.plant_id = p.id
    WHERE pg.garden_id = ?
    AND DATEDIFF(CURRENT_DATE(), pg.last_watered_at) >= p.watering;
  `;

  const [rows] = await databaseClient.query(query, [userId]);
  return rows as PlantWaterStatus[];
};

const updateLastWatered = async (plantGardenId: number) => {
  const query = `
    UPDATE plant_garden
    SET last_watered_at = CURRENT_TIMESTAMP
    WHERE id = ?
  `;
  await databaseClient.execute(query, [plantGardenId]);
};

export default { insert, findPlantsWaterStatus, updateLastWatered };
