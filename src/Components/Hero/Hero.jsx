import React from 'react';
import Image1 from '../../Images/Image1.jpeg';
import Image2 from '../../Images/Image2.jpg';
import Image3 from '../../Images/Image4.jpg';
import Slider from 'react-slick';
import { FaLink } from 'react-icons/fa';
const ImageList = [
  {
    id: 1,
    img: Image1,
    title: 'The Safest Place To Trade',
    description:
      'Top-notch encription and compliance measures; allowing you to trade cofidently in a safe environment ',
  },
  {
    id: 1,
    img: Image2,
    title: 'Future of Trading is Here',
    description:
      'User-friendly plarform for seamless trading, combinig real-time insights with intuitiv tools to empower both new and experienced investorse',
  },
  {
    id: 1,
    img: Image3,
    title: 'Grow your portfolio by trading commodities',
    description:
      'Trade on commodity CDFs like gold, Brent Crude Oil and Natural Gas  ',
  },
];
const Hero = () => {
  let settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: 'ease-in-out',
    pauseOnHover: false,
    pauseOnFocus: true,
  };
  return (
    <>
      <div className=" overflow-hidden h-full w-full  flex justify-center items-center  dark:text-white duration-200 bg-bglight  ">
        <div className="w-full h-screen overflow-hidden">
          <Slider {...settings}>
            {ImageList.map((slide, index) => (
              <div key={index}>
                <div
                  className="slider-slide"
                  style={{ backgroundImage: `url(${slide.img})` }}
                >
                  <div className="slider-overlay">
                    <h2 className="text-4xl pb-12 font-bold">
                      SOUTH SUDAN <br></br> COMMODITY TRADING
                    </h2>

                    <button type="button" className="bg-accent p-2 rounded-lg">
                      How to Trade{' '}
                    </button>
                    <h2 className="slider-title">{slide.title}</h2>
                    <p className="slider-description">{slide.description}</p>
                    <button
                      type="button"
                      className="bg-accent p-2 rounded-lg text-center"
                    >
                      Free Demo
                      <FaLink className="ml-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Hero;
