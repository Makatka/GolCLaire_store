import React from 'react';
import Banner from "../../molecules/Banner/Banner";
import {Container} from "../../templates/Container/Container";
import Slider from "../Slider/Slider";
import {HeroWrapper} from "./Hero.styles";
import bannerImg from "../../../assets/image/banner.png";




const Hero = () => {
  return (
      <Container>
        <HeroWrapper>
          <Slider/>
          <Banner product="gold piercing" header="flash sale" subtitle="15 nov - 25 nov" bannerImg={bannerImg}/>
        </HeroWrapper>
      </Container>
  );
};

export default Hero;