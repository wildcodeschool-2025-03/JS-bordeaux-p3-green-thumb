import db from "../../../database/client";

const insert = async ({ garden_id, plant_id }: PlantGardenEntry) => {
  await db.query(
    "INSERT INTO plant_garden (garden_id, plant_id) VALUES (?, ?)",
    [garden_id, plant_id],
  );
};

export default { insert };
