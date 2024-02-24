import User from "../models/User.js";

export const createUser =async (req , res) => {

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
}
export const updateUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user)
      return res.status(500).json({ success: false, message: "not available" });

    const updateUser = await Tour.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },

      { new: true }
    );

    res
      .status(200)
      .json({
        success: true,
        message: "successfully updated",
        data: updateUser,
      });
  } catch (error) {
    res.status(500).json({ success: false, message: "failed to update" });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const user  = await User.findById(req.params.id);

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "Tour not found" });
    }

    await User.findByIdAndDelete(req.params.id);

    res
      .status(200)
      .json({ success: true, message: "Successfully deleted", data: {} });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getsingleUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user)
      return res.status(500).json({ success: false, message: "not available" });

    res
      .status(200)
      .json({ success: true, message: "successfully get tour", data: user });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getallUsers = async (req, res) => {
  try {

 


    const users = await User.find({});

    res
      .status(200)
      .json({
        success: true,
        message: "successfully get all tours",
        data: users,
      });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

