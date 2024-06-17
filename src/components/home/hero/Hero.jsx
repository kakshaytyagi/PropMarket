import React from 'react';
import Heading from '../../common/Heading';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import './hero.css';

const Hero = () => {
  const slides = [
    {
      image: "images/banner1.jpg",
      title: "India's leading Agro Reality Platform",
      subtitle: "Connecting farmland buyers and sellers across the nation"
    },
    {
      image: "images/banner.jpg",
      title: "Documentat Verification",
      subtitle: "We won't let you fall into traps"
    },
    {
      image: "images/banner2.jpg",
      title: "Transforming Agriculture Real estate",
      subtitle: "We aim to transfigure the agro-reality industry with technology"
    },
    {
      image: "images/banner4.png",
      title: "Monetary Worries",
      subtitle: "Get a loan up to 75% of the Sale Agreement"
    }
  ];

  return (
    <section className='hero'>

      <AwesomeSlider
        play={true}
        organicArrows={false} 
        interval={100}
        animation="foldOutAnimation"
      >
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <div className="slide-image" style={{ backgroundImage: `url(${slide.image})` }}>
              <div className='overlay'>
                <div className='container'>
                  <Heading title={slide.title} subtitle={slide.subtitle} />
                  <form className='flex'>
                    <div className='box'>
                      <span>City/Street</span>
                      <input type='text' placeholder='Location' />
                    </div>
                    <div className='box'>
                      <span>Property Type</span>
                      <input type='text' placeholder='Property Type' />
                    </div>
                    <div className='box'>
                      <span>Price Range</span>
                      <input type='text' placeholder='Price Range' />
                    </div>
                    <div className='box'>
                      <h4>Advance Filter</h4>
                    </div>
                    <button className='btn1'>
                      <i className='fa fa-search'></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        ))}
      </AwesomeSlider>
    </section>
  );
};

export default Hero;
