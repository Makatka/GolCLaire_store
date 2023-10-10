import styled from "styled-components";


export const ProductsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  width: 100%;
  height: 100%;
  margin-left: 20px;

  @media screen and (max-width: 992px){
    margin: 20px 0;
  }
 `
