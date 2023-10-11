import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({theme}) => theme.colors.accent};
  text-align: center;
  
  span svg {
    font-size: 60px;
  }

  p {
    color: rgb(125, 125, 125);
    margin: 0;
  }

`