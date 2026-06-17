import User from "../model/user.model.js";
import jwt from "jsonwebtoken";

export const authenticateUser = async (req, res) => {
  try {
    const { password, email } = req.body;

    if (!password || !email) {
      return res.send("password and email is required");
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.send("User not found");
    }

    const matchedPassword = await user.comparePassword(password);

    if (!matchedPassword) {
      return res.send("password not matched");
    }

    const token = jwt.sign(
      { userId: user._id.toString() },
      process.env.JWT_SECRET,
    );

    res.json({
      message: "login successful",
      token,
    });
  } catch (error) {
    res.send(error);
  }
};
