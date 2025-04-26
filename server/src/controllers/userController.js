import { User, validate } from "../models/User.js";
import bcrypt from "bcrypt";

// Sign Up
const registerUser = async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error)
      return res.status(400).send({ message: error.details[0].message });

    const userExists = await User.findOne({ email: req.body.email });
    if (userExists)
      return res.status(409).send({ message: "Email already in use!" });

    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    const newUser = new User({ ...req.body, password: hashPassword });
    await newUser.save();

    res.status(201).send({ message: "User created successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal Server Error." });
  }
};

export  {registerUser}
