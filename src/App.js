import React from 'react';
import Footer from "./components/templates/Footer/Footer";
import Navigation from "./components/organisms/Navigation/Navigation";
import TopBar from "./components/organisms/TopBar/TopBar";
import Hero from "./components/organisms/Hero/Hero";
import Slider from "./components/organisms/Slider/Slider";


const App = () => {

  return (
    <div>

      <TopBar/>
      <Navigation/>
      <Hero/>

    </div>
  );
};

export default App;