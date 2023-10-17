import React, {useState} from 'react';
import {GrPrevious, GrNext} from 'react-icons/gr';
import {SlideWrapper, SlideHeader, SlideText} from './Slide.styles'
import {Button} from "../../atoms/Button/Button";



const Slide = ({slides}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length -1 : currentIndex -1;
    setCurrentIndex(newIndex);
  }
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length -1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  return (
    <SlideWrapper style={{ backgroundImage: `url(${slides[currentIndex].imgUrl})`}}>
        <span onClick={goToPrevious}><GrPrevious/></span>
        <span onClick={goToNext}><GrNext/></span>
      <SlideText>
        <SlideHeader>{slides[currentIndex].slideHeader}</SlideHeader>
        <p>{slides[currentIndex].slideText}</p>
        <div>
          <Button>{slides[currentIndex].darkBtn}</Button>
          <Button isTransparent >{slides[currentIndex].lightBtn}</Button>
        </div>
      </SlideText>
    </SlideWrapper>
  );
};

export default Slide;