import React from 'react';
import {Wrapper} from './InfoCard.styles'

const InfoCard = ({icon, cardHeader, cardDetails}) => {
  return (
    <Wrapper>
      <span>{icon}</span>
      <h4>{cardHeader}</h4>
      <p>{cardDetails}</p>
    </Wrapper>
  );
};

export default InfoCard;