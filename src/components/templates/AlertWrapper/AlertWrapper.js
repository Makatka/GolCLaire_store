import styled from "styled-components";

export const AlertWrapper = styled.section`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 50px 0;
  gap: 20px;
  
  @media screen and (max-width: 992px) {
    flex-direction: column;
  }
`