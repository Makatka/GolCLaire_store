import React from 'react';
import BannerLink from "../../atoms/BannerLink/BannerLink";
import backgroundImage1 from "../../../assets/image/background-3-500x500.jpg"
import backgroundImage2 from "../../../assets/image/background-9-500x500.jpg"
import backgroundImage3 from "../../../assets/image/background-10-500x500.jpg"
import styled from "styled-components";


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const ProductBanners = () => {
  return (
    <Wrapper>
     <BannerLink image={backgroundImage1}/>
     <BannerLink image={backgroundImage2}/>
     <BannerLink image={backgroundImage3}/>
    </Wrapper>
  );
};

export default ProductBanners;