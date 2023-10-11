import React from 'react';
import {LinkWrapper} from "./BannerLink.styles";

const BannerLink = ({image}) => {
  return (
    <LinkWrapper style={{backgroundImage: `url(${image})`}}>
        <span>Earrings</span>
        <h6>Create your combo nowl</h6>
    </LinkWrapper>

  );
};

export default BannerLink;