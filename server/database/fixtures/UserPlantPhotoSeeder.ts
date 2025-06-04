import AbstractSeeder from "./AbstractSeeder";

class UserPlantPhotoSeeder extends AbstractSeeder {
  constructor() {
    super({
      table: "user_plant_photo",
      truncate: true,
    });
  }

  run() {
    for (let i = 0; i < 10; i += 1) {
      const fakeUserPlantPhoto = {
        picture: this.faker.image.urlLoremFlickr({ category: "nature" }),
      };

      this.insert(fakeUserPlantPhoto);
    }
  }
}

export default UserPlantPhotoSeeder;
