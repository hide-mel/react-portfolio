import React from 'react'
import "./testimonials.css"
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();


const data = [
  {
    avatar: AVTR1,
    name: 'Tina Fall',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero cum eum ratione in voluptatem ullam ipsam quasi? Sit corporis deserunt maiores cum, numquam omnis facilis et mollitia ipsam, sequi iusto?'
  },
  {
    avatar: AVTR2,
    name: 'Tina Summer',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero cum eum ratione in voluptatem ullam ipsam quasi? Sit corporis deserunt maiores cum, numquam omnis facilis et mollitia ipsam, sequi iusto?'
  },
  {
    avatar: AVTR3,
    name: 'Tina Winter',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero cum eum ratione in voluptatem ullam ipsam quasi? Sit corporis deserunt maiores cum, numquam omnis facilis et mollitia ipsam, sequi iusto?'
  },
  {
    avatar: AVTR4,
    name: 'Tina Spring',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero cum eum ratione in voluptatem ullam ipsam quasi? Sit corporis deserunt maiores cum, numquam omnis facilis et mollitia ipsam, sequi iusto?'
  },
];

const Testimonials = () => {

  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <div className='container testimonials__container'> 
      <swiper-container pagination="true" slides-per-view={1} space-between={40}>

        {
          data.map(({avatar,name,review},index) => {
            return (
              <swiper-slide key={index}>
                <div  className='testimonial'>
                  <div className='client__avatar'>
                    <img src={avatar} alt='Avatar 1' />
                  </div>
                  <h5 className='client__name'>{name}</h5>
                  <small className='client__review'>{review}</small>
                </div>
              </swiper-slide>
            )
          })
        }
      </swiper-container>
      </div>
    </section>
  )
}

export default Testimonials
