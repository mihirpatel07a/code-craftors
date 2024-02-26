import Tour from "../models/Tour.js";

export const createTour = async (req, res) => {
  // Validate request body
  const { maxGroupSize, desc, ...rest } = req.body;

  if (!maxGroupSize || !desc) {
    return res.status(400).json({
      success: false,
      message: "maxGroupSize and desc are required fields.",
    });
  }

  const newTour = new Tour({
    maxGroupSize,
    desc, // Assuming this is the description field in your Tour model
    ...rest,
  });

  try {
    const savedTour = await newTour.save();

    res.status(201).json({
      success: true,
      message: "Successfully created",
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

    res.status(200).json({
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
    const tour = await Tour.findById(req.params.id).populate("reviews");

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
    const page = parseInt(req.query.page);

    console.log(page);

    const tours = await Tour.find({})
      .populate("reviews")
      .skip(page * 8)
      .limit(8);

    res.status(200).json({
      success: true,
      message: "successfully get all tours",
      data: tours,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getTourBySearch = async (req, res) => {
  const city = new RegExp(req.query.city);
  const distance = parseInt(req.query.distance);
  const maxGroupSize = parseInt(req.query.maxGroupSize);

  try {
    const tours = await Tour.find({
      city,
      distance: { $gte: distance },
      maxGroupSize: { $gte: maxGroupSize },
    }).populate("reviews");

    if (!tours) {
      return res.status(500).json({ success: false, message: "not exist" });
    } else {
      res.status(200).json({
        success: true,
        message: "successfully get all tours",
        data: tours,
      });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getFeaturedTour = async (req, res) => {
  try {
    const tours = await Tour.find({ featured: true })
      .populate("reviews")
      .limit(8);

    res.status(200).json({
      success: true,
      message: "successfully get all tours",
      data: tours,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getTourCount = async (req, res) => {
  try {
    const getCount = await Tour.estimatedDocumentCount();

    res.status(200).json({ success: true, data: getCount });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
