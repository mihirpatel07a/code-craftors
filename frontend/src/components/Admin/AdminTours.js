import React, { useState, useEffect } from "react";
import CommonSection from "../shared/CommonSection";
import "../styles/tour.css";
import { Container, Row, Col } from "reactstrap";
import SearchBar from "../shared/SearchBar";
import TourCard from "../shared/TourCard";
import Newsletter from "../shared/Newsletter";
import useFetch from "../../hooks/useFetch.js";
import { BASE_URL } from "../../utils/config";

export default function AdminTours() {

  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  const { data: tours, loading, error } = useFetch(`${BASE_URL}/tours?page=${page}`);
  const { data: tourCount } = useFetch(`${BASE_URL}/tours/search/getTourCount`);

  useEffect(() => {
    const pages = Math.ceil(tourCount / 8);
    setPageCount(pages);
  }, [page, tourCount]);

  return (
    <>
    <CommonSection title={"All Tours"} />
    <section>
      <Container>
        <Row>
          <SearchBar />
        </Row>
      </Container>
    </section>
    <section className="pt-0">
      <Container>
        {loading && <h4 className="text-center pt-5">Loading .....</h4>}
        {error && <h4 className="text-center pt-5">{error.message}</h4>}

        {!loading && !error && (
          <Row>
            {tours?.map((tour) => (
              <Col lg="3" className="mb-4" key={tour._id}>
                <TourCard tour={tour} />
              </Col>
            ))}
            <Col lg="12">
              <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                {[...Array(pageCount).keys()].map((number) => (
                  <span
                    key={number}
                    onClick={() => setPage(number)}
                    className={page === number ? "active__page" : " "}
                  >
                    {number + 1}
                  </span>
                ))}
              </div>
            </Col>
          </Row>
        )}
      </Container>
    </section>
    {/* <Newsletter /> */}
  </>
  )
}
