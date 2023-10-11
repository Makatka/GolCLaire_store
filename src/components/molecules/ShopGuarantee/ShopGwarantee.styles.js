import styled from "styled-components";

export const ShopGuaranteeStyles = styled.div`
  display: flex;
  flex-direction: column;
  
  &>div {
    border: 2px solid #ddd;
    border-radius: 3px;
    padding: 25px 20px;
    text-align: left;
    
    
    &>h4 {
      font-size: 16px;
      margin: 10px 0;
    }
    &>p {
      font-size: 13px;
    }
    
    &>span svg {
      height: 35px;
      color: rgb(125, 125, 125);
    }
  }

  &>div:nth-of-type(2){
    border-top: none;
    border-bottom: none;
  }
  
`