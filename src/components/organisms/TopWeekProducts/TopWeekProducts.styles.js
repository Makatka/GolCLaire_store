import styled from "styled-components";
import CardHeader from "../../atoms/CardHeader/CardHeader";

export const Wrapper = styled.article`
  display: flex;
  position: relative;
  align-items: center;
  padding: 40px 20px 20px 0;
  width: 100%;
  justify-content: space-between;

  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 90px;
    left: 0;
    border-bottom: 1px solid ${({theme}) => theme.colors.semi_light_grey};
    width: 100%;
    height: 1px;
  }

  & > div {
    display: flex;
    justify-content: center;

    span {
      color: ${({theme}) => theme.colors.text};
      font-size: 15px;
      display: flex;
      align-items: center;
      margin-left: 15px;
      letter-spacing: 1px;
    }

    & > h4 {
      margin-left: 0;
    }
  }

  a {
    font-size: 15px;
  }
`
export const Carousel = styled.div`
display: flex;
  margin-top: 30px;
  gap: 20px;
  
  &>div {
    border: 1px solid ${({theme}) => theme.colors.semi_light_grey};
    padding: 20px;
    border-radius: 10px;
    box-shadow: 1px 2px 4px rgba(33,37,41,.05);
    box-sizing: content-box;
    transition: all 0.3s ease-in-out;
    
    &:hover {
      box-shadow: 0 0 0 2px ${({theme}) => theme.colors.red};
    }
  }
`
