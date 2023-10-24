import React, {useRef, useState, useEffect} from 'react';
import {CounterStyles} from "./Counter.styles";


const Counter = ({durationDays}) => {
  const [time, setTime] = useState(durationDays * 24 * 60 * 60);


  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(time - 1);
    }, 1000)
    return () => clearTimeout(timer);
  }, [time])


  return (
    <CounterStyles>
      <div>{("0" + Math.floor(time / 86400)).slice(-2)}</div>
      <span> - </span>
      <div>{("0" + Math.floor((time / 3600) % 24)).slice(-2)}</div>
      <span> - </span>
      <div>{("0" + Math.floor((time / 60) % 60)).slice(-2)}</div>
      <span> - </span>
      <div>{("0" + Math.floor(time % 60)).slice(-2)}</div>
    </CounterStyles>
  );
};

export default Counter;