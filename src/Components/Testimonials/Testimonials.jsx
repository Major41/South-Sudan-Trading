import React from 'react';
import Slider from 'react-slick';
import Person1 from '../../Images/Image1.jpeg';
import Person2 from '../../Images/Image1.jpeg';
import Person3 from '../../Images/Image1.jpeg';
import Person4 from '../../Images/Image1.jpeg';
import Person5 from '../../Images/Image1.jpeg';
import partner from '../../Images/partner-img.jpg';
const TestimonialData = [
  {
    id: 1,
    name: 'Kelvin',
    text: 'South Sudan Commodities are the best, you should try. They are...',
    img: Person1,
  },
  {
    id: 2,
    name: 'Ruth',
    text: 'High-quality, good prices and nice service offered by the team, proud to be part of...',
    img: Person2,
  },
  {
    id: 3,
    name: 'Victor',
    text: "Don't fear trying out South Sudan Commodity, it is the best.",
    img: Person3,
  },
  {
    id: 4,
    name: 'Mercy',
    text: "Just give it a try. You won't regret.",
    img: Person4,
  },
  {
    id: 5,
    name: 'Leon',
    text: 'Happy to be part of you South Sudan Commodity Traders',
    img: Person5,
  },
];

const Testimonials = () => {
  let settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    pauseOnFocus: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="py-10 dark:bg-bg900 bg-bglight">
      <div className=" container">
        {/* header section  */}
        <div
          data-aos="fade-up"
          className=" text-center mb-10 max-w-[600px] mx-auto"
        >
          <p className=" text-primary text-sm">Hear from our clients</p>
          <h1 className="text-3xl font-bold dark:text-white">Testimonials</h1>
          <p className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure,
            perspiciatis.
          </p>
        </div>
        {/* body section  */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div key={data.id} className="my-6">
                <div
                  key={data.id}
                  className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative"
                >
                  <div>
                    <img src={data.img} className="rounded-full h-20 w-20" />
                  </div>
                  <div className="flex flex-col  gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-700"> {data.text} </p>
                      <h1 className="text-xl font-bold text-black/80 dark:text-white">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-blac/20 text-9xl font-serif absolute top-0 right-0 dark:text-white">
                    "
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* partner section */}
      <div className="container mt-10 mb-10">
        <div className=" text-center mb-10 max-w-[600px] mx-auto">
          <p className=" text-primary text-sm">Our Partners</p>
          <h1 className="text-3xl font-bold dark:text-white">
            Partners Around The World
          </h1>
        </div>
        <div className="flex flex-col md:flex-row gap-7 items-center justify-center">
          <img src={partner} alt="partner logo" className="max-w-[300px]" />
          <img src={partner} alt="partner logo" className="max-w-[300px]" />
          <img src={partner} alt="partner logo" className="max-w-[300px]" />
        </div>
        <div className=" text-center mt-12">
          <h2 className="-8 text-2xl font-bold dark:text-white">
            Partner With Us Today
          </h2>
          <p className="text-xl dark:text-gray-100">
            By partnering with South Sudan Commodities Trading, companies and
            investors can explore a wealth of opportunities in the rapidly
            growing field of zero-carbon metals while supporting the transition
            to a sustainable future. We invite you to learn more about our
            operations and to contact us to discuss potential collaboration
            opportunities.
          </p>
          <button
            type="button"
            className="mt-10 mb-10 bg-primary p-4 text-gray-100 font-bold rounded-lg"
          >
            Join Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
