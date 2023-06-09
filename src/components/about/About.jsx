import React from 'react'
import "./about.css"
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='"container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="About Me" />
          </div>
        </div>
      

        <div className="about__content">
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>Software development internships</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Companies</h5>
              <small>Japan and Australia</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>3+ Completed Academic Projects</small>
            </article>

            
          </div>

          <p>
            I recently completed a master degree of information technology and was involved in number of software development projects and internships.
            I love 3d printing as my hobby and discovering nature. 
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
