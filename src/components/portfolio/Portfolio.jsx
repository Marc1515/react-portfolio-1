import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio4.png'
import IMG3 from '../../assets/portfolio5.webp'
import IMG4 from '../../assets/portfolio6.png'
import IMG5 from '../../assets/portfolio7.webp'
import IMG6 from '../../assets/portfolio8.png'


const data = [
  {
    id: 1,
    image: IMG1,
    title:'Creative Agency Responsive View',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/18603497-Vandalz-Creative-Agency-Responsive-View'
  },
  {
    id: 2,
    image: IMG2,
    title:'Virtual Space Adventure',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/18601240-Choice-Virtual-Space-Adventure'
  },
  {
    id: 3,
    image: IMG3,
    title:'Nftusovka NFT Homepage',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/18602826-Nftusovka-NFT-Homepage'
  },
  {
    id: 4,
    image: IMG4,
    title:'Payments Card for Fintech Landing Page',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/18603414-Payments-Card-for-Fintech-Landing-Page'
  },
  {
    id: 5,
    image: IMG5,
    title:'Fitness Website Design',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/18595437-Fitness-Website-Design'
  },
  {
    id: 6,
    image: IMG6,
    title:'Marketing Agency Landing Page Re-Design',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/18603413-Marketing-Agency-Landing-Page-Re-Design'
  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <section>
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>
        <div className="container portfolio__container">

          {
            data.map(({id, image, title, github, demo}) => {
              return (
                <article key={id} className="portfolio__item">
                  <div className="portfolio__item-image">
                      <img src={image} alt={title} />
                  </div>
                  <h3>{title}</h3>
                  <div className="portfolio__item-cta">
                    <a href={github} className='btn'>Github</a>
                    <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                  </div>
                </article>
              )
            })
          }

        </div>
      </section>
    </section>
  )
}

export default Portfolio