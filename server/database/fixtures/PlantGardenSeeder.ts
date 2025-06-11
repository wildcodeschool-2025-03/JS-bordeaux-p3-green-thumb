import AbstractSeeder from "./AbstractSeeder";

class PlantGardenSeeder extends AbstractSeeder {
  constructor() {
    super({
      table: "plant_garden",
      truncate: true,
    });
  }

  run() {
    const gardenIds = [1, 2, 3];
    const plantIds = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30,
    ];

    for (const gardenId of gardenIds) {
      const selectedPlants = this.faker.helpers.arrayElements(plantIds, 3);

      for (const plantId of selectedPlants) {
        this.insert({
          garden_id: gardenId,
          plant_id: plantId,
        });
      }
    }
  }
}

export default PlantGardenSeeder;
