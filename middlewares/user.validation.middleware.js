import { USER } from "../models/user.js";

const createUserValid = (req, res, next) => {
  const { firstName, lastName, email, phoneNumber, password } = req.body;

  // Check presence of required fields
  if (!firstName || !lastName || !email || !phoneNumber || !password) {
    return res.status(400).json({ error: true, message: "All fields are required" });
  }

  // Check fields format
  if (
    typeof firstName !== "string" ||
    typeof lastName !== "string" ||
    typeof email !== "string" ||
    typeof phoneNumber !== "string" ||
    typeof password !== "string"
  ) {
    return res.status(400).json({ error: true, message: "Invalid field format" });
  }

  // Additional validations
  if (!email.endsWith("@gmail.com")) {
    return res.status(400).json({ error: true, message: "Email must end with @gmail.com" });
  }
  if (!phoneNumber.match(/^\+380\d{9}$/)) {
    return res.status(400).json({ error: true, message: "Invalid phone number format" });
  }
  if (password.length < 3) {
    return res.status(400).json({ error: true, message: "Password must be at least 3 characters long" });
  }

  const extraFields = Object.keys(req.body).filter(key => !(key in USER));
  if (extraFields.length > 0) {
    return res.status(400).json({ error: true, message: "Extra fields are not allowed" });
  }

  next();
};

const updateUserValid = (req, res, next) => {
  const { firstName, lastName, email, phoneNumber, password } = req.body;

  if (!firstName && !lastName && !email && !phoneNumber && !password) {
    return res.status(400).json({ error: true, message: "At least one field must be present" });
  }

  if (email && !email.endsWith("@gmail.com")) {
    return res.status(400).json({ error: true, message: "Email must end with @gmail.com" });
  }
  if (phoneNumber && !phoneNumber.match(/^\+380\d{9}$/)) {
    return res.status(400).json({ error: true, message: "Invalid phone number format" });
  }
  if (password && password.length < 3) {
    return res.status(400).json({ error: true, message: "Password must be at least 3 characters long" });
  }

  if ("id" in req.body) {
    return res.status(400).json({ error: true, message: "Id should not be present" });
  }

  const extraFields = Object.keys(req.body).filter(key => !(key in USER));
  if (extraFields.length > 0) {
    return res.status(400).json({ error: true, message: "Extra fields are not allowed" });
  }
}

export { createUserValid, updateUserValid }