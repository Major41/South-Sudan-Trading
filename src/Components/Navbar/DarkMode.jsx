import React, { useEffect, useState } from 'react';
import { FaMoon } from 'react-icons/fa6';
import { FaSun } from 'react-icons/fa6';

const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
  );

  const element = document.documentElement;
  useEffect(() => {
    if (theme === 'dark') {
      element.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      element.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);
  return (
    <div className="relative">
      {
        <FaMoon
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          className={`text-2xl text-gray-900 cursor-pointer transition-all duration-200 absolute ring-0 z-10  p-0.45 rounded-sm ${
            theme === 'dark' ? 'opacity-0' : 'opacity-100'
          }`}
        />
      }
      {
        <FaSun
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          className={`text-2xl text-primary cursor-pointer transition-all duration-200  p-0.5 rounded-sm ${
            theme === 'light' ? 'opacity-0' : 'opacity-100'
          }`}
        />
      }
    </div>
  );
};

export default DarkMode;
