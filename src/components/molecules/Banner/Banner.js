import React from 'react';
import {BannerText, BannerWrapper} from './Banner.styles'

const Banner = ({product, header, subtitle, bannerImg}) => {
  return (
    <BannerWrapper style={{backgroundImage: `url(${bannerImg})`}}>
      <BannerText>
        <span>{product}</span>
        <h2>{header}</h2>
        <p>{subtitle}</p>
        <p>See More products</p>
      </BannerText>
    </BannerWrapper>
  );
};

export default Banner;