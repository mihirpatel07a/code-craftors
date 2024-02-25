import Review from "../models/Review.js";
import Tour from "../models/Tour.js";


export const createReview = async (req , res)=> {
   
   
    const tourid = req.params.tourId;
    const newReview  = new Review({... req.body});

    try{
     const savedReview = await newReview.save();
  
      await Tour.findByIdAndUpdate(tourid , {
        $push : {reviews : savedReview._id}
      })
      res.status(200).json({message : "review successfully created" ,  data : savedReview , success : true});
  
      
    }
    catch(err)
    {
        res.status(401).json({message : "failed to submit" , success : false});
    }
}
