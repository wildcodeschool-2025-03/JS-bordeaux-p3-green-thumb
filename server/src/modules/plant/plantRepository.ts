import type { ResultSetHeader } from "mysql2";
import db, { type Rows } from "../../../database/client";

class PlantRepository {
  async findAll(): Promise<Plant[]> {
    const [rows] = await db.query("SELECT * FROM plant");
    return rows as Plant[];
  }

  async updateNickname(nickname: string, gardenId: number, plantId: number) {
    const [result] = await db.query<ResultSetHeader>(
      `UPDATE plant_garden
       SET nickname = ?
      WHERE garden_id = ? AND plant_id = ?`,
      [nickname, gardenId, plantId],
    );

    const [rows] = await db.query<Rows>(
      `
    SELECT pg.*, p.name, p.description, p.toxic, p.edible, p.plant_exposition, 
           p.tip, p.main_cause_of_decay
    FROM plant_garden pg
    JOIN plant p ON p.id = pg.plant_id
    WHERE pg.garden_id = ? AND pg.plant_id = ?
    `,
      [gardenId, plantId],
    );

    return rows[0];
  }
}

export default new PlantRepository();
