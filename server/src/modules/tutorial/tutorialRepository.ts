import DatabaseClient from "../../../database/client";

export async function getAllTutorials() {
  const [rows] = await DatabaseClient.query(
    "SELECT * FROM tutorial ORDER BY id",
  );
  return rows;
}
