import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  
  
  &>div:nth-of-type(2), &>div:last-of-type {
    display: flex;
      
    
    p {
      color:${({theme}) => theme.colors.text};
      font-size: 15px;
      margin-top: 10px;
      span {
        font-weight: bold;
        color: ${({theme}) => theme.colors.accent};
        margin-left: 5px;
      
      }
    }
   
  }

  &>div:last-of-type{
    text-align: right;
  }
  
`
export const AvailableLabel = styled.div`
  position: relative;
  width: 100%;
  height: 10px;
  border-radius: 5px;
  background-color: ${({theme}) => theme.colors.semi_light_grey};
  
  &:after {
    content: '';
    position: absolute;
    top:0;
    left:0;
    width: 20%;
    height: 10px;
    border-radius: 5px;
    background-color: ${({theme}) => theme.colors.red};
  }
  
`