import db from "../../../database/client";

class PlantRepository {
  async findAll() {
    const [rows] = await db.query("SELECT * FROM plant");
    return rows;
  }
}

export default new PlantRepository();
