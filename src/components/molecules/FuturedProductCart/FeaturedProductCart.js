import React from 'react';
import {Button} from "../../atoms/Button/Button";
import {CartItem, Price, Status, StatusWrapper} from './FeaturedProductCart.styles'
import {FlexWrapper} from "../../templates/FlexWrapper/FlexWrapper";

const FeaturedProductCart = ({image, price, productName, actionBtn, status}) => {
  return (
    <CartItem>
      <FlexWrapper>
        <img src={image} alt={productName}/>
        <div>
          <h6>{productName}</h6>
          <Price>${price}</Price>
          <Button>{actionBtn}</Button>
        </div>

      </FlexWrapper>
      <StatusWrapper>
        <Status>{status}</Status>
        <p>Remains until the end of the offer</p>
      </StatusWrapper>
    </CartItem>
  );
};

export default FeaturedProductCart;