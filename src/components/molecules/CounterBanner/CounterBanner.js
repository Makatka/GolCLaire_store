import React from 'react';
import {Wrapper, BannerText} from "./CounterBanner.styles";
import SmallLabel from "../../atoms/SmallLabel/SmallLabel";
import Counter from "../../atoms/Counter/Counter";

const CounterBanner = () => {
  return (
    <Wrapper>
      <BannerText>
        <SmallLabel text = 'Deals fo the week'/>
        <h2>Reflect the bonds of the past into your <span>modern</span> life.</h2>
        <p>Fashion is about dressing according to what's fashionable. Style is more about being yourself. Design is a constant challenge to balance comfort with luxe...</p>
        <Counter durationDays = {35}/>
        <button>Buy Products</button>
      </BannerText>
    </Wrapper>
  );
};

export default CounterBanner;