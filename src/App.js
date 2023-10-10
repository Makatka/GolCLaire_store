import React from 'react';
import Navigation from "./components/organisms/Navigation/Navigation";
import TopBar from "./components/organisms/TopBar/TopBar";
import Home from "./views/Home/Home";



const App = () => {

  return (
    <div>
      <TopBar/>
      <Navigation/>
      <Home/>
    </div>
  );
};

export default App;