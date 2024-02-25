import React, { useState } from 'react'
import CommonSection from './../shared/CommonSection.jsx'

import { useLocation } from 'react-router-dom'
import {Col, Container  , Row } from 'reactstrap'
import TourCard from '../shared/TourCard'
import Newsletter from '../shared/Newsletter.jsx'
const SearchResultList = () => {
const location = useLocation();

const [data] = useState(location.state);

// console.log(data);

  return (
    <div>
      <CommonSection title={"Tour Search  Result"}></CommonSection>
      <section>
        <Container>
          <Row>
            {data.length === 0 ? ( 
              <h4>No tour Found</h4> 
            ): ( data.map(tour => (
              <Col lg="3" className='mb-4' key={tour._id}>
                <TourCard tour={tour} />
              </Col>
            )))}
          </Row>
        </Container>
      </section>
      <Newsletter/>

    </div>
  )
}

export default SearchResultList