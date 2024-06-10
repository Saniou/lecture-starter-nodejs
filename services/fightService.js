import { fightRepository } from "../repositories/fightRepository.js";

class FightService {
  async getAllFights() {
    return await fightRepository.getAll();
  }

  async getFightById(id) {
    return await fightRepository.getOne({ id });
  }

  async createFight(data) {
    return await fightRepository.create(data);
  }
}

const fightService = new FightService();

export { fightService };
