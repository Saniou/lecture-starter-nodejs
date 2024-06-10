import { BaseRepository } from "./baseRepository.js";

class UserRepository extends BaseRepository {
  constructor() {
    super("users");
  }

  getByEmail(email) {
    return this.dbContext.find({ email }).value();
  }

  getByPhoneNumber(phoneNumber) {
    return this.dbContext.find({ phoneNumber }).value();
  }
}

const userRepository = new UserRepository();

export { userRepository };
