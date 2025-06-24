import DatabaseClient, { type Rows } from "../../../database/client";

export interface Tutorial {
  id: number;
  url: string;
  title: string;
  description: string;
  author: string;
  duration: number;
  category: string;
}

class TutorialRepository {
  async findAll(): Promise<Tutorial[]> {
    const query = `
      SELECT * FROM tutorial
      WHERE category IN ('gardening', 'plant')
    `;
    const [tutorials] = await DatabaseClient.query<Rows>(query);
    return tutorials as Tutorial[];
  }
}

export default new TutorialRepository();
