import React from 'react';
import Header from './Header';
import Footer from './footer';
import CustomSwiper from './Productswiper';
import ProductSelection from './ProductSelection';
import HeroSectionVideo from './VideoSection';

import '../styles/site.css';


const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="w-full">
        {/* Seção 1: Custom Collection */}
        <section className="w-full py-10">
          <div className="max-w-[1200px] mx-auto">
            <ProductSelection />
          </div>
        </section>
        <HeroSectionVideo/>
        
        {/* Seção 2: Swiper abaixo */}
        <section className="w-full">
          <CustomSwiper />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;