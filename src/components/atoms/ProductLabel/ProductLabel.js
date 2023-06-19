import React from 'react';
import styled from "styled-components";

const Label = styled.div`
  position: absolute;
  top: 10px;
  left:10px;
  background-color: ${({theme}) => (theme.colors.accent)};
  color: white;
  z-index: 2;  
  height: 20px;
  padding: 0 7px;
  font-size: 10px;
  font-weight: 600;
  line-height: 1.4;
  border-radius: 3px;
  text-transform: uppercase;
  letter-spacing: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const ProductLabel = ({children}) => {
  return (
    <Label>
      {children}
    </Label>
  );
};

export default ProductLabel;