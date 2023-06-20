import React from 'react';
import {Button} from "../../atoms/Button/Button";
import {Alert} from './AlertBanner.styles'

const AlertBanner = ({header, buttonText, description, type}) => {
  return (
    <Alert type={type}>
      <h4>{header}</h4>
      <Button>{buttonText}</Button>
      <p>{description}</p>
    </Alert>
  );
};

export default AlertBanner;