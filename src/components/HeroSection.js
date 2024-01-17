// HeroSection.js
import React from 'react';

const HeroSection = () => {
  return (
    <div className='container-fluid' id="hero-area">

      <div className='row'>
        <div className='col-lg-3'>
          <img src="https://ik.imagekit.io/tcfp7i31d/logo_with_yp_black_urUeyjKwY.svg" className="hero-img" />
        </div>
        <div className='col-lg-9'></div>
      </div>

      <div className='row'>
        <div className='col-lg-1'></div>
        <div className='col-lg-5'>
          <p className="content-text">
            "We are on a mission to make people's lives <br /> pain free" <br />
          </p>
        </div>
      </div>

    </div>
  );
};

export default HeroSection;
