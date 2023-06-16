import React from 'react';
import {BannerText, BannerWrapper} from './Banner.styles'

const Banner = () => {
  return (
    <BannerWrapper>
      <BannerText>
        <span>Gold piercing</span>
        <h2>Flash sale</h2>
        <p>15 NOV - 25 NOV</p>
        <p>See More products</p>
      </BannerText>
    </BannerWrapper>
  );
};

export default Banner;