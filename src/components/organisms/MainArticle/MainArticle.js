import React from 'react';
import Banner from "../../molecules/Banner/Banner";
import Products from "../Products/Products";
import {Wrapper, ArticleWrapper} from "./MainArticle.styles";
import bannerImg from "../../../assets/image/1950-450-8.png";
import {ProductsWrapper} from "../Aside/Aside.styles";
import GreenAlert from "../../molecules/GreenAlert/GreenAlert"


const MainArticle = () => {
  return (
    <Wrapper>
      <ArticleWrapper>
        <Banner product="necklaces" header="latest bestsellers" bannerImg={bannerImg}/>
        <ProductsWrapper>
          <Products/>
        </ProductsWrapper>
        <GreenAlert />
      </ArticleWrapper>
    </Wrapper>
  );
};

export default MainArticle;