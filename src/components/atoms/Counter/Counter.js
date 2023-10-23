import React from 'react';
import {CounterStyles} from "./Counter.styles";


const Counter = () => {
  return (
    <CounterStyles>
      <div>00</div>
      <span>-</span>
      <div>13</div>
      <span>-</span>
      <div>57</div>
      <span>-</span>
      <div>42</div>
    </CounterStyles>
  );
};

export default Counter;