import AbstractSeeder from "./AbstractSeeder";

class GardenPhotoSeeder extends AbstractSeeder {
  constructor() {
    super({
      table: "garden_photo",
      truncate: true,
    });
  }

  run() {
    const gardenIds = [1, 2, 3];
    const fakeGardenPhoto = {
      path: this.faker.image.urlLoremFlickr({ category: "nature" }),
      garden_id: this.faker.helpers.arrayElement(gardenIds),
    };
    this.insert(fakeGardenPhoto);
  }
}

export default GardenPhotoSeeder;
