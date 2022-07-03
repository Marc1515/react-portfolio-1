import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi';

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        {/* START OF UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Desing</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service_list-icon'/>
              Lorem ipsum dolor sit amet consectetur.
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              Lorem ipsum dolor sit amet consectetur.
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              Lorem ipsum dolor sit amet consectetur.
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              Lorem ipsum dolor sit amet consectetur.
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              Lorem ipsum dolor sit amet consectetur.
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}

        {/* START OF WEB DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service_list-icon'/>
              Lorem ipsum dolor sit amet consectetur.
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              Lorem ipsum dolor sit amet consectetur.
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              Lorem ipsum dolor sit amet consectetur.
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              Lorem ipsum dolor sit amet consectetur.
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              Lorem ipsum dolor sit amet consectetur.
            </li>
          </ul>
        </article>
        {/* END WEB DEVELOPMENT */}
        
        {/* START OF CONTENT CREATION */}
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service_list-icon'/>
              Lorem ipsum dolor sit amet consectetur.
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              Lorem ipsum dolor sit amet consectetur.
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              Lorem ipsum dolor sit amet consectetur.
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              Lorem ipsum dolor sit amet consectetur.
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              Lorem ipsum dolor sit amet consectetur.
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}

      </div>
    </section>
  )
}

export default Services