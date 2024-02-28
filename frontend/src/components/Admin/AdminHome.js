import React from 'react'
import '../styles/home.css'
import { Container, Row, Col } from 'reactstrap';
import heroImg from '../../assets/images/hero-img01.jpg'
import heroImg02 from '../../assets/images/hero-img02.jpg'
import heroVideo from '../../assets/images/hero-video.mp4'
import Subtitle from '../shared/Subtitle';
import worldImg from '../../assets/images/world.png';
import MasonryImagesGallery from '../Image-gallery/MasonryImagesGallery';
import experienceImg from '../../assets/images/experience.png';
import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';
import FeaturedTourList from '../../components/Featured-tours/FeaturedTourList';
import Testimonials from '../../components/Testimonial/Testimonials';
import Newsletter from '../shared/Newsletter';

export default function AdminHome() {
  return (
    <>

   
    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="hero__content">
              <div className="hero__subtitle d-flex align-items-center ">
                <Subtitle subtitle={'Know Before You Go'} />
                <img src={worldImg} alt=''></img>
              </div>
              <h1>Traveling opens the door to creating <span className='highlight'>memories</span></h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptate tempora iure nobis, perferendis dolorem doloribus ipsa, laboriosam quos ab sit consectetur quisquam, cupiditate accusamus aspernatur ut in sunt esse?</p>
            </div>
          </Col>
          <Col lg='2'>
            <div className="hero__img-box">
              <img src={heroImg} alt=''></img>
            </div>
          </Col>
          <Col lg='2'>
            <div className="hero__img-box mt-4">
              <video src={heroVideo} alt='' muted autoPlay></video>
            </div>
          </Col>
          <Col lg='2'>
            <div className="hero__img-box mt-5">
              <img src={heroImg02} alt=''></img>
            </div>
          </Col>
          <SearchBar />
        </Row>
      </Container>
    </section>

    <section>
      <Container>
        <Row>
          <Col lg='12' className='mb-5'>
            <Subtitle subtitle={'Explore'} />
            <h2 className="featured__tour-title">
              Our featured tours
            </h2>
          </Col>
          <FeaturedTourList />
        </Row>
      </Container>
    </section>
    {/*   featured tour section end       */}
    {/*   experience section start     */}

  

</>
  )
}
