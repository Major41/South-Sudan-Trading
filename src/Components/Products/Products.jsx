import React from 'react';
import Product1 from '../../Images/Image1.jpeg';
import Product2 from '../../Images/Image2.jpg';
import Product3 from '../../Images/Image1.jpeg';
import Product4 from '../../Images/Image1.jpeg';
import Product5 from '../../Images/Image1.jpeg';
import { FaStar } from 'react-icons/fa6';
import CountUp from 'react-countup';

const formatNumber = (value) => {
  if (value >= 1000000) {
    return (value / 1000000).toFixed(1);
  } else if (value >= 1000) {
    return (value / 1000).toFixed(1);
  }
  return value;
};

const Products = () => {
  const counts = [
    { start: 0, end: 1300000, title: 'Active Traders', suffix: 'M' },
    { start: 0, end: 700000000, title: 'Market Capitalisation', suffix: 'M' },
    { start: 0, end: 30400000, title: 'Total Revenue', suffix: 'M' },
    { start: 0, end: 10, title: 'Awards Won', suffix: '+' },
    { start: 0, end: 40, title: 'Offices & Branches', suffix: '+' },
  ];

  return (
    <div className=" dark:bg-bg900 p -mt-12 py-12 bg-bglight">
      <div className="container ">
        {/* header section  */}
        <div className=" text-center pb-10 max-w-[600px] mx-auto">
          <p className=" text-primary text-sm">Interesting Numbers</p>
          <h1 className="text-3xl font-bold dark:text-white">
            <span className="text-accent">Achievements</span> of the Company
          </h1>
          <p className="text-xs text-gray-400">
            This is how we have grown as a company. This is us.
          </p>
        </div>
        {/* body section  */}
        <div>
          <div className="flex flex-col sm:flex-row align-center justify-center gap-2 ">
            {counts.map((count, index) => (
              <div
                key={index}
                className="text-center p-4 border-accent border-2 rounded-lg shadow-lg"
              >
                <p className="text-2xl font-extrabold text-black-500 dark:text-white">
                  <CountUp
                    className="dark:text-white"
                    start={count.start}
                    end={count.end}
                    duration={3} // 3 seconds duration for each count
                    formattingFn={formatNumber} // Format the numbers to show M or K
                  />
                  {count.suffix}
                </p>
                <h2 className="text-xl font-semibold text-gray-500 mb-2 dark:text-white">
                  {count.title}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* avarage rating  */}
      <div className="flex justify-center gap-4 pt-20 ">
        <div className="flex justify-center ">
          <img
            src={Product1}
            alt="image1"
            className="w-[50px] h-[50px] object-cover rounded-full "
          />
          <img
            src={Product2}
            alt="image1"
            className="w-[50px] h-[50px] object-cover rounded-full -ml-4 "
          />
          <img
            src={Product3}
            alt="image1"
            className="w-[50px] h-[50px] object-cover rounded-full -ml-4 relative"
          />
          <FaStar className="absolute ml-28  text-xl bg-white rounded-full text-accent"></FaStar>
        </div>
        <div className="dark:text-white">
          <p>
            Avarage rating of 4.<span>8</span> <span>9/5</span>
            <br></br>on Trustpilot
          </p>
        </div>
      </div>
    </div>
  );
};

export default Products;
