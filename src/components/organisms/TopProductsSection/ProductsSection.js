import React from 'react';
import {Container} from "../../templates/Container/Container";
import Banner from "../../molecules/Banner/Banner";
import ProductCart from "../../molecules/ProductCard/ProductCart";
import {ProductsWrapper, Wrapper} from './ProductsSection.styles'
import productImage from '../../../assets/image/products/37000208_OR_B-450x450.jpg'


const ProductsSectionStyles = () => {
  return (
    <Container>
      <Wrapper>
        <Banner product="nose rings" header="Nose earrings" timeLine="25 nov - 29 nov" />
        <ProductsWrapper>
          <ProductCart img={productImage}/>
          <ProductCart sale img={productImage} rating={5}/>
          <ProductCart img={productImage}/>
          <ProductCart img={productImage}/>
          <ProductCart img={productImage} rating={4}/>
          <ProductCart sale img={productImage}/>
          <ProductCart img={productImage}/>
          <ProductCart sale img={productImage} rating={3}/>
        </ProductsWrapper>
      </Wrapper>
    </Container>
  );
};

export default ProductsSectionStyles;