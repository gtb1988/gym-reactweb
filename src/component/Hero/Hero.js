import React from "react";
import Header from '../Header/Header'
import './Hero.css';
import Bannerslider from "../Slider/Bannerslider";


const Hero = () => {
  return (
    <>
      <div className="hero-section">
        <div className="blur"> &nbsp; </div>
          <div className="banner-s">
              <div className="banner-img">
                <Bannerslider />
                <div className="container">
                    <div className="baner-data">
                      <span>Discipline and</span>
                      <figure>Self-defense</figure>
                      <button className="button">Read More</button>
                  </div>
                </div>
              </div>
              <div className="blur blure1"> &nbsp; </div>
          </div>
      </div>
    </>
  )
}

export default Hero;