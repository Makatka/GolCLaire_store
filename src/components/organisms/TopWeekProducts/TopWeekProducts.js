import React from 'react';
import productImage from "../../../assets/image/products/37000208_OR_B-450x450.jpg";
import {Carousel, Wrapper} from "./TopWeekProducts.styles";
import CardHeader from "../../atoms/CardHeader/CardHeader";
import ProductCard from "../../molecules/ProductCard/ProductCard";

const TopWeekProducts = () => {
  return (
    <div>
      <Wrapper>
        <div>
          <CardHeader title="Deals of the week"/>
          <span>Dont miss out on this weeks deals</span>
        </div>
        <a>View All</a>

      </Wrapper>
      <Carousel>
        <ProductCard sale img={productImage} rating={5} status={5}/>
        <ProductCard sale img={productImage} rating={5} status={5}/>
        <ProductCard sale img={productImage} rating={5} status={5}/>
        <ProductCard sale img={productImage} rating={5} status={5}/>
      </Carousel>

    </div>

  );
};

export default TopWeekProducts;