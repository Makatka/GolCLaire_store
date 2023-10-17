import React from 'react';
import Slide from "../../molecules/Slide/Slide";
import {SliderWrapper} from './Slider.styles'


const Slider = ({slides}) => {
  return (
    <SliderWrapper>
        <Slide slides={slides}/>
    </SliderWrapper>
  );
};

export default Slider;