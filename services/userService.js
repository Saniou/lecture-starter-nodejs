import { userRepository } from "../repositories/userRepository.js";

class UserService {
  async getAllUsers() {
    return await userRepository.getAll();
  }

  async getUserById(id) {
    return await userRepository.getOne({ id });
  }

  async createUser(data) {
    return await userRepository.create(data);
  }

  async updateUser(id, dataToUpdate) {
    return await userRepository.update(id, dataToUpdate);
  }

  async deleteUser(id) {
    return await userRepository.delete(id);
  }

  async search(search) {
    return await userRepository.getOne(search);
  }
}

const userService = new UserService();

export { userService };
