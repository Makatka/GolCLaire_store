import styled from "styled-components";


export const CarouselElements = styled.ul `
  height: 100%;
  width: 600px;
  display: flex;
  align-items: center;
  


  li {
    height: 100%;
    width: 100%;
    margin: 0 5px;   
    background-position: center;
    background-size: cover;
    flex-shrink: 0;
    border-radius: 10px;
    transition: all .5s ease-in;
    transform: translateX(${({sliderNumber}) => sliderNumber}% );
  }

  
`

