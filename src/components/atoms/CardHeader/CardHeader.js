import React from 'react';
import styled from "styled-components";


const Header = styled.h4 `
 
    font-size: 20px;
    letter-spacing: 1px;
    line-height: 1.4;
    margin: 0  10px 0;
 
`
const CardHeader = ({title}) => {
  return (
    <Header>{title}
    </Header>
  );
};

export default CardHeader;