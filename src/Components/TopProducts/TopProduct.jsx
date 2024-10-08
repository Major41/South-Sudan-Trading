import React from 'react';
import Product1 from '../../Images/Image4.jpg';
import Product2 from '../../Images/Image4.jpg';
import Product3 from '../../Images/Image4.jpg';
import { FaStar } from 'react-icons/fa6';
import { FaCoins } from 'react-icons/fa';
import { FaRegGem } from 'react-icons/fa';
import { GiOilDrum } from 'react-icons/gi';
import { GiGasPump, GiFlame } from 'react-icons/gi';
const TopProducts = () => {
  return (
    <div className="dark:bg-bg900 py-12 bg-bglight">
      <div className=" container">
        {/* header section  */}
        <div data-aos="fade-up" className=" text-center pb-24 ">
          <p className=" text-primary text-sm">Our Commodities</p>
          <h1 className="text-3xl font-bold dark:text-white">
            {' '}
            Trade on precious metals and energies from anywhere
          </h1>
        </div>
        {/* body section  */}

        <div data-aos="fade-up">
          <div className="grid grid-cols-2 gap-4 grid-rows-2 items-center justify-center">
            <div className="bg-gray-100 p-4 rounded-lg ">
              <p className="text-center text-2xl">
                <FaCoins className="text-center" />
              </p>
              <p className="text-center font-bold text-xl">Gold</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="text-center text-2xl">
                <FaRegGem className="text-center" />
              </p>
              <p className="text-center font-bold text-xl">Silver</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="text-center text-2xl">
                <GiOilDrum className="text-center" />
              </p>
              <p className="text-center font-bold text-xl">Oil-Brent Crude</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="text-center text-2xl">
                <GiGasPump className="text-center" />
              </p>
              <p className="text-center font-bold text-xl">Natural gas</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
