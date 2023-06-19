import styled from "styled-components";
import bannerImg from '../../../assets/image/banner2.png'

import {BannerText, BannerWrapper} from "../../molecules/Banner/Banner.styles";

export const Wrapper = styled.article`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 100px;

  ${BannerWrapper} {
    background-image: url(${bannerImg});
    border-radius: 15px;
    min-width: 370px;
    margin-right: 20px;

    ${BannerText} {
      color: ${({theme}) => theme.colors.accent};
    }
  }

`
export const ProductsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  width: 100%;
  
  @media screen and (max-width: 1200px){
    grid-template-columns: repeat(3, 1fr);
  }

`