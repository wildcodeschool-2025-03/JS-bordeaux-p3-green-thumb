import db from "../../../database/client";

class PlantRepository {
  async findAll(): Promise<plant[]> {
    const [rows] = await db.query("SELECT * FROM plant");
    return rows as plant[];
  }
}

export default new PlantRepository();
