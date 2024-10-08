import React from 'react';
import Bannerimg from '../../Images/why-bg.jpg';
import { FaUser } from 'react-icons/fa';
import { IoFastFood } from 'react-icons/io5';
import { GiFoodTruck } from 'react-icons/gi';

const Banner = () => {
  return (
    <div className=" md:relative bg-black flex justify-center items-center py-12 sm:py-0 dark:bg-bg900 text-gray-300 ">
      {/* background image */}
      <img
        src={Bannerimg}
        alt="background image"
        className=" hidden md:block  w-full h-full opacity-20 bg-black"
      />
      <div className="md:absolute top-8">
        {/* Topic */}
        <div
          data-aos="fade-up"
          className="mb-10 max-w-[600px] mx-auto text-center"
        >
          <p className=" text-gray-300 text-sm">
            Why South Sudan Commodities Trading
          </p>
          <h1 className="text-4xl font-bold dark:text-white">
            {' '}
            Our
            <span className="text-accent"> Strengths</span>{' '}
          </h1>
        </div>

        {/* body */}

        <div className="container flex flex-col md:flex-row gap-9">
          <div className="flex flex-col gap-10 ">
            <div className="flex flex-col w-[420px] hover:border-2 hover:border-accent p-3 rounded-md">
              <span>
                <FaUser className="text-3xl bg-accent p-1 rounded-lg"></FaUser>
              </span>
              <div className="">
                <h2 className="text-3xl font-semibold">
                  Expert Team{' '}
                  <span className="text-xl mt-6 text-accent font-bold">01</span>
                </h2>
                <p>
                  A dedicated and experienced team of geologists and exploration
                  specialists with a proven track record of success in the
                  industry.
                </p>
              </div>
            </div>
            <div className="flex flex-col w-[420px] hover:border-2 hover:border-accent p-3 rounded-md">
              <span>
                <FaUser className="text-3xl bg-accent p-1 rounded-lg"></FaUser>
              </span>
              <div>
                <h2 className="text-3xl font-semibold">
                  Ethical Exploration Practices
                  <span className="text-xl mt-6 text-accent font-bold">
                    {' '}
                    02
                  </span>
                </h2>
                <p>
                  A commitment to ethical and responsible exploration practices,
                  including close collaboration with local communities and
                  stakeholders to ensure that our operations are sustainable and
                  beneficial to all.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex flex-col w-[420px] hover:border-2 hover:border-accent p-3 rounded-md">
              <span>
                <FaUser className="text-3xl bg-accent p-1 rounded-lg"></FaUser>
              </span>
              <div>
                <h2 className="text-3xl font-semibold">
                  24/7 Support
                  <span className="text-xl mt-6 text-accent font-bold">
                    {' '}
                    03
                  </span>
                </h2>
                <p>
                  We understand that the mineral exploration and trading
                  landscape can be complex and fast-paced. That’s why we offer
                  round-the-clock support to our partners and stakeholders.
                </p>
              </div>
            </div>
            <div className="flex flex-col w-[420px] hover:border-2 hover:border-accent p-3 rounded-md">
              <span>
                <FaUser className="text-3xl bg-accent p-1 rounded-lg"></FaUser>
              </span>
              <div>
                <h2 className="text-3xl font-semibold">
                  Zero-Carbon Future{' '}
                  <span className="text-xl mt-6 text-accent font-bold">
                    {' '}
                    04
                  </span>
                </h2>
                <p>
                  A focus on metals essential for the transition to a
                  zero-carbon future, including gold, copper, nickel, lithium,
                  and cobalt. These metals are vital for the production of clean
                  energy technologies, such as electric vehicles and renewable
                  energy systems
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
