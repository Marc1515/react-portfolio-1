import React from 'react'
import './about.css'
import Me from '../../assets/marc.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const about = () => {
  return (
    <section id='about'>
      <h5>Ge To Know</h5>
      <h2>Ge To Know</h2>

    <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
          <img src={Me} alt="" />
          </div>
      </div>
      <div className="about__content">
      <div className="about__cards">
        <article className="about__card">
          <FaAward className='about__icon' />
          <h5>Clients</h5>
          <small>1+ Year Working</small>
        </article>
        <article className="about__card">
          <FiUsers className='about__icon' />
          <h5>Experience</h5>
          <small>200+ Worldwide</small>
        </article>
        <article className="about__card">
          <VscFolderLibrary className='about__icon' />
          <h5>Projects</h5>
          <small>80+ Completed</small>
        </article>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ducimus veniam dolores deleniti nulla numquam expedita blanditiis culpa eaque delectus neque doloremque, eos at mollitia incidunt explicabo nemo aliquid ut.</p>
      
      <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>
    </div>

    </section>
  )
}

export default about