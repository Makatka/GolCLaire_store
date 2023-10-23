import styled from "styled-components";

export const CounterStyles = styled.div`
  height: 100px;
  width: 100%;
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='10' ry='10' stroke='%237D7D7DFF' stroke-width='5' stroke-dasharray='6%2c 10' stroke-dashoffset='35' stroke-linecap='square'/%3e%3c/svg%3e");
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;


  & > div {
    font-size: 49px;
    color: ${({theme}) => theme.colors.accent};
    line-height: 49px;
    position: relative;
    padding: 0 10px;
  }

  span {
    color: ${({theme}) => theme.colors.text};
    font-size: 28px;
   
  }


`