import React from 'react';
import Banner from "../../molecules/Banner/Banner";
import Products from "../Products/Products";
import {Wrapper, ArticleWrapper, ContainerSlides, CarouselWrapper} from "./MainArticle.styles";
import bannerImg from "../../../assets/image/1950-450-8.png";
import {ProductsWrapper} from "../Aside/Aside.styles";
import GreenAlert from "../../molecules/GreenAlert/GreenAlert"
import TopWeekProducts from "../TopWeekProducts/TopWeekProducts";
import Carousel from "../Carousel/Carousel";


const MainArticle = () => {


  const carousel = [
    {
      idx: 1,
      url: 'https://i.postimg.cc/jjfyQRFw/slide1.jpg'
    },
    {
      idx: 2,
      url: 'https://i.postimg.cc/JhjBHPsj/slide2.jpg'
    },
    {
      idx: 3,
      url: 'https://i.postimg.cc/P5YCXDtC/pexels-godisable-jacob-1191536.jpg'
    },

  ]


  return (
    <Wrapper>
      <ArticleWrapper>
        <Banner product="necklaces" header="latest bestsellers" bannerImg={bannerImg}/>
        <ProductsWrapper>
          <Products/>
        </ProductsWrapper>
        <GreenAlert/>
        <TopWeekProducts/>

      </ArticleWrapper>
      <ContainerSlides>
        <CarouselWrapper>
          <Carousel elements={carousel}/>
        </CarouselWrapper>

      </ContainerSlides>


    </Wrapper>
  );
};

export default MainArticle;