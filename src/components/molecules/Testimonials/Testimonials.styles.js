import styled from "styled-components";

export const TestimonialsWrapper = styled.div `
  width: 100%;
  overflow: hidden;
`
export const CarouselElements = styled.ul `
  width: 100%;
  display: flex;
  align-items: center;
 
  li {
    width: 100%;
    height: 400px;
    background-color: ${({theme}) => theme.colors.accent};
    padding: 40px;
    border-radius: 10px;
    font-family: 'Jost', sans-serif;
    display: flex;
    flex-shrink: 0;
    color: white;
    transition: all .5s ease-in;
    transform: translateX(${({sliderNumber}) => sliderNumber}% );
  }

  
`

export const Wrapper = styled.div`
  width: 100%;
  height: 400px;
  background-color: ${({theme}) => theme.colors.accent};
  padding: 40px;
  border-radius: 10px;
  font-family: 'Jost', sans-serif;
  display: flex;
  flex-shrink: 0;
  color: white;
`

export const Container = styled.li `
  width: 100%;
  flex-direction: column;
`
export const FlexWrapper = styled.div`
display: flex;
  align-items: center;
  justify-content: left;
`
export const UserImage = styled.div`
  background-size: cover;
   width: 80px;
  height: 80px;
  border-radius: 50%;


`
export const Author = styled.div`

  margin-left: 20px;
  letter-spacing: 1px;
  
  h5 {
    font-size: 16px;
    line-height: 1.6;
    margin: 0;
    letter-spacing: 1px;
  }
  span {
    text-align: left;
    font-size: 15px;
    font-weight: 100;
  }
`
export const TestimonialsText = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
 p {
   line-height: 1.75;
   letter-spacing: 1px;
   font-weight: 100;
   font-size: 15px;
   text-align: center;       
 }

`

