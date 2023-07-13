import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Bannerimg1 from '../../assets/banner.jpg';
import Bannerimg2 from '../../assets/banner1.jpg';
import Bannerimg3 from '../../assets/banner2.jpg';
import Bannerimg4 from '../../assets/banner3.jpg';

const Bannerslider = () => {
    const settings = {
      fade: true,
      infinite: true,
      speed: 2000,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    

  return (
    <div className='banner-slider'>
    <Slider {...settings}>
      <div>
        <img src={Bannerimg1} />
      </div>
      <div>
      <img src={Bannerimg2} />
      </div>
      <div>
      <img src={Bannerimg3} />
      </div>
      <div>
      <img src={Bannerimg4} />
      </div>
    </Slider>
  </div>
  )
}

export default Bannerslider