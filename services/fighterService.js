import { fighterRepository } from "../repositories/fighterRepository.js";

class FighterService {
  async getAllFighters() {
    return await fighterRepository.getAll();
  }

  async getFighterById(id) {
    return await fighterRepository.getOne({ id });
  }

  async createFighter(data) {
    return await fighterRepository.create(data);
  }

  async updateFighter(id, dataToUpdate) {
    return await fighterRepository.update(id, dataToUpdate);
  }

  async deleteFighter(id) {
    return await fighterRepository.delete(id);
  }
}

const fighterService = new FighterService();

export { fighterService };
