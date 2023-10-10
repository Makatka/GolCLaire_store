import React from 'react';
import Hero from "../../components/organisms/Hero/Hero";
import InfoBanner from "../../components/organisms/InfoBanner/InfoBanner";
import {Container} from "../../components/templates/Container/Container";
import {Aside, Wrapper} from "../../components/templates/Aside/Aside";
import {SectionHeader} from "../../components/atoms/SeactionHeader/SeactionHeader";
import {ViewAllLink} from "../../components/atoms/ViewAllLink/ViewAllLink";
import FeaturedProductCart from "../../components/molecules/FuturedProductCart/FeaturedProductCart";
import image1 from "../../assets/image/products/37000208_OR_B-450x450.jpg";
import image2 from "../../assets/image/products/37002520_20_B.jpeg";
import image3 from "../../assets/image/products/37002518_40_B.jpg";
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
        <Aside>
          <Wrapper>
            <SectionHeader>Futured Deals</SectionHeader>
            <ViewAllLink>View All</ViewAllLink>
          </Wrapper>


          <FeaturedProductCart image={image1} actionBtn='Add to cart' price='144.00' status='Expired'
                               productName='360deg Product'/>
          <FeaturedProductCart image={image2} actionBtn='Read more' price='95.00' status='Expired'
                               productName='The air scoop-neck tee'/>
          <FeaturedProductCart image={image3} actionBtn='Add to cart' price='240.00' status='Expired'
                               productName='Beaded double necklace'/>

        </Aside>
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