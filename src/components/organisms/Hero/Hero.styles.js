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
  
  ${BannerWrapper} {
    border-radius: 0;
    
    span, h2, p {
      color: white;
    }
  }

  @media screen and (max-width: 992px){
    flex-direction: column;    
  }
`