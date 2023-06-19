import React from 'react';
import {BannerText, BannerWrapper} from './Banner.styles'

const Banner = ({product, header, timeLine}) => {
  return (
    <BannerWrapper>
      <BannerText>
        <span>{product}</span>
        <h2>{header}</h2>
        <p>{timeLine}</p>
        <p>See More products</p>
      </BannerText>
    </BannerWrapper>
  );
};

export default Banner;