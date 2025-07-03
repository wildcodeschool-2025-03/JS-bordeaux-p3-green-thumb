import db from "../../../database/client";

class PlantRepository {
  async findAll(): Promise<Plant[]> {
    const [rows] = await db.query("SELECT * FROM plant");
    return rows as Plant[];
  }
}

export default new PlantRepository();
