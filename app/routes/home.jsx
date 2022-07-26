import React from 'react';
import AboutUs from '../old-app/components/About/AboutUs';
import Foods from '../old-app/components/Foods Showcase/Foods';
import Footer from '../old-app/components/Footer/Footer';
import Banner from '../old-app/components/Header/Banner';

const HomeScreen = () => {
  return (
    <>
      <Banner />
      <Foods />
      <AboutUs />
      <Footer />
    </>
  );
};

export default HomeScreen;
