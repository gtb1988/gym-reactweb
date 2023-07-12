import React from 'react'
import './Raise.css'
import Videoimg from '../../assets/video-img.jpg'

const Raise = () => {
  return (
        <div className='container'>
            <div className='reise-section'>
                    <div className='left-r'>
                        <h2>RAISE YOUR CONFIDENCE</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum nulla eu posuere scelerisque. Donec sagittis tempor ante in aliquet.</p>
                        <button className='button'>Send Message</button>
                    </div>
                    <div className='right-r'>
                        <img src={Videoimg}/>
                    </div>
            </div>
        </div>
  )
}

export default Raise