import { Router } from "express";
import { fightService } from "../services/fightService.js";
import { responseMiddleware } from "../middlewares/response.middleware.js";
import { createFighterValid } from "../middlewares/fighter.validation.middleware.js";

const router = Router();

router.get("/", async (req, res, next) => {
  try {
    const fights = await fightService.getAllFights();
    res.data = fights;
  } catch (err) {
    res.err = err;
  } finally {
    next();
  }
}, responseMiddleware);

router.get("/:id", async (req, res, next) => {
  try {
    const fight = await fightService.getFightById(req.params.id);
    res.data = fight;
  } catch (err) {
    res.err = err;
  } finally {
    next();
  }
}, responseMiddleware);


router.post("/", (req, res) => {
  const { fighter1Id, fighter2Id } = req.body;

  const fighter1 = fighterRepository.getOne({ id: fighter1Id });
  const fighter2 = fighterRepository.getOne({ id: fighter2Id });

  if (!fighter1 || !fighter2) {
    return res.status(400).json({ error: true, message: "Fighters not found" });
  }

  const newFight = fightService.createFight(fighter1, fighter2);
  return res.status(200).json(newFight);
});


export { router };
