import React, { useState } from 'react';
import { IoMdSearch } from 'react-icons/io';
import { FaCaretDown, FaBars } from 'react-icons/fa6'; // Import FaBars
import { MdClose } from 'react-icons/md'; // Import MdClose for close icon
import DarkMode from './DarkMode';
import logo from '../../Images/ssc-logo.png';
import { MdShowChart } from 'react-icons/md';
const Menu = [
  {
    id: 1,
    name: 'Home',
    link: '/',
  },
  {
    id: 2,
    name: 'About',
    link: '/',
  },
  {
    id: 3,
    name: 'Markets',
    link: '/',
  },
  {
    id: 4,
    name: 'Education',
    link: '/',
  },
  {
    id: 5,
    name: 'Contact',
    link: '/',
  },
];

const DropDownLinks = [
  {
    id: 1,
    name: 'Trading Oil & Gas',
    link: '/',
  },
];

const Navbar = () => {
  // State for toggling the mobile menu
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="shadow-md dark:bg-bg900 dark:text-white duration-200 relative z-40 bg-bglight ">
      {/* Upper Navbar */}
      <div className="bg-primary/40">
        <div className="container flex justify-between items-center">
          {/* logo */}
          <div>
            <a className="font-bold text-2xl sm:text-3xl" href="#">
              <img src={logo} alt="ssc logo" className="w-[100px]" />
            </a>
          </div>
          {/* search and order */}
          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                className="w-[200px] group-hover:w-[250px] transition-all duration-300 rounded-full px-3 border border-gray-500 focus:border-primary dark:border-gray-300 dark:bg-gray-800 focus:outline-none"
                type="text"
                name="text"
                id="text"
                placeholder="Search..."
              />
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>

            <button
              onClick={() => {
                alert('This service is not yet available');
              }}
              className="bg-accent transition-all duration-200 rounded-full text-white py-1 px-4 flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Commodities
              </span>
              <MdShowChart className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>
            {/* light/dark mode */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>

      {/* Lower Navbar */}
      <div className="container mx-auto">
        <div className="flex justify-between items-center h-[40px]">
          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-16">
            {Menu.map((data) => (
              <li key={data.id}>
                <a className="hover:text-primary" href={data.link}>
                  {data.name}
                </a>
              </li>
            ))}
            <li className="group relative cursor-pointer">
              <a href="#" className="flex items-center">
                Trading
                <FaCaretDown className=" hidden sm:block ml-1 transition-all duration-200 group-hover:rotate-180" />
              </a>
              <div className="absolute group-hover:block hidden bg-gray-200 dark:bg-bg900">
                <ul>
                  {DropDownLinks.map((data) => (
                    <li
                      className="py-2 w-[150px] flex flex-col items-center justify-center"
                      key={data.id}
                    >
                      <a className="hover:text-primary" href={data.link}>
                        {data.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden flex  items-center">
            <button onClick={toggleMenu} className="text-2xl">
              {isOpen ? <MdClose /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden block">
            <ul className="flex flex-col items-center space-y-4">
              {Menu.map((data) => (
                <li key={data.id}>
                  <a className="hover:text-primary" href={data.link}>
                    {data.name}
                  </a>
                </li>
              ))}
              <li className="group relative cursor-pointer">
                <a href="#" className="flex items-center justify-center">
                  Trading
                  <FaCaretDown className="ml-1 transition-all duration-200 group-hover:rotate-180 " />
                </a>
                <div className="mt-2 bg-gray-200 dark:bg-bg900">
                  <ul className="flex flex-col items-center">
                    {DropDownLinks.map((data) => (
                      <li
                        className="py-2 w-[150px] flex flex-col items-center justify-center"
                        key={data.id}
                      >
                        <a className="hover:text-primary" href={data.link}>
                          {data.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
