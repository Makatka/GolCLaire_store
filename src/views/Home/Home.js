import React from 'react';
import Hero from "../../components/organisms/Hero/Hero";
import InfoBanner from "../../components/organisms/InfoBanner/InfoBanner";
import {Container} from "../../components/templates/Container/Container";
import Aside from "../../components/organisms/Aside/Aside";
import bannerImg2 from '../../assets/image/banner2.png';
import bannerImg3 from '../../assets/image/banner3.png';
import Banner from "../../components/molecules/Banner/Banner";
import Products from "../../components/organisms/Products/Products";
import AlertBanner from "../../components/molecules/AlertBanner/AlertBanner";
import {Article, SectionWrapper, AlertWrapper} from "./Home.styles";


const Home = () => {
  return (
    <Container>
      <Hero/>
      <InfoBanner/>
      <SectionWrapper>
        <Banner product="nose rings" header="Nose earrings" subtitle="25 nov - 29 nov" bannerImg={bannerImg2}/>
        <Products/>
      </SectionWrapper>

      <AlertWrapper>
        <AlertBanner type='red' header='Super discount for our first purchase'
                     description='Use discount code in checkout page' buttonText='first250'/>
        <AlertBanner type='yellow' header='2nd shopping surprise campaign' buttonText='check products'/>
      </AlertWrapper>

      <SectionWrapper>
        <Banner product="nose rings" header="Nose earrings" subtitle="25 nov - 29 nov" bannerImg={bannerImg3}/>
        <Products/>

      </SectionWrapper>
      <AlertWrapper>
        <AlertBanner type='red' header='Super discount for our first purchase'
                     description='Use discount code in checkout page' buttonText='first250'/>
        <AlertBanner type='yellow' header='2nd shopping surprise campaign' buttonText='check products'/>
      </AlertWrapper>

      <SectionWrapper>
        <Aside />

        <Article>
          {//<Banner product="nose rings" header="Nose earrings" subtitle="25 nov - 29 nov"/>
          }
          {
            // <Products/>
          }

        </Article>
      </SectionWrapper>


    </Container>

  )
}

export default Home;