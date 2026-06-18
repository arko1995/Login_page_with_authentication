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
      return res.status(400).send("password not matched");
    }

    const token = jwt.sign(
      { userId: user._id.toString() },
      process.env.JWT_SECRET,
      { expiresIn: "1h" },
    );

    res
      .cookie("token", token, {
        httpOnly: true,
        secure: false,
        sameSite: "lax",
        maxAge: 60 * 60 * 1000,
      })
      .json({
        message: "login successful",
      });
  } catch (error) {
    res.status(400).send(error);
  }
};
