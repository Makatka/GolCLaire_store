import React from 'react';
import Banner from "../../molecules/Banner/Banner";
import {Container} from "../../templates/Container/Container";
import Slider from "../Slider/Slider";
import {HeroWrapper} from "./Hero.styles";
import bannerImg from "../../../assets/image/banner.png";

const heroSlides = [
  {
    imgUrl: 'https://i.postimg.cc/jjfyQRFw/slide1.jpg',
    slideHeader: 'Meet the lines of the Millennium',
    slideText: 'Fashion is to please your eye. Shapes and proportions are for your intellect. I have an obsession with ' +
      'details and pattern.',
    darkBtn: 'Check Collection',
    lightBtn: 'Shop Now'
  },
  {
    imgUrl: 'https://i.postimg.cc/JhjBHPsj/slide2.jpg',
    slideHeader: 'Meet the lines of the Millennium',
    slideText: 'Fashion is to please your eye. Shapes and proportions are for your intellect. I have an obsession with ' +
      'details and pattern.',
    darkBtn: 'Check Collection',
    lightBtn: 'Shop Now'
  },
  {
    imgUrl: 'https://i.postimg.cc/P5YCXDtC/pexels-godisable-jacob-1191536.jpg',
    slideHeader: 'Meet the lines of the Millennium',
    slideText: 'Fashion is to please your eye. Shapes and proportions are for your intellect. I have an obsession with ' +
      'details and pattern.',
    darkBtn: 'Check Collection',
    lightBtn: 'Shop Now'
  }
]


const Hero = () => {
  return (
    <Container>
      <HeroWrapper>
        <Slider slides={heroSlides}/>
        <Banner product="gold piercing" header="flash sale" subtitle="15 nov - 25 nov" bannerImg={bannerImg}/>
      </HeroWrapper>
    </Container>
  );
};

export default Hero;