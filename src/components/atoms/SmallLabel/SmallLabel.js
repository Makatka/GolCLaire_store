import React from 'react';
import styled from "styled-components";

const Label = styled.span`
  background-color: ${({theme}) => theme.colors.gold};
  text-transform: uppercase;
  padding: 5px 15px;
  border-radius: 30px;
  font-size: 10px;
  line-height: 1.4;
  font-weight: 600;
  letter-spacing: 1.8px;
`
const SmallLabel = ({text}) => {
  return (
    <Label>
      {text}
    </Label>
  );
};

export default SmallLabel;