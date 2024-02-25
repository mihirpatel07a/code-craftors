import Booking from "../models/Booking.js"

export const createBooking = async (req , res)=> {
   
    const newBooking = new Booking(req.body);

   
    try{
     const savedBooking = await newBooking.save();

     res.status(200).json({suuccess: true , message : "your tour is booked" , data : savedBooking})
    }
    catch(error)
    {
        res.status(404).json({suuccess: false , message : "internal server error"})
  
    }
}

export const gateBooking = async (req , res)=> {
   
    const id = req.params.id;

   
    try{
     const book = await Booking.findById(id);

     res.status(200).json({suuccess: true , message : "successfull" , data : book})
    }
    catch(error)
    {
        res.status(404).json({suuccess: false , message : "not found"})
  
    }
}


export const gateallBooking = async (req , res)=> {
   
    

   
    try{
     const book = await Booking.find({});

     res.status(200).json({suuccess: true , message : "successfull" , data : book})
    }
    catch(error)
    {
        res.status(404).json({suuccess: false , message : "not found"})
  
    }
}


