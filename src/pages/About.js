import React from 'react'
import './About.css'
import Innerbanner from './Innerbanner'
import Aboutimg1 from '../assets/abut-img1.jpg'
import Aboutimg2 from '../assets/abut-img2.jpg'

const About = () => {
  return (
    <>
      <Innerbanner
        innerbanner='Abour Us'
      />
      <div className='container about-section'>
        <div className='about-page'>
          <div className='row me-5 align-items-center sp-top'>
            <div className='col-sm-6  order-2  order-md-1'>
              <h2>RAISE YOUR CONFIDENCE</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacinia dapibus fringilla. Nullam libero metus, mattis nec elementum in, porta a lacus. Nunc sed sagittis massa. In hac habitasse platea dictumst. Phasellus elementum justo ipsum, a facilisis urna elementum ut. Quisque quis ex ex. Proin scelerisque hendrerit malesuada. Morbi egestas pretium dui, vitae elementum odio porttitor ac.</p>
            </div>
            <div className='col-sm-6 text-right  order-1  order-md-2'>
              <img src={Aboutimg1} className='img-fluid' alt='About Img' />
            </div>
          </div>
          <div className='row me-5 align-items-center sp-top'>
            <div className='col-sm-6 text-right  order-1  order-md-1'>
              <img src={Aboutimg2} className='img-fluid' alt='About Img' />
            </div>
            <div className='col-sm-6  order-2  order-md-2'>
              <h2>RAISE YOUR CONFIDENCE</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacinia dapibus fringilla. Nullam libero metus, mattis nec elementum in, porta a lacus. Nunc sed sagittis massa. In hac habitasse platea dictumst. Phasellus elementum justo ipsum, a facilisis urna elementum ut. Quisque quis ex ex. Proin scelerisque hendrerit malesuada. Morbi egestas pretium dui, vitae elementum odio porttitor ac.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About