import React, { useContext } from 'react'
import { Card, CardBody } from 'reactstrap'
import { Link } from 'react-router-dom'
import './tour-card.css';
import calculateAvgRating from '../../../src/utils/avgRating';
import { AuthContext } from "../../context/AuthContext";
import { BASE_URL } from "../../utils/config";



const TourCard = ({tour}) => {

    const {_id, title, city, photo, price, featured, reviews} = tour

    const {totalRating, avgRating} = calculateAvgRating(reviews)

    const {user} = useContext(AuthContext);
    
    const deletetour = async() => {
       try{
             const res = await fetch(`${BASE_URL}/tours/${_id}`, {
             method : "DELETE"
             })

             if(!res.ok) 
             {
                alert(res.message);
             }

             alert("successfully deleted");
             window.location.reload();
              
             

       }
       catch(err)
       {
          console.log(err.message);
       }

    }
   

  return (
  <div className='tour__card'>
      <Card>
        <div className="tour__img">
            <img src={photo} alt='tour-img'></img>
               {featured && <span>Featured</span>} 
            
        </div>

        <CardBody>
        <div className="card__top d-flex align-items-center justify-content-between">
            <span className='tour__location d-flex align-items-center gap-1'>
            <i class="ri-map-pin-line"></i>{city}
            </span>
            <span className='tour__rating d-flex align-items-center gap-1'>
            <i class="ri-star-fill"></i>{avgRating === 0 ? null : avgRating}
            {totalRating === 0 ? (
              "Not rated"
            ) : (
              <span>({reviews.length})</span>
            )}
          
            
            </span>
        </div>
        <h5 className="tour__title"><Link to={`/tours/${_id}`}>{title}</Link></h5>
        <div className="card__bottom d-flex align-items-center justify-content-between mt-3">
            <h5>${price} <span> /per person</span></h5>


           {user && user.email !== "admin@gmail.com" && (
   <button className="btn booking__btn ">
   <Link to={`/tours/${_id}`}>Book Now</Link>
</button>
           )}
         

            {user && user.email === "admin@gmail.com" && (

              <>
   <button className="btn booking__btn" onClick={deletetour}>
              Delete
          </button>
          
              <button className="btn booking__btn" >
              <Link to={`/admin/update/${_id}`}>Update</Link>
          </button>

              </>
           
            )}
            
        </div>
      </CardBody>
      </Card>
      
    </div>
    
  );
};

export default TourCard