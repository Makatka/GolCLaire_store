import React from 'react';
import styled from "styled-components";

export const Button = styled.button`
  background-color: ${({isTransparent, theme: {colors}}) => (isTransparent ? 'transparent' : colors.accent)};
  color: white;
  padding: 18px 30px;
  font-size: 16px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${({isTransparent}) => (isTransparent ? 'white' : 'transparent')};
    color: ${({isTransparent, theme: {colors}}) => (isTransparent ? colors.text : 'white')};
  }

`

