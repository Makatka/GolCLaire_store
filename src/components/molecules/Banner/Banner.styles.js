import styled from "styled-components";


export const BannerWrapper = styled.a`
  width: 400px;
  display: block; 
  position: relative;
  background-size: cover;
  background-position: center center;
  border-radius: 15px;
  flex-shrink: 0;
  
  @media screen and (max-width: 992px){
    width: 100%;
    height: 250px;
  }

`
export const BannerText = styled.div`
  color: ${({theme}) => theme.colors.accent};
  position: absolute;
  bottom: 20px;
  text-align: center;
  width: 100%;
  font-size: 15px;

  
  span {
    font-size: 12px;
    line-height: 21.6px;
    text-transform: uppercase;
    font-weight: 800;
    letter-spacing: 2px;
    
  }
  
  h2 {
    font-size: 32px;
    font-weight: 500;
    line-height: 44.8px;
    margin-bottom: 10px;
    margin-top: 5px;
    font-family: 'Amethysta', serif;
    width: 100%;
    text-size-adjust: 100%;
    text-transform: uppercase;
  }
  
  p {
   &:first-of-type {
     text-transform: uppercase;
     font-family: 'Amethysta', serif;
     margin-top: 0;
   } 
    &:last-of-type {
      text-decoration: underline;
      text-transform: capitalize;
    }
  }

`
