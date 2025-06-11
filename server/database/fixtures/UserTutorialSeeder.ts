import AbstractSeeder from "./AbstractSeeder";

class UserTutorialSeeder extends AbstractSeeder {
  constructor() {
    super({
      table: "user_tutorial",
      truncate: true,
    });
  }

  run() {
    const tutoIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const userIds = [1, 2, 3];

    const fakeUserFavoriteTuto = {
      tutorial_id: this.faker.helpers.arrayElement(tutoIds),
      user_id: this.faker.helpers.arrayElement(userIds),
    };
    this.insert(fakeUserFavoriteTuto);
  }
}

export default UserTutorialSeeder;
