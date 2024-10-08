import React from 'react';

const Subscribe = () => {
  return (
    <div>
      <div
        data-aos="zoom-in"
        className=" relative h-[120px] w-full bg-gradient-to-l from-secondary to-primary/90 "
      >
        <div className="container backdrop-blur-sm py-2 absolute top-1">
          <div className="space-y-3 md:max-w-[650px] mx-auto">
            <h1 className="text-2xl !text-center sm:text-left font-semibold text-white">
              Get Notified About New Products
            </h1>
            <input
              type="text"
              placeholder="Enter your email"
              className="md:w-3/4 bg-white focus:border-none focus:outline-none p-3 rounded-lg mx-auto "
            />
            <button
              data-aos="zoom-in"
              className=" bg-accent font-semibold hover:scale-105 duration-200 text-white py-2 px-4 mx-4 rounded-full"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
