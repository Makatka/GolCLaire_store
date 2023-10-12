import styled from "styled-components";

export const GreenAlertStyles = styled.div`
    background-color: rgba(157, 171, 134, 0.18);
    border: 1px dashed rgb(157, 171, 134);
    display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  
  span:first-of-type {
    color: white;
    background-color: rgb(157, 171, 134);
    display: flex;
    align-items: center;
    letter-spacing: 2px;
    margin-left: 20px;
    padding: 45px 30px 50px 30px;
  }
   
  span:last-of-type {
    font-size: 20px;
    font-weight: 900;
    margin-right: 20px;
  }

 
`
export const AlertText = styled.div`
  flex-grow: 1;
  text-align: left;
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-left: 20px;
  h4 {
    margin-bottom: 0;
    font-size: 20px;
  }
  p {
    color: rgb(125, 125, 125);
    font-size: 15px;
  }
  
`