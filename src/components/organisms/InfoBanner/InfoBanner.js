import React from 'react';
import {Container} from "../../templates/Container/Container";
import InfoCard from "../../molecules/InfoCard/InfoCard";
import {CiDiscount1, CiCreditCard2, CiDeliveryTruck} from 'react-icons/ci'
import {IoRibbonOutline} from 'react-icons/io5'
import {InfoWrapper} from "./InfoBanner.styles";

const InfoBanner = () => {
  return (
    <Container>
      <InfoWrapper>
        <li>
          <InfoCard
            icon={<CiDiscount1/>}
            cardHeader="Amazing Value Every Day"
            cardDetails="Items prices that fit your budget"
          />
        </li>
        <li>
          <InfoCard
            icon={<IoRibbonOutline/>}
            cardHeader="Successful Customer Service"
            cardDetails="We work with a focus on 100% customer satisfaction."
          /></li>
        <li>
          <InfoCard
            icon={<CiCreditCard2/>}
            cardHeader="All Payment Methods"
            cardDetails="Don't bother with payment details."
          /></li>
        <li>
          <InfoCard
            icon={<CiDeliveryTruck/>}
            cardHeader="Completely free shipping"
            cardDetails="We'll handle the shipping."
          /></li>
      </InfoWrapper>
    </Container>
  );
};

export default InfoBanner;