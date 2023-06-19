import React from 'react';
import {AiTwotoneStar} from 'react-icons/ai'
import styled from "styled-components";


const Star = styled(AiTwotoneStar)`
  fill: ${({theme}) => theme.colors.gold};
`

const ProductRating = ({rating}) => {
  const productRating = (rating) => {
    let result = []
    for (let i=0; i < rating; i++){
      result.push(<Star/>)
    }
    return result;
  }


  return (
    <div>
      {
        productRating(rating)
      }
    </div>
  );
};

export default ProductRating;