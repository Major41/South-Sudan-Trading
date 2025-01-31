import React, { useEffect } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Products from './Components/Products/Products';
import AOS from 'aos';
import 'aos/dist/aos.css';
import TopProducts from './Components/TopProducts/TopProduct';
import Banner from './components/Banner/Banner';
import Subscribe from './Components/Subscribe/Subscribe';
import Footer from './Components/Footer/Footer';
import Testimonials from './Components/Testimonials/Testimonials';
import Tables from './Components/Tables/Tables';

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div>
      <Navbar />
      <Hero />
      <Products />
      <TopProducts />
      <Banner />
      <Tables />
      <Subscribe />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
