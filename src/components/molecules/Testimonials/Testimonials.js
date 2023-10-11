import React from 'react';
import {Wrapper, UserName, UserImage, TestimonialsText, FlexWrapper } from "./Testimonials.styles"


const Testimonials = () => {
  return (
    <Wrapper>

      <FlexWrapper>
        <UserImage />
        <UserName>
          <h5>Jessica Brown</h5>
          <span>Customer</span>
        </UserName>
      </FlexWrapper>
      <TestimonialsText>
        <p>This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch. Duis aute lorem ipsum is simply free text irure dolor in reprehenderit in esse nulla pariatur</p>
      </TestimonialsText>
    </Wrapper>
  );
};

export default Testimonials;