import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7qz5rps', 'template_wcb9j7g', form.current, 'r0BAbcFPf59YVEISa')
    
    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>hidehide@gmail.com</h5>
            <a href='mailto:dummy@gmail.com' target="_blank" rel="noreferrer">Send a message</a>
          </article>

          <article className='contact__option'>
            <RiMessengerLine  className='contact__option-icon' />
            <h4>Messanger</h4>
            <h5>hidehide</h5>
            <a href='https://m.me/' target="_blank" rel="noreferrer">Send a message</a>
          </article>

          <article className='contact__option'>
            <BsWhatsapp  className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+123456789</h5>
            <a href='https://apt.whatsapp.com/send?phone+123456789' target="_blank" rel="noreferrer">Send a message</a>
          </article>
          </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows="7" placeholder='Your Message'  required ></textarea>
          <button type='submit' className='btn btn-primary'>Send a Message</button>
        </form>
        
      </div>
    </section>
  )
}

export default Contact
