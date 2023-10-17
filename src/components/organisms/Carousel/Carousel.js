import React, {useEffect, useState} from 'react';
import {CarouselElements} from "./Carousel.styles";

const Carousel = ({elements}) => {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (slide === 0) {
        setSlide(-100)
      } else if (slide === -100) {
        setSlide(-200)
      }else if (slide === -200){
        setSlide(0)
      }

    }, 6000);
    return () => clearTimeout(timer);
  }, [slide]);


  const carouselElements = elements.map((element) =>
    <li style={
      {backgroundImage: `url(${element.url})`}} key={element.idx}></li>)
  return (

    <CarouselElements sliderNumber={slide}>
      {carouselElements}
    </CarouselElements>


  )
    ;
};

export default Carousel;