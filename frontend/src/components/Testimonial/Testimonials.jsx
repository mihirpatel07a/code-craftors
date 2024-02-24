import React from 'react';
import './testimonials.css';
import ava01 from '../../assets/images/ava-1.jpg';
import ava02 from '../../assets/images/ava-2.jpg';
import ava03 from '../../assets/images/ava-3.jpg';

const Testimonials = () => {
    return (
        <div className="testimonials-container">
            <div className="testimonial">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, debitis exercitationem? Tempore eum recusandae assumenda minus, consequuntur iure porro rem voluptatem, aliquam reprehenderit in at placeat pariatur iusto exercitationem eveniet!</p>
                <div className='d-flex align-items-center gap-4 mt-3'>
                    <img src={ava01} className='w-25 h-25 rounded-2' alt='' />
                    <div>
                        <h6 className='mb-0 mt-3'>John Doe</h6>
                        <p>Customer</p>
                    </div>
                </div>
            </div>
            <div className="testimonial">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, debitis exercitationem? Tempore eum recusandae assumenda minus, consequuntur iure porro rem voluptatem, aliquam reprehenderit in at placeat pariatur iusto exercitationem eveniet!</p>
                <div className='d-flex align-items-center gap-4 mt-3'>
                    <img src={ava02} className='w-25 h-25 rounded-2' alt='' />
                    <div>
                        <h6 className='mb-0 mt-3'>Jane Doe</h6>
                        <p>Customer</p>
                    </div>
                </div>
            </div>
            <div className="testimonial">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, debitis exercitationem? Tempore eum recusandae assumenda minus, consequuntur iure porro rem voluptatem, aliquam reprehenderit in at placeat pariatur iusto exercitationem eveniet!</p>
                <div className='d-flex align-items-center gap-4 mt-3'>
                    <img src={ava03} className='w-25 h-25 rounded-2' alt='' />
                    <div>
                        <h6 className='mb-0 mt-3'>Alice Smith</h6>
                        <p>Customer</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
