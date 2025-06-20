import React from 'react';
import '@/css/layouts/home-page.scss';
import LadyImage from "@/images/Group 1000001998.svg";
import Services from '@/components/Services';
import Work from '@/components/Work';
import BusinessValue from '@/components/BusinessValue';
import Review from '@/components/Review';

const Home = () => {
  return (
    <div className='home-page'>
      <div className="banner-section">
        <div className="page-width banner-content">
          <div className="banner-text">
            <h1>Creative Marketing<br />Smarter Growth</h1>
            <p>Enjoy comprehensive digital marketing solutions that work</p>
            <button className="cta-banner-button">Get Started</button>
          </div>
          <div className="banner-image">
            <img src={LadyImage.src} alt="Smiling Woman with Tablet" />
          </div>
        </div>
      </div>
      <Services />
      <Work />
      <BusinessValue />
      <Review />
    </div>
  );
};

export default Home;
