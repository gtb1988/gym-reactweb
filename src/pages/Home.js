import React from 'react'
import Hero from '../component/Hero/Hero';
import BenefitsHome from '../component/Benefits/BenefitsHome';
import Raise from '../component/Raise/Raise';
import GalleryHome from '../component/Gallery/GalleryHome';
import PriceboxHome from '../component/Pricebox/PriceboxHome';


const Home = () => {
  return (
        <>
          <Hero/>
        <div className='blackbg'>
            <BenefitsHome />
            <Raise/>
            <GalleryHome />
        </div>
            <PriceboxHome /> 
        </>

  )
}

export default Home