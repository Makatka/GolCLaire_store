import React from 'react';
import {Wrapper, ActionButtons, ProductImage, ProductPrice } from './ProductCard.styles'

import {BsEye} from 'react-icons/bs'
import {AiOutlineHeart} from 'react-icons/ai'
import {IoIosGitCompare} from 'react-icons/io'
import ProductRating from '../../atoms/ProductRating/ProductRating'
import ProductLabel from "../../atoms/ProductLabel/ProductLabel";


const ProductCard = ({sale, img, rating}) => {
  return (
    <Wrapper>
      <ProductImage><img src={img} alt='product'/></ProductImage>
      <ActionButtons>
        <span><AiOutlineHeart/></span>
        <div>
          <span><IoIosGitCompare/></span>
          <span><BsEye/></span>
        </div>
      </ActionButtons>
      {sale && <ProductLabel>Sale!</ProductLabel>}
      <h6>The air scoop-neck tee</h6>
      <ProductPrice>
        <p>$95.00</p>
        <ProductRating rating={rating}/>
      </ProductPrice>
    </Wrapper>
  );
};

export default ProductCard;