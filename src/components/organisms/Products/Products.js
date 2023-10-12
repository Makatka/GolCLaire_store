import React from 'react';
import ProductCard from "../../molecules/ProductCard/ProductCard";
import productImage from "../../../assets/image/products/37000208_OR_B-450x450.jpg";
import {ProductsWrapper} from "./Products.styles";


const Products = () => {
  return (
    <ProductsWrapper>
      <ProductCard img={productImage}/>
      <ProductCard sale img={productImage} rating={5}/>
      <ProductCard img={productImage}/>
      <ProductCard img={productImage}/>
      <ProductCard img={productImage} rating={4}/>
      <ProductCard sale img={productImage}/>
      <ProductCard img={productImage}/>
      <ProductCard sale img={productImage} rating={3}/>
    </ProductsWrapper>
  );
};

export default Products;