import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/marc.jpg'
import AVTR2 from '../../assets/marc.jpg'
import AVTR3 from '../../assets/marc.jpg'
import AVTR4 from '../../assets/marc.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Marc España',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis exercitationem rem doloremque, sapiente odio aliquid dicta delectus, rerum consequuntur temporibus et voluptatum placeat sint repudiandae, ipsam sunt dignissimos ipsum sit!'
  },
  {
    avatar: AVTR2,
    name: 'Marc España',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis exercitationem rem doloremque, sapiente odio aliquid dicta delectus, rerum consequuntur temporibus et voluptatum placeat sint repudiandae, ipsam sunt dignissimos ipsum sit!'
  },
  {
    avatar: AVTR3,
    name: 'Marc España',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis exercitationem rem doloremque, sapiente odio aliquid dicta delectus, rerum consequuntur temporibus et voluptatum placeat sint repudiandae, ipsam sunt dignissimos ipsum sit!'
  },
  {
    avatar: AVTR4,
    name: 'Marc España',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis exercitationem rem doloremque, sapiente odio aliquid dicta delectus, rerum consequuntur temporibus et voluptatum placeat sint repudiandae, ipsam sunt dignissimos ipsum sit!'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
            // install Swiper modules
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}

      >
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="Avatar One" />
                </div>
                  <h5 className='client__name'>{name}</h5>
                  <small className='client__review'>
                    {review}
                  </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials