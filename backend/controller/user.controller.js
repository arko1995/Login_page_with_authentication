import User from "../model/user.model.js";

export const createUser = async (req, res) => {
  try {
    const { name, password, email } = req.body;

    if (!name || !password || !email) {
      return res.send("Name, Email and password is required");
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.send("Email already in use");
    }

    const newUser = await User.create({ name, passwordHash: password, email });

    res.send(newUser);
  } catch (error) {
    res.send(error.message);
  }
};
