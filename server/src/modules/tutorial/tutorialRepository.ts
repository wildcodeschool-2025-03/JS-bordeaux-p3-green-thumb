import DatabaseClient from "../../../database/client";

export async function getAllTutorials() {
  const [rows] = await DatabaseClient.query(
    "SELECT * , ROUND(duration/60, 2) as newduration FROM tutorial ORDER BY id",
  );
  return rows;
}
