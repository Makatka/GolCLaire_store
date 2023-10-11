import styled from "styled-components";
import userImage from '../../../assets/image/37040112_PL-99999999_01-80x80.jpg'
export const Wrapper = styled.div`
  width: 100%;
  height: 400px;
  background-color: ${({theme}) => theme.colors.accent};
  padding: 40px;
  border-radius: 10px;
  color: white;
  font-family: 'Jost', sans-serif;
  display: flex;
  flex-direction: column;
`
export const FlexWrapper = styled.div`
display: flex;
  align-items: center;
  justify-content: left;
`
export const UserImage = styled.div`
  background-image: url(${userImage});
  background-size: cover;
   width: 80px;
  height: 80px;
  border-radius: 50%;
 
  

`
export const UserName = styled.div`

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
