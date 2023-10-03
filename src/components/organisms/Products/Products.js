import React from 'react';
import ProductCart from "../../molecules/ProductCard/ProductCart";
import productImage from "../../../assets/image/products/37000208_OR_B-450x450.jpg";
import {ProductsWrapper} from "./ProductsGrid.styles";


const ProductsGrid = () => {
  return (
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
  );
};

export default ProductsGrid;