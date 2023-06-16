import React from 'react';
import {GrPrevious, GrNext} from 'react-icons/gr';
import {SlideWrapper, SlideHeader, SlideText} from './Slide.styles'
import {Button} from "../../atoms/Button/Button";


const Slide = () => {
  return (
    <SlideWrapper>
        <span><GrPrevious/></span>
        <span><GrNext/></span>
      <SlideText>
        <SlideHeader>Meet the lines of the Millennium</SlideHeader>
        <p>Fashion is to please your eye. Shapes and proportions are for your intellect. I have an obsession with details and pattern.</p>
        <div>
          <Button>Check Collection</Button>
          <Button isTransparent >Shop Now</Button>
        </div>
      </SlideText>
    </SlideWrapper>
  );
};

export default Slide;