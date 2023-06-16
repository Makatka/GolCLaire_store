import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100vw;
  height: 44px;
  background-color: ${({theme}) => theme.colors.accent};
  color: white;
  display: flex;
  align-items: center;
  
`
export const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 10px;
  
    @media screen and (max-width: 576px){
      justify-content: center;
      height: 44px;
    }


  ul {
    display: flex;
    gap: 10px;
    
    li:hover {
      cursor: pointer;
      color: ${({theme}) => theme.colors.semi_light_grey};
    }
    
    @media screen and (max-width: 576px){
      display: none;
    }
  }
  
  ul:first-of-type {
    font-size: 13px;
  }
`
