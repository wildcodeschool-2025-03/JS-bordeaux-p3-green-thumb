import AbstractSeeder from "./AbstractSeeder";

interface PlantGardenData {
  garden_id: number;
  plant_id: number;
  born_at: string;
  nickname: string;
  avatar: string;
}

class PlantGardenSeeder extends AbstractSeeder {
  constructor() {
    super({
      table: "plant_garden",
      truncate: true,
    });
  }

  run() {
    const gardenIds = [1, 2, 3];
    const plantIds = Array.from({ length: 30 }, (_, i) => i + 1);

    for (const gardenId of gardenIds) {
      const selectedPlants = this.faker.helpers.arrayElements(plantIds, 3);

      for (const plantId of selectedPlants) {
        const bornAt = this.faker.date.between({
          from: new Date(Date.now() - 1000 * 60 * 60 * 24 * 90),
          to: new Date(),
        });

        const nickname = this.faker.person.firstName();

        const avatar = this.faker.image.avatar();

        this.insert({
          garden_id: gardenId,
          plant_id: plantId,
          born_at: bornAt.toISOString().slice(0, 19).replace("T", " "),
          nickname,
          avatar,
        } as PlantGardenData);
      }
    }
  }
}

export default PlantGardenSeeder;
