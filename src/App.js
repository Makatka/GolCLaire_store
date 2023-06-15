import React from 'react';
import Footer from "./components/templates/Footer/Footer";
import styled, {ThemeProvider} from "styled-components";
import Navigation from "./components/organisms/Navigation/Navigation";
import TopBar from "./components/organisms/TopBar/TopBar";


const App = () => {

  return (
    <div>

      <TopBar/>
      <Navigation/>

      <Footer/>

    </div>
  );
};

export default App;