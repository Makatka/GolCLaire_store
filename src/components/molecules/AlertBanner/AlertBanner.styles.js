import styled from "styled-components";
import {Button} from "../../atoms/Button/Button";

export const Alert = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px dashed;
  border-radius: 5px;
  padding: 0 30px;
  background-color: ${({type, theme: {colors}}) => (type === 'red' ? 'rgba(240, 62, 62, .11)' : 'none')};
  background-color: ${({type, theme: {colors}}) => (type === 'yellow' ? 'rgba(250, 194, 19, .11)' : 'none')};
  border-color: ${({type, theme: {colors}}) => (type === 'red' ? 'rgba(240, 62, 62)' : 'none')};
  border-color: ${({type, theme: {colors}}) => (type === 'yellow' ? 'rgba(250, 194, 19)' : 'none')};


  h4 {
    font-weight: 900;
    font-size: 20px;
    line-height: 1.4;
    margin-right: 20px;
    color: ${({type, theme: {colors}}) => (type === 'red' ? 'rgba(240, 62, 62)' : 'none')};
    color: ${({type, theme: {colors}}) => (type === 'yellow' ? 'rgba(250, 194, 19)' : 'none')};
  }

  p {
    font-size: 14px;
    line-height: 1.6;
    margin-left: 20px;
  }

  ${Button} {
    background-color: ${({type, theme: {colors}}) => (type === 'red' ? 'rgba(240, 62, 62)' : 'none')};
    background-color: ${({type, theme: {colors}}) => (type === 'yellow' ? 'rgba(250, 194, 19)' : 'none')};
    border-radius: 30px;
    padding: 11px 25px;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-size: 12px;
  }
`

