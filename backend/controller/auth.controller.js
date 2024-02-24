import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
  var user = await User.findOne({ email: req.body.email });

  if (user) {
    return res
      .status(200)
      .json({ message: "User already Exist", success: false });
  }

  const username = req.body.username;
  const email = req.body.email;
  const pass = req.body.password;

  const haspassword = bcryptjs.hashSync(pass, 10);

  const newUser = new User({ username, email, password: haspassword });

  try {
    await newUser.save();
    res.status(200).send({ message: "Registration successful", success: true });
  } catch (error) {
    console.log(error);
  }
};

export const temp = (req , res)=>{
    res.json({message : "hello world"})
}
