import React from 'react';
import {AlertText, GreenAlertStyles} from "../GreenAlert/GreenAlert.styles"

const GreenAlert = () => {
  return (
    <GreenAlertStyles>
      <span>SALE</span>
      <AlertText>
        <h4>Super discount for your first purchase</h4>
        <p>Use discount code in checkout page.</p>
      </AlertText>

      <span>BUYNOW225</span>
    </GreenAlertStyles>
  );
};

export default GreenAlert;