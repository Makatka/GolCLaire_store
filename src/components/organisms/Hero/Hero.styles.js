import styled from "styled-components";
import Slider from "../Slider/Slider";

import {BannerWrapper} from "../../molecules/Banner/Banner.styles";

export const HeroWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: 30px;
  gap: 20px;

  ${Slider} {
    width: 70%;
  }
 
  ${BannerWrapper}{
    min-width: 25%;
    max-width: 370px;
  }

  @media screen and (max-width: 1025px){
    flex-direction: column;
    ${BannerWrapper} {
      max-width: 100%;
      height: 300px;
    }
  }
`