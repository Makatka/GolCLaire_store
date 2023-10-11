import React from 'react';
import {Wrapper} from './InfoCard.styles'
import CardHeader from "../../atoms/CardHeader/CardHeader";

const InfoCard = ({icon, cardHeader, cardDetails}) => {
  return (
    <Wrapper>
      <span>{icon}</span>
      <CardHeader title={cardHeader} />
      <p>{cardDetails}</p>
    </Wrapper>
  );
};

export default InfoCard;