import { FIGHTER } from "../models/fighter.js";

const createFighterValid = (req, res, next) => {
  const { name, health = FIGHTER.health, power, defense } = req.body;

  if (!name || !power || !defense) {
    return res.status(400).json({ error: true, message: "All fields are required except id" });
  }

  if (typeof name !== "string" || typeof power !== "number" || typeof defense !== "number") {
    return res.status(400).json({ error: true, message: "Invalid field format" });
  }

  if (defense < 1 || defense > 10) {
    return res.status(400).json({ error: true, message: "Defense must be between 1 and 10" });
  }

  if (health && (typeof health !== "number" || health < 80 || health > 120)) {
    return res.status(400).json({ error: true, message: "Health must be between 80 and 120" });
  }

  const extraFields = Object.keys(req.body).filter(key => !(key in FIGHTER));
  if (extraFields.length > 0) {
    return res.status(400).json({ error: true, message: "Extra fields are not allowed" });
  }

  next();
};

const updateFighterValid = (req, res, next) => {
  const { name, health, power, defense } = req.body;

  if (!name && !health && !power && !defense) {
    return res.status(400).json({ error: true, message: "At least one field must be present" });
  }

  if (name && typeof name !== "string") {
    return res.status(400).json({ error: true, message: "Invalid field format" });
  }
  if (power && (typeof power !== "number" || power < 1 || power > 100)) {
    return res.status(400).json({ error: true, message: "Power must be between 1 and 100" });
  }
  if (defense && (typeof defense !== "number" || defense < 1 || defense > 10)) {
    return res.status(400).json({ error: true, message: "Defense must be between 1 and 10" });
  }
  if (health && (typeof health !== "number" || health < 80 || health > 120)) {
    return res.status(400).json({ error: true, message: "Health must be between 80 and 120" });
  }

  if ("id" in req.body) {
    return res.status(400).json({ error: true, message: "Id should not be present" });
  }

  const extraFields = Object.keys(req.body).filter(key => !(key in FIGHTER));
  if (extraFields.length > 0) {
    return res.status(400).json({ error: true, message: "Extra fields are not allowed" });
  }

  next();
};

export { createFighterValid, updateFighterValid };
