import React from 'react';
import ftlogo from '../../Images/ssc-logo.png';
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaPhone,
} from 'react-icons/fa6';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className=" dark:bg-bg900 dark:text-white  text-text  w-full bg-bglight drop-shadow-[-10px_0_12px_rgba(0,0,0,0.5)]">
        <div className="grid grid-cols-2 place-items-center px-10 sm:px0 lg:grid-cols-3 gap-2 py-3 mx-8 ">
          {/* My details */}
          <div className="w-60">
            <img src={ftlogo} alt="logo" className="w-[150px]" />
            <p className="py-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
              enim minima hic non, unde sequi.
            </p>
          </div>
          {/* Links */}
          <div>
            <h2 className="font-semibold text-xl">Links</h2>
            <div className="flex flex-col gap-2 py-2 ">
              <p>
                <a className="hover:text-primary" href="#">
                  Home
                </a>
              </p>
              <p>
                <a className="hover:text-primary" href="#">
                  Products
                </a>
              </p>
              <p>
                <a className="hover:text-primary" href="#">
                  Markets
                </a>
              </p>
              <p>
                <a className="hover:text-primary" href="#">
                  Education
                </a>
              </p>
              <p>
                <a className="hover:text-primary" href="#">
                  Contact
                </a>
              </p>
            </div>
          </div>
          {/* My social media */}
          <div className="">
            <div className="flex gap-4 py-5">
              <a href="#">
                <FaFacebook className="text-3xl hover:scale-105 hover:text-primary" />
              </a>
              <a href="#">
                <FaInstagram className="text-3xl hover:scale-105 hover:text-primary" />
              </a>
              <a href="#">
                <FaLinkedin className="text-3xl hover:scale-105 hover:text-primary" />
              </a>
            </div>
            <div>
              <div className="flex items-center gap-3 py-3">Legal Notice</div>
              <div className="flex items-center gap-3 py-3">Privacy Policy</div>
              <div className="flex items-center gap-3 py-3">
                Terms & Conditions
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full text-center bg-gray-50 py-2 text-black font-bold text-lg">
        <p> &copy; {currentYear} All Rights Reserved. </p>
      </div>
    </>
  );
};

export default Footer;
