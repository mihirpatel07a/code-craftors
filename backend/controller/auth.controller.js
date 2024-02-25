import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";
import bcrypt from "bcrypt";

export const register = async (req, res) => {
  var user = await User.findOne({ email: req.body.email });

  if (user) {
    return res
      .status(200)
      .json({ message: "User already exists", success: false });
  }

  const username = req.body.username;
  const email = req.body.email;
  const pass = req.body.password;
  const photo = req.body.photo;
  const role = req.body.role;

  const salt = bcryptjs.genSaltSync(10);
  const hashedPassword = bcryptjs.hashSync(pass, salt);

  const newUser = new User({ username, email, password: hashedPassword , photo , role});

  try {
    await newUser.save();

    res.status(200).json({ message: "Registration successful", success: true, data: newUser });
  } catch (error) {
    res.status(500).json({ message: error.message, success: false });
  }
};

export const login = async (req, res) => {
  try {
    const email = req.body.email;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "user not found", success: false });
    }

    const checkedpassword = await bcrypt.compare(req.body.password, user.password);

    if (!checkedpassword) {
      return res.status(401).json({ message: "incorrect password", success: false });
    }

    const { password, role, ...rest } = user._doc;

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET_KEY, { expiresIn: "15d" });

    res.cookie('accessToken', token, {
      httpOnly: true,
      expires: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000), // Set the cookie expiration time
    }).status(200).json({ message: "login successful", success: true, data: { ...rest } , token , role });
  } catch (error) {
    return res.status(500).json({ message: "failed to login", success: false });
  }
};
