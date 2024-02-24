import Tour from "../models/Tour.js";

export const createTour = async (req, res) => {
  const newTour = new Tour(req.body);

  try {
    const savedTour = await newTour.save();

    res
      .status(200)
      .json({
        success: true,
        message: "successfully created",
        data: savedTour,
      });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const updateTour = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);

    if (!tour)
      return res.status(500).json({ success: false, message: "not available" });

    const updateTour = await Tour.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },

      { new: true }
    );

    res
      .status(200)
      .json({
        success: true,
        message: "successfully updated",
        data: updateTour,
      });
  } catch (error) {
    res.status(500).json({ success: false, message: "failed to update" });
  }
};

export const deleteTour = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);

    if (!tour) {
      return res
        .status(404)
        .json({ success: false, message: "Tour not found" });
    }

    await Tour.findByIdAndDelete(req.params.id);

    res
      .status(200)
      .json({ success: true, message: "Successfully deleted", data: {} });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getsingleTour = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);

    if (!tour)
      return res.status(500).json({ success: false, message: "not available" });

    res
      .status(200)
      .json({ success: true, message: "successfully get tour", data: tour });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getallTours = async (req, res) => {
  try {
    const tours = await Tour.find();

    res
      .status(200)
      .json({
        success: true,
        message: "successfully get all tours",
        data: tours,
      });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
