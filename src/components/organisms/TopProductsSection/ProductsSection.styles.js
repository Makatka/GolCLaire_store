import styled from "styled-components";
import bannerImg from '../../../assets/image/banner2.png'

import {BannerText, BannerWrapper} from "../../molecules/Banner/Banner.styles";


export const ProductsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  width: 100%;
 
  `

export const Wrapper = styled.article`
  display: flex;
  justify-content: space-between;
  width: 100%;


  ${BannerWrapper} {
    background-image: url(${bannerImg});
    border-radius: 15px;
    min-width: 370px;
    margin-right: 20px;

    ${BannerText} {
      color: ${({theme}) => theme.colors.accent};
    }
  }

  @media screen and (max-width: 1200px){
    ${ProductsWrapper}{
      grid-template-columns: repeat(3, 1fr); 
    }   
  }
  
  @media screen and (max-width: 992px) {
    flex-direction: column-reverse;
    ${ProductsWrapper} {
      grid-template-columns: repeat(4, 1fr);
    }
    ${BannerWrapper} {
      height: 300px;
      margin-top: 50px;
    }
  }

  @media screen and (max-width: 576px){
    ${ProductsWrapper}{
      grid-template-columns: repeat(3, 1fr);
    }
  }

`


