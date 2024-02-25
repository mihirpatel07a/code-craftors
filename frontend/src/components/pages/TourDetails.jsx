import React, {useEffect, useRef, useState} from 'react'
import '../styles/tour-details.css'
import { Container, Row, Col, Form, ListGroup } from 'reactstrap'
import { useParams } from 'react-router-dom'
import tours from '../../assets/data/tours'
import calculateAvgRating from '../../utils/avgRating'
import avatar from '../../assets/images/avatar.jpg'
import Booking from '../Booking/Booking'
import useFetch from '../../hooks/useFetch'
import { BASE_URL } from '../../utils/config'
const TourDetails = () => {

 



  const {id} = useParams()
  const reviewMsgRef = useRef('')
  const [tourRating, setTourRating] = useState(null)
  const {data : tour , loading , error} = useFetch(`${BASE_URL}/tours/${id}`);

  const {photo, title, desc, price, address, reviews, city, distance, maxGroupSize} = tour

  const {totalRating, avgRating} = calculateAvgRating(reviews)

  const options = {day:'numeric', month:'long', year:'numeric'};
  
  const submitHandler = e=>{
    e.preventDefault()
    const reviewText = reviewMsgRef.current.value
    // alert(`${reviewText}, ${tourRating}`);
  }

 useEffect(()=>{
  window.scrollTo(0,0)
 }, [])
  
  return (<>
  <section>
    <Container>
    {loading && <h4 className="text-center pt-5">Loading .....</h4>}
          {error && <h4 className="text-center pt-5">{error.message}</h4>}

    
    {

      
      !loading  && !error &&   <Row>
      <Col lg='8'>
      <div className="tour__content">
        <img src={photo} alt=''></img>

        <div className="tour__info">
          <h2>{title}</h2>
          <div className='d-flex align-items-center gap-5'>
          <span className='tour__rating d-flex align-items-center gap-1'>
          <i class="ri-star-fill" style={{'color':"var(--secondary-color)"}}></i>{avgRating === 0 ? null : avgRating}
          {totalRating === 0 ? (
            "Not rated"
          ) : (
            <span>({reviews?.length})</span>
          )}
        
          
          </span>
            <span>
            <i class="ri-map-pin-user-fill"></i>{address}
            </span>

          </div>
          <div className="tour__extra-details">
            <span><i class="ri-map-pin-2-line"></i>{city}</span>
            <span><i class="ri-money-dollar-circle-line"></i>{price} / per person</span>
            <span><i class="ri-money-dollar-circle-line"></i>{distance} k/m </span>
            <span><i class="ri-group-line"></i>{maxGroupSize} people
            </span>
          </div>
          <h5>Description</h5>
          <p>{desc}</p>
        </div>
        {/*  tour reviews section        */}
        <div className="tour__reviews mt-4">
          <h4>Reviews({reviews?.length} reviews)</h4>
          <Form onSubmit={submitHandler}>
            <div className='d-flex align-items-center gap-3 mb-4 rating__group'>
              <span onClick={()=>setTourRating(1)}>
              1<i class="ri-star-s-fill"></i>
              </span>
              <span onClick={()=>setTourRating(2)}>
              2<i class="ri-star-s-fill"></i>
              </span>
              <span onClick={()=>setTourRating(3)}>
              3<i class="ri-star-s-fill"></i>
              </span>
              <span onClick={()=>setTourRating(4)}>
              4<i class="ri-star-s-fill"></i>
              </span>
              <span onClick={()=>setTourRating(5)}>
              5<i class="ri-star-s-fill"></i>
              </span>
            </div>
            <div className="review__input">
              <input type="text" ref={reviewMsgRef} placeholder='share your thoughts' required />
              <button className="btn primary__btn text-white" type='submit'>
                Submit
              </button>
            </div>
          </Form>

          <ListGroup className='user__reviews'>
            {
              reviews?.map(review => (
                <div className="review__item">
                  <img src={avatar} alt="" />
                  <div className="w-100">
                    <div className='d-flex align-items-center justify-content-between'>
                      <div>
                        <h5>kosha</h5>
                        <p>{new Date('01-18-2023').toLocaleDateString('en-US', options)}</p>
                      </div>
                      <span className='d-flex align-items-center'>
                        5<i class="ri-star-s-fill"></i>
                      </span>
                    </div>
                    <h6>Amazing tour</h6>
                  </div>
                </div>
              ))
            }
          </ListGroup>
        </div>
        {/*  tour reviews section end       */}
      </div>
      </Col>
      <Col lg='4'>
        <Booking tour={tour} avgRating={avgRating}/>
      </Col>
    </Row>
    }
    </Container>
  </section>
  </>
  )
}

export default TourDetails