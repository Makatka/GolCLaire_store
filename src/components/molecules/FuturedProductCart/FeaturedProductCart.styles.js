import styled from "styled-components";
import {Button} from "../../atoms/Button/Button";

export const CartItem = styled.div`
  padding: 10px;
  border: 1px solid #e2e2e2;
  letter-spacing: unset;
  

  &:hover {
    ${Button} {
      color: white;
      background-color: ${({theme}) => theme.colors.accent};
    }
  }

  h6 {
    margin: 7px 0 0;
    font-size: 14px;
    line-height: 1.6;
    text-transform: capitalize;
    letter-spacing: .8px;
  }

  img {
    width: 100px;
    aspect-ratio: 1/1;
    margin-right: 25px;
  }

  ${Button} {
    padding: 5px;
    font-size: 13px;
    color: ${({theme}) => theme.colors.accent};
    background-color: transparent;
  }
`
export const Price = styled.span`
  margin: 7px 0;
  display: block;

`
export const Status = styled.span`
  width: 100px; 
  background-color: rgba(240, 62, 62, .11);
  border: 1px solid #ffbfc1;;
  color: rgb(240, 62, 62);
  text-transform: none;
  margin-right: 10px;
  font-size: 12px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 1px;
  
`
export const StatusWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 7px;
 
  p {
    color: ${({theme}) => theme.colors.text};
    text-transform: none;
    font-size: 12px;
    
  }
`