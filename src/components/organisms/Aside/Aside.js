import React from 'react';
import CardHeader from "../../atoms/CardHeader/CardHeader";
import {ViewAllLink} from "../../atoms/ViewAllLink/ViewAllLink";
import FeaturedProductCart from "../../molecules/FuturedProductCart/FeaturedProductCart";
import image1 from "../../../assets/image/products/37000208_OR_B-450x450.jpg";
import image2 from "../../../assets/image/products/37002520_20_B.jpeg";
import image3 from "../../../assets/image/products/37002518_40_B.jpg";
import Testimonials from "../../molecules/Testimonials/Testimonials";
import AlertBanner from "../../molecules/AlertBanner/AlertBanner";
import {Wrapper, AsideSection} from "./Aside.styles";
import ProductBanners from "../../molecules/ProductBanners/ProductBanners";
import ShopGuarantee from "../../molecules/ShopGuarantee/ShopGuarantee";


const Aside = () => {
  return (
    <AsideSection>
      <Wrapper>
        <CardHeader title='Futured Deals'/>
        <ViewAllLink>View All</ViewAllLink>
      </Wrapper>
      <FeaturedProductCart image={image1} actionBtn='Add to cart' price='144.00' status='Expired'
                           productName='360deg Product'/>
      <FeaturedProductCart image={image2} actionBtn='Read more' price='95.00' status='Expired'
                           productName='The air scoop-neck tee'/>
      <FeaturedProductCart image={image3} actionBtn='Add to cart' price='240.00' status='Expired'
                           productName='Beaded double necklace'/>
      <CardHeader title="Testimonials"/>
      <Testimonials/>
      <AlertBanner type='yellow' header='2nd shopping campign!'
                   buttonText='Check Products' direction='column'/>
      <ProductBanners/>
      <ShopGuarantee />

    </AsideSection>
  );
};

export default Aside;