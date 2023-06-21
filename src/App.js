import React from 'react';
import Navigation from "./components/organisms/Navigation/Navigation";
import TopBar from "./components/organisms/TopBar/TopBar";
import Hero from "./components/organisms/Hero/Hero";
import InfoBanner from "./components/organisms/InfoBanner/InfoBanner";
import ProductsSection from "./components/organisms/TopProductsSection/ProductsSection";
import {FlexWrapper} from "./components/organisms/TopBar/TopBar.styles";
import {Aside} from "./components/templates/Aside/Aside";
import FeaturedProductCart from "./components/molecules/FuturedProductCart/FeaturedProductCart";
import image1 from './assets/image/products/37000208_OR_B-450x450.jpg';
import image2 from './assets/image/products/37002520_20_B.jpeg';
import image3 from './assets/image/products/37002518_40_B.jpg';
import {Container} from "./components/templates/Container/Container";
import {SectionHeader} from "./components/atoms/SeactionHeader/SeactionHeader";
import {ViewAllLink} from "./components/atoms/ViewAllLink/ViewAllLink";



const App = () => {

  return (
    <div>
      <TopBar/>
      <Navigation/>
      <Hero/>
      <InfoBanner/>
      <ProductsSection />
      <ProductsSection />
      <Container>
        <FlexWrapper>
          <Aside>
            <FlexWrapper>
              <SectionHeader>Futured Deals</SectionHeader>
              <ViewAllLink>View All</ViewAllLink>
            </FlexWrapper>

            <FeaturedProductCart image={image1} actionBtn='Add to cart' price='144.00' status='Expired' productName='360deg Product'/>
            <FeaturedProductCart image={image2} actionBtn='Read more' price='95.00' status='Expired' productName='The air scoop-neck tee'/>
            <FeaturedProductCart image={image3} actionBtn='Add to cart' price='240.00' status='Expired' productName='Beaded double necklace'/>
          </Aside>
          <div>

          </div>
        </FlexWrapper>
      </Container>

    </div>
  );
};

export default App;