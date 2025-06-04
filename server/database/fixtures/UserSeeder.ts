import AbstractSeeder from "./AbstractSeeder";

class UserSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "user", truncate: true });
  }

  run() {
    for (let i = 0; i < 10; i += 1) {
      const fakeUser = {
        username: this.faker.person.firstName(),
        mail: this.faker.internet.email(),
        password: this.faker.internet.password(),
        avatar: this.faker.image.avatar(),
        city: this.faker.location.city(),
        has_pet: this.faker.datatype.boolean(),
        exposition: this.faker.location.cardinalDirection(),
        refName: `user_${i}`,
      };

      this.insert(fakeUser);
    }
  }
}

export default UserSeeder;
