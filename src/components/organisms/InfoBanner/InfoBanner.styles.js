import styled from 'styled-components';

export const InfoWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 50px 0;
  gap: 20px;
 
  @media screen and (max-width: 576px){
    grid-template-columns: 1fr 1fr;
    
  }
  
`