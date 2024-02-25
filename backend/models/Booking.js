import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "Tour",
    },
    userEmail: {
      type: String,
      required: true,
    },
    tourName : {
        type : String , 
        required : true,
    },
    fullName: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    bookAt: {
        type: Date,
        required: true,
      },
      


  },
  { timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);
