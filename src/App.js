import React from 'react';
import Footer from "./components/templates/Footer/Footer";
import styled, {ThemeProvider} from "styled-components";
import Navigation from "./components/organisms/Navigation/Navigation";
import TopBar from "./components/organisms/TopBar/TopBar";


const Main = styled.div`
  height: 120vh;
  width: 100vw;
  background-color: #ddd;

`
const App = () => {

  return (
    <div>

      <TopBar/>
      <Navigation/>
      <Main/>
      <Footer/>

    </div>
  );
};

export default App;