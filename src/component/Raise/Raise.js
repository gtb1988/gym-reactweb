import React from 'react'
import './Raise.css'
import Videoimg from '../../assets/video-img.jpg'

const Raise = () => {
  return (
        <div className='container'>
            <div className='reise-section'>
                    <h2>RAISE YOUR CONFIDENCE</h2>
                    <div className='sct-divider'>
                        <div className='left-r order-2 order-lg-1'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse interdum nulla eu posuere scelerisque. Donec sagittis tempor ante in aliquet.</p>
                            <button className='button'>Send Message</button>
                        </div>
                        <div className='right-r order-1 order-lg-2'>
                            <img src={Videoimg}/>
                        </div>
                    </div>
            </div>
        </div>
  )
}

export default Raise