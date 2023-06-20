import React from 'react';
import Navigation from "./components/organisms/Navigation/Navigation";
import TopBar from "./components/organisms/TopBar/TopBar";
import Hero from "./components/organisms/Hero/Hero";
import InfoBanner from "./components/organisms/InfoBanner/InfoBanner";
import ProductsSection from "./components/organisms/TopProductsSection/ProductsSection";



const App = () => {

  return (
    <div>
      <TopBar/>
      <Navigation/>
      <Hero/>
      <InfoBanner/>
      <ProductsSection />
    </div>
  );
};

export default App;