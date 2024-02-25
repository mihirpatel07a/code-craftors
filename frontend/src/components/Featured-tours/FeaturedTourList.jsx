import React from "react";
import TourCard from "../shared/TourCard";
// import tourData from '../../assets/data/tours'
import { Col } from "reactstrap";
import { BASE_URL } from "../../utils/config";
import useFetch from "../../hooks/useFetch";

const FeaturedTourList = () => {
  const {
    data: featuredTours,
    loading,
    error,
  } = useFetch(`${BASE_URL}/tours/search/getFeaturedTours`);

  // console.log(featuredTours);
  return (
    <>
      {loading && <h4>Loading ........</h4>}

      {error && <h4>{error.message}</h4>}

      {!loading &&
        !error &&
        featuredTours?.map((tour) => (
          <Col lg="3" className="mb-4" key={tour.id}>
            <TourCard tour={tour} />
          </Col>
        ))}
    </>
  );
};

export default FeaturedTourList;
