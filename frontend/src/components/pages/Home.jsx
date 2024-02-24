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
const Home = () => {
  return <>
    {/*     hero section start     */}
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
              <video src={heroVideo} alt='' controls></video>
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

    {/*     hero section end     */}
    <section>
      <Container>
        <Row>
          <Col lg='3'>
            <h5 className='services__subtitle'>What we serve</h5>
            <h2 className='services__title'>We offer our best services</h2>
          </Col>
          <ServiceList />
        </Row>
      </Container>
    </section>

    {/*   featured tour section start     */}

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

    <section>

      <Container>
        <Row>
          <Col lg='6'>
            <div className="experience__content">
              <Subtitle subtitle={'Experience'} />
              <h2>With our all experience <br /> we will serve you</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br />
                Quas aliquam, hic tempora inventore suscipit unde.</p>
            </div>
            <div className="counter__wrapper d-flex align-items-center gap-5">
              <div className="counter__box">
                <span>12k+</span>
                <h6>Successfull Trip</h6>
              </div>
              <div className="counter__box">
                <span>2k+</span>
                <h6>Regular clients</h6>
              </div>
              <div className="counter__box">
                <span>15</span>
                <h6>Years experience</h6>
              </div>
            </div>
          </Col>
          <Col lg='6'>
            <div className="experience__img">
              <img src={experienceImg} alt=''></img>
            </div>
          </Col>

        </Row>
      </Container>
    </section>
    {/*   experience section end       */}
    {/*   gallery section start      */}
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <Subtitle subtitle={'Gallery'} />
            <h2 className="gallery__title">Visit our customers tour gallery</h2>
          </Col>
          <Col lg='12'>
            <MasonryImagesGallery />
          </Col>
        </Row>
      </Container>
    </section>
    {/*   gallery section end     */}
    {/*   testimonial section start    */}
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <Subtitle subtitle={'Fans Love'} />
            <h2 className="testimonial__title">
              What our fans say about us
            </h2>
          </Col>
          <Col lg='12'>
            <Testimonials />
          </Col>
        </Row>
      </Container>
    </section>
    {/*   testimonial section end    */}
    <Newsletter />
  </>
}

export default Home